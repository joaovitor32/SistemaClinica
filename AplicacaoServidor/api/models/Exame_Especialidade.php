<?php

    class ExameEspecialidade {
        private $codExame;
        private $codEspecialidade;

        private $dbUsuario;
        private $dbSenha;

        //SETTERS
        public function setCodExame($codigo){
            $this->codExame = $codigo;
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
        public function getCodExame(){
            return $this->codExame;
        }
        public function getCodEspecialidade(){
            return $this->codEspecialidade;
        }

        //CRUD
        public function lista(){
            try {

                include_once('../../database.class.php');
                include_once('../../utils/ExameUtil.php');
                include_once('../../utils/EspecialidadeUtil.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlLista = "SELECT EX.codExame, EX.nome AS exame, EX.descricao AS descricao_exame, EX.codigo,  EX.preco,
                                    E.codEspecialidade, E.nome AS especialidade, E.descricao AS descricao_especialidade
                             FROM exame_especialidade EXE 
                                INNER JOIN exame EX 
                                ON EXE.codExame = EX.codExame 
                                INNER JOIN especialidade E 
                                ON EXE.codEspecialidade = E.codEspecialidade
                             ORDER BY E.nome ASC";
                $conexao->exec('SET NAMES utf8');
                $stmtLista = $conexao->prepare($sqlLista);
                $stmtLista->execute();

                $lista = $stmtLista->fetchALL(PDO::FETCH_ASSOC);
                /*$response = Array();

                $keys = array_keys($lista);
                $size = count($lista);

                for ($i = 0; $i < $size; $i++) {
                    $key = $keys[$i];

                    if($lista[$key]["codEspecialidade"] == null) continue;

                    $aux->codEspecialidade = $lista[$key]["codEspecialidade"];
                    $aux->especialidade = $lista[$key]["especialidade"];
                    $aux->descricao_especialidade = $lista[$key]["descricao_especialidade"];

                    $exame->codExame = $lista[$key]["codExame"];
                    $exame->exame = $lista[$key]["exame"];
                    $exame->descricao_exame = $lista[$key]["descricao_exame"];
                    $exame->preco = $lista[$key]["preco"];
                    $exame->codigo = $lista[$key]["codigo"];

                    $aux->exames = array(clone $exame);

                    unset($lista[$key]);

                    foreach($lista as $key_aux => $row_aux) {
                        if(
                            $aux->codEspecialidade == $row_aux["codEspecialidade"] && 
                            !in_array($row_aux["codExame"], $aux->exames, true)
                            ) {
                                $aux_exame->codExame = $row_aux["codExame"];
                                $aux_exame->exame = $row_aux["exame"];
                                $aux_exame->descricao = $row_aux["descricao_exame"];
                                $aux_exame->codigo = $row_aux["codigo"];
                                $aux_exame->rpeco = $row_aux["preco"];

                                array_push($aux->exames, clone $aux_exame);
                                unset($lista[$key_aux]);
                        }
                    }

                    array_push($response, clone $aux);
                }


                return $response;*/
                foreach($lista as $row) {
                    $especialidade = isset($especialidades[$row['codEspecialidade']]) ? $consultas[$row['codEspecialidad']] : NULL;
            
                    if(!$especialidade) {
                        $especialidade = new EspecialidadeUtil($row['codEspecialidade'],$row['especialidade'],$row['descricao_especialidade']);
                        
                        $especialidades[$row['codEspecialidade']] = $especialidade;
                    }
            
                    $novo_exame = new ExameUtil($row['codExame'],$row['exame'],$row['descricao_exame'],$row['preco'],$row['codigo']);
                    $especialidade->addExame($novo_exame);
                }
                echo(json_encode($especialidades, JSON_FORCE_OBJECT));
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
                $sqlDelete = "DELETE FROM exame_especialidade WHERE codEspecialidade = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtDelete = $conexao->prepare($sqlDelete);
                $stmtDelete->bindParam(1,$this->codEspecialidade);
                $stmtDelete->execute();

                $sqlCreate = "INSERT INTO exame_especialidade(codEspecialidade, codExame) VALUES ";

                foreach($this->codExame as $codigo) {
                    $sqlCreate .= "($this->codEspecialidade, $codigo),";
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

                $sqlRead = "SELECT E.codExame, E.nome, E.descricao, E.codigo, E.preco
                            FROM exame_especialidade EXE
                                INNER JOIN exame E
                                ON EXE.codExame = E.codExame
                            WHERE EXE.codEspecialidade = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtRead = $conexao->prepare($sqlRead);
                $stmtRead->bindParam(1,$this->codEspecialidade);
                $stmtRead->execute();

                $exames = $stmtRead->fetchALL(PDO::FETCH_ASSOC);
                echo json_encode($exames);

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

                $sqlDelete = "DELETE FROM exame_especialidade WHERE codExame = ? AND codEspecialidade = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtDelete = $conexao->prepare($sqlDelete);
                $stmtDelete->bindParam(1,$this->codExame);
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
