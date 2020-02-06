<?php

    class ConsultaParecer {
        private $codConsulta;
        private $codParecer;

        private $dbUsuario;
        private $dbSenha;

        //SETTERS
        public function setCodConsulta($codigo){
            $this->codConsulta = $codigo;
        }
        public function setCodParecer($codigo){
            $this->codParecer = $codigo;
        }
        public function setDBUsuario($usuario){
            $this->dbUsuario = $usuario;
        }
        public function setDBSenha($senha){
            $this->dbSenha = $senha;
        }

        //GETTERS
        public function getCodConsulta(){
            return $this->codConsulta;
        }
        public function getCodParecer(){
            return $this->codParecer;
        }

        //CRUD
        public function lista(){
            try {

                include_once('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlLista = "SELECT C.codConsulta, C.dataHora, C.inicio, C.termino, C.validade, C.status,
                                    P.nome AS paciente, E.nome AS empresa, TC.nome AS tipo_consulta, 
                                    Pa.codParecer, Pa.nome AS parecer, Pa.descricao
                             FROM consulta_parecer CP 
                                INNER JOIN consulta C 
                                ON CP.codConsulta = C.codConsulta 
                                INNER JOIN parecer Pa 
                                ON CP.codParecer = Pa.codParecer
                                INNER JOIN paciente P
                                ON C.codPaciente = P.codPaciente
                                INNER JOIN empresa E
                                ON C.codEmpresa = E.codEmpresa
                                INNER JOIN tipo_consulta TC
                                ON C.codTipoConsulta = TC.codTipoConsulta
                             ORDER BY CP.codConsulta ASC";
                $conexao->exec('SET NAMES utf8');
                $stmtLista = $conexao->prepare($sqlLista);
                $stmtLista->execute();

                $lista = $stmtLista->fetchALL(PDO::FETCH_ASSOC);
                $response = Array();

                $keys = array_keys($lista);
                $size = count($lista);

                for ($i = 0; $i < $size; $i++) {
                    $key = $keys[$i];

                    if($lista[$key]["codConsulta"] == null) continue;

                    $aux->codConsulta = $lista[$key]["codConsulta"];
                    $aux->dataHora = $lista[$key]["dataHora"];
                    $aux->inicio = $lista[$key]["inicio"];
                    $aux->termino = $lista[$key]["termino"];
                    $aux->validade = $lista[$key]["validade"];
                    $aux->status = $lista[$key]["status"];
                    $aux->paciente = $lista[$key]["paciente"];
                    $aux->empresa = $lista[$key]["empresa"];
                    $aux->tipo_consulta = $lista[$key]["tipo_consulta"];

                    $parecer->codParecer = $lista[$key]["codParecer"];
                    $parecer->nome = $lista[$key]["parecer"];
                    $parecer->descricao = $lista[$key]["descricao"];

                    $aux->pareceres = array(clone $parecer);

                    unset($lista[$key]);

                    foreach($lista as $key_aux => $row_aux) {
                        if(
                            $aux->codConsulta == $row_aux["codConsulta"] && 
                            !in_array($row_aux["codParecer"], $aux->pareceres, true)
                            ) {
                                $aux_parecer->codParecer = $row_aux["codParecer"];
                                $aux_parecer->nome = $row_aux["parecer"];
                                $aux_parecer->descricao = $row_aux["descricao"];

                                array_push($aux->pareceres, clone $aux_parecer);
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
                $sqlDelete = "DELETE FROM consulta_parecer WHERE codConsulta = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtDelete = $conexao->prepare($sqlDelete);
                $stmtDelete->bindParam(1,$this->codConsulta);
                $stmtDelete->execute();

                $sqlCreate = "INSERT INTO consulta_parecer(codConsulta,codParecer) VALUES ";

                foreach($this->codParecer as $codigo) {
                    $sqlCreate .= "($this->codConsulta, $codigo),";
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

                $sqlRead = "SELECT Pa.codParecer, Pa.nome AS parecer, Pa.descricao
                            FROM consulta_parecer CP
                                INNER JOIN parecer Pa
                                ON CP.codParecer = Pa.codParecer
                            WHERE CP.codConsulta = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtRead = $conexao->prepare($sqlRead);
                $stmtRead->bindParam(1,$this->codConsulta);
                $stmtRead->execute();

                $pareceres = $stmtRead->fetchALL(PDO::FETCH_ASSOC);
                echo json_encode($pareceres);

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

                $sqlDelete = "DELETE FROM consulta_parecer WHERE codConsulta = ? AND codParecer = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtDelete = $conexao->prepare($sqlDelete);
                $stmtDelete->bindParam(1,$this->codConsulta);
                $stmtDelete->bindParam(2,$this->codParecer);
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