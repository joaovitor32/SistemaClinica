<?php

    class ProfissionalEspecialidade {
        private $codProfissional;
        private $codEspecialidade;

        private $dbUsuario;
        private $dbSenha;

        //SETTERS
        public function setCodProfissional($codigo){
            $this->codProfissional = $codigo;
        }
        public function setCodEspecialidade($codigo){
            $this->codEspecialidade = $codigo;
        }
        public function setDBUsuario($usuario){
            $this->dbUsuario = $usuario;
        }
        public function setDBSenha($senha){
            $this->dbSenha = $senha;
        }

        //GETTERS
        public function getCodProfissional(){
            return $this->codProfissional;
        }
        public function getCodEspecialidade(){
            return $this->codEspecialidade;
        }

        //CRUD
        public function lista(){
            try {

                include_once('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlLista = "SELECT P.codProfissional, P.nome AS profissional, P.cpf, P.identificacao, 
                                    E.codEspecialidade, E.nome AS especialidade, E.descricao
                             FROM profissional_especialidade PE 
                                INNER JOIN profissional P 
                                ON PE.codProfissional =P.codProfissional 
                                INNER JOIN especialidade E 
                                ON PE.codEspecialidade = E.codEspecialidade
                             ORDER BY E.nome ASC";
                $conexao->exec('SET NAMES utf8');
                $stmtLista = $conexao->prepare($sqlLista);
                $stmtLista->execute();

                $lista = $stmtLista->fetchALL(PDO::FETCH_ASSOC);
                $response = Array();

                $keys = array_keys($lista);
                $size = count($lista);

                for ($i = 0; $i < $size; $i++) {
                    $key = $keys[$i];

                    if($lista[$key]["codProfissional"] == null) continue;

                    $aux->codProfissional = $lista[$key]["codProfissional"];
                    $aux->profissional = $lista[$key]["profissional"];
                    $aux->cpf = $lista[$key]["cpf"];
                    $aux->identificacao = $lista[$key]["identificacao"];

                    $especlialidade->codEspecialidade = $lista[$key]["codEspecialidade"];
                    $especlialidade->especialidade = $lista[$key]["especialidade"];
                    $especlialidade->descricao = $lista[$key]["descricao"];

                    $aux->especlialidades = array(clone $especlialidade);

                    unset($lista[$key]);

                    foreach($lista as $key_aux => $row_aux) {
                        if(
                            $aux->codProfissional == $row_aux["codProfissional"] && 
                            !in_array($row_aux["codEspecialidade"], $aux->especlialidades, true)
                            ) {
                                $aux_especlialidade->codEspecialidade = $row_aux["codEspecialidade"];
                                $aux_especlialidade->especialidade = $row_aux["especialidade"];
                                $aux_especlialidade->descricao = $row_aux["descricao"];

                                array_push($aux->especlialidades, clone $aux_especlialidade);
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
                $sqlDelete = "DELETE FROM profissional_especialidade WHERE codProfissional = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtDelete = $conexao->prepare($sqlDelete);
                $stmtDelete->bindParam(1,$this->codProfissional);
                $stmtDelete->execute();

                $sqlCreate = "INSERT INTO profissional_especialidade(codProfissional,codEspecialidade) VALUES ";

                foreach($this->codEspecialidade as $codigo) {
                    $sqlCreate .= "($this->codProfissional, $codigo),";
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

                $sqlRead = "SELECT E.codEspecialidade, E.nome, E.descricao
                            FROM profissional_especialidade PE
                                INNER JOIN especialidade E
                                ON PE.codEspecialidade = E.codEspecialidade
                            WHERE PE.codProfissional = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtRead = $conexao->prepare($sqlRead);
                $stmtRead->bindParam(1,$this->codProfissional);
                $stmtRead->execute();

                $especlialidades = $stmtRead->fetchALL(PDO::FETCH_ASSOC);
                echo json_encode($especlialidades);

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

                $sqlDelete = "DELETE FROM profissional_especialidade WHERE codProfissional = ? AND codEspecialidade = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtDelete = $conexao->prepare($sqlDelete);
                $stmtDelete->bindParam(1,$this->codProfissional);
                $stmtDelete->bindParam(2,$this->codEspecialidade);
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