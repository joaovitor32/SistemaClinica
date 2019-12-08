<?php

    class AtividadeExame {
        private $codAtividade;
        private $codExame;

        private $dbUsuario;
        private $dbSenha;

        //SETTERS
        public function setCodAtividade($codigo){
            $this->codAtividade = $codigo;
        }
        public function setCodExame($codigo){
            $this->codExame = $codigo;
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
        public function getCodExame(){
            return $this->codExame;
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
                                    E.codExame, E.nome AS exame, E.descricao AS descricao_exame, 
                                    E.preco, E.codigo AS codigo_exame
                             FROM atividade_exame AE 
                                INNER JOIN atividade A 
                                ON AE.codAtividade = A.codAtividade 
                                INNER JOIN exame E 
                                ON AE.codExame = E.codExame
                             ORDER BY AE.codAtividade ASC";
                $conexao->exec('SET NAMES utf8');
                $stmtLista = $conexao->prepare($sqlLista);
                $stmtLista->execute();

                $lista = $stmtLista->fetchALL(PDO::FETCH_ASSOC);
                return $lista;
            } catch (PDOException $e) {
                echo "Erro: ".$e->getMessage();
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

                $sqlCreate = "INSERT INTO atividade_exame(codAtividade,codExame) VALUES(?,?)";
                $conexao->exec('SET NAMES utf8');
                $stmtCreate = $conexao->prepare($sqlCreate);
                $stmtCreate->bindParam(1,$this->codAtividade);
                $stmtCreate->bindParam(2,$this->codExame);
                echo($stmtCreate->execute());

            } catch (PDOException $e) {
                echo "Erro: ".$e->getMessage();
            }
        }
        public function read(){

            try {

                include('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlRead = "SELECT E.codExame, E.nome, E.descricao, E.preco, E.codigo
                            FROM atividade_exame AE
                                INNER JOIN exame E
                                ON AE.codExame = E.codExame
                            WHERE AE.codAtividade = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtRead = $conexao->prepare($sqlRead);
                $stmtRead->bindParam(1,$this->codAtividade);
                $stmtRead->execute();

                $exames = $stmtRead->fetchALL(PDO::FETCH_ASSOC);
                echo json_encode($exames);

            } catch (PDOException $e) {
                echo "Erro: ".$e->getMessage();
            }
        }
        public function delete(){

            try {

                include('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlDelete = "DELETE FROM atividade_exame WHERE codAtividade = ? AND codExame = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtDelete = $conexao->prepare($sqlDelete);
                $stmtDelete->bindParam(1,$this->codAtividade);
                $stmtDelete->bindParam(2,$this->codExame);
                echo($stmtDelete->execute());

            } catch (PDOException $e) {
                echo "Erro: ".$e->getMessage();
            }
        }
    }
?>