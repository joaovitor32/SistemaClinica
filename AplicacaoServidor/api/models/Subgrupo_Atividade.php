<?php

    class SubgrupoAtividade {
        private $codSubgrupo;
        private $codAtividade;

        private $dbUsuario;
        private $dbSenha;

        //SETTERS
        public function setCodAtividade($codigo){
            $this->codAtividade = $codigo;
        }
        public function setCodSubgrupo($codigo){
            $this->codSubgrupo = $codigo;
        }
        public function setDBUsuario($usuario){
            $this->dbUsuario = $usuario;
        }
        public function setDBSenha($senha){
            $this->dbSenha = $senha;
        }

        //GETTERS
        public function getCodPaciente(){
            return $this->codAtividade;
        }
        public function getCodSubgrupo(){
            return $this->codSubgrupo;
        }

        //CRUD
        public function lista(){
            try {

                include_once('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlLista = "SELECT A.codAtividade, A.nome AS atividade, A.descricao AS descricao_atividade, 
                                    S.codSubgrupo, S.nome AS subgrupo
                             FROM subgrupo_atividade SA 
                                INNER JOIN atividade A 
                                ON SA.codAtividade = A.codAtividade 
                                INNER JOIN subgrupo S 
                                ON SA.codSubgrupo = S.codSubgrupo
                             ORDER BY SA.codSubgrupo ASC";
                $conexao->exec('SET NAMES utf8');
                $stmtLista = $conexao->prepare($sqlLista);
                $stmtLista->execute();

                $lista = $stmtLista->fetchALL(PDO::FETCH_ASSOC);
                $response = Array();

                $keys = array_keys($lista);
                $size = count($lista);

                for ($i = 0; $i < $size; $i++) {
                    $key = $keys[$i];

                    if($lista[$key]["codSubgrupo"] == null) continue;

                    $aux->codSubgrupo = $lista[$key]["codSubgrupo"];
                    $aux->subgrupo = $lista[$key]["subgrupo"];

                    $atividade->codAtividade = $lista[$key]["codAtividade"];
                    $atividade->atividade = $lista[$key]["atividade"];
                    $atividade->descricao_atividade = $lista[$key]["descricao_atividade"];

                    $aux->atividades = array(clone $atividade);

                    unset($lista[$key]);

                    foreach($lista as $key_aux => $row_aux) {
                        if(
                            $aux->codAtividade == $row_aux["codAtividade"] && 
                            !in_array($row_aux["codExame"], $aux->exames, true)
                            ) {
                                $aux_atividade->codAtividade = $lista[$key]["codAtividade"];
                                $aux_atividade->atividade = $lista[$key]["atividade"];
                                $aux_atividade->descricao_atividade = $lista[$key]["descricao_atividade"];

                                array_push($aux->atividades, clone $aux_atividade);
                                unset($lista[$key_aux]);
                        }
                    }

                    array_push($response, clone $aux);
                }


                return $response;
            } catch (PDOException $e) {
                http_response_code(500);
                $erro = $e->getMessage();
                echo(json_encode(array('error' => "$erro"), JSON_FORCE_OBJECT));
            }
        }

        public function listaJSON(){
            echo json_encode($this->lista());
        }
        public function create(){

            try {

                include('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();
                // Inicia uma transaction, possibilitando rollback
                $conexao->beginTransaction();
                
                // Limpando a relação para inserir apenas os selecionados no array da requisição
                $sqlDelete = "DELETE FROM subgrupo_atividade WHERE codSubgrupo = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtDelete = $conexao->prepare($sqlDelete);
                $stmtDelete->bindParam(1,$this->codSubgrupo);
                $stmtDelete->execute();

                $sqlCreate = "INSERT INTO subgrupo_atividade(codSubgrupo, codAtividade) VALUES ";

                foreach($this->codAtividade as $codigo) {
                    $sqlCreate .= "($this->codSubgrupo, $codigo),";
                }

                $sqlCreate = rtrim($sqlCreate, ',');

                $conexao->exec('SET NAMES utf8');
                $stmtCreate = $conexao->prepare($sqlCreate);
                $result = $stmtCreate->execute();
                
                // Abaixo o rollback pode acontecer tanto em casos de Exceptions(catch) ou de resultado false da operação.
                if($result) {
                    $conexao->commit();
                    http_response_code(201);
                } else {
                    $conexao->rollback();
                    http_response_code(400);
                    echo(json_encode(array('error' => "Ocorreu um erro ao inserir o registro, verifique os valores."), JSON_FORCE_OBJECT));
                }

            } catch (PDOException $e) {
                $conexao->rollback();
                http_response_code(500);
                $erro = $e->getMessage();
                echo(json_encode(array('error' => "$erro"), JSON_FORCE_OBJECT));
            }
        }
        public function read(){

            try {

                include('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlRead = "SELECT A.codAtividade, A.nome, A.descricao
                            FROM subgrupo_atividade SA
                                INNER JOIN atividade A
                                ON SA.codAtividade = A.codAtividade
                            WHERE SA.codSubgrupo = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtRead = $conexao->prepare($sqlRead);
                $stmtRead->bindParam(1,$this->codSubgrupo);
                $stmtRead->execute();

                $atividades = $stmtRead->fetchALL(PDO::FETCH_ASSOC);
                echo json_encode($atividades);

            } catch (PDOException $e) {
                http_response_code(500);
                $erro = $e->getMessage();
                echo(json_encode(array('error' => "$erro"), JSON_FORCE_OBJECT));
            }
        }
        public function delete(){

            try {

                include('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlDelete = "DELETE FROM subgrupo_atividade WHERE codAtividade = ? AND codSubgrupo = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtDelete = $conexao->prepare($sqlDelete);
                $stmtDelete->bindParam(1,$this->codAtividade);
                $stmtDelete->bindParam(2,$this->codSubgrupo);
                $result = $stmtDelete->execute();

                if($result) {
                    http_response_code(204);
                } else {
                    http_response_code(400);
                    echo(json_encode(array('error' => "Ocorreu um erro ao remover o registro, verifique os valores."), JSON_FORCE_OBJECT));
                }

            } catch (PDOException $e) {
                http_response_code(500);
                $erro = $e->getMessage();
                echo(json_encode(array('error' => "$erro"), JSON_FORCE_OBJECT));
            }
        }
    }
?>