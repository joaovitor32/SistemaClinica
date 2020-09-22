<?php

    class ConsultaFatura {
        private $codConsultas;
        private $codFatura;

        private $dbUsuario;
        private $dbSenha;

        //SETTERS
        public function setCodConsultas($codigo){
            $this->codConsultas = $codigo;
        }
        public function setCodFatura($codigo){
            $this->codFatura = $codigo;
        }
        public function setDBUsuario($usuario){
            $this->dbUsuario = $usuario;
        }
        public function setDBSenha($senha){
            $this->dbSenha = $senha;
        }

        //GETTERS
        public function getCodConsultas(){
            return $this->codConsultas;
        }
        public function getCodFatura(){
            return $this->codFatura;
        }

        //CRUD
        public function create(){
            
            try {

                include('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();
                // Inicia uma transaction, possibilitando rollback
                $conexao->beginTransaction();
                /*
                  A cada iteração, é conferido se a consulta pertence à empresa da fatura, e então faz-se o INSERT
                  Caso a consulta não pertença à empresa, o MySQL retorna sucesso, porém não inserindo a linha.
                  Desta forma, ainda que consultas sejam erroneamente listadas, apenas as corretas serão cadastradas na fatura
                */
                foreach($this->codConsultas as $consulta) {
                    $sqlCreate = "  INSERT INTO consulta_fatura(codFatura, codConsulta)
                                    SELECT ?,?
                                    WHERE (
                                        SELECT F.codFatura 
                                        FROM fatura F
                                            INNER JOIN empresa E
                                            ON F.codEmpresa = E.codEmpresa
                                            INNER JOIN consulta C
                                            ON C.codEmpresa = E.codEmpresa
                                        WHERE F.codFatura = ? AND C.codConsulta =?
                                        ) > 0";

                        $conexao->exec('SET NAMES utf8');
                        $stmtCreate = $conexao->prepare($sqlCreate);
                        $stmtCreate->bindParam(1,$this->codFatura);
                        $stmtCreate->bindParam(2,$consulta);
                        $stmtCreate->bindParam(3,$this->codFatura);
                        $stmtCreate->bindParam(4,$consulta);
                        $result = $stmtCreate->execute();
                    }

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
    }
?>