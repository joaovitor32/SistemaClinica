<?php

    class Atividade {

        private $codAtividade;
        private $nome;
        private $descricao;

        private $dbUsuario;
        private $dbSenha;

        //SETTERS
        public function setCodAtividade($codigo){
            $this->codAtividade = $codigo ;
        }
        public function setNome($nome){
            $this->nome = $nome ;
        }
        public function setDescricao($descricao){
            $this->descricao = $descricao ;
        }
        public function setDBUsuario($usuario){
            $this->dbUsuario = $usuario ;
        }
        public function setDBSenha($senha){
            $this->dbSenha = $senha ;
        }

        //GETTERS
        public function getCodAtividade(){
            return $this->codAtividade ;
        }
        public function getNome(){
            return $this->nome ;
        }
        public function getDescricao(){
            return $this->descricao ;
        }

        //CRUD
        public function lista(){
            
            try {
                include('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlLista = "SELECT * FROM atividade";
                $conexao->exec('SET NAMES utf8');
                $stmtLista = $conexao->prepare($sqlLista);
                $stmtLista->execute();

                $atividades = $stmtLista->fetchALL(PDO::FETCH_ASSOC);
                return $atividades;
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

                $sqlCreate = "INSERT INTO atividade(nome,descricao) VALUES(?,?)";
                $conexao->exec('SET NAMES utf8');
                $stmtCreate = $conexao->prepare($sqlCreate);
                $stmtCreate->bindParam(1,$this->nome);
                $stmtCreate->bindParam(2,$this->descricao);
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

                $sqlRead = "SELECT * FROM atividade WHERE codAtividade = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtRead = $conexao->prepare($sqlRead);
                $stmtRead->bindParam(1,$this->codAtividade);
                $stmtRead->execute();

                $atividade = $stmtRead->fetch(PDO::FETCH_ASSOC);
                echo json_encode($atividade);

            } catch (PDException $e) {
                echo "Erro: ".$e->getMessage();
            }
        }
        public function update(){

            try {

                include('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlUpdate = "UPDATE atividade SET nome = ?, descricao = ? WHERE codAtividade = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtUpdate = $conexao->prepare($sqlUpdate);
                $stmtUpdate->bindParam(1,$this->nome);
                $stmtUpdate->bindParam(2,$this->descricao);
                $stmtUpdate->bindParam(3,$this->codAtividade);
                echo($stmtUpdate->execute());

            } catch (PDOException $e){
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

                $sqlDelete = "DELETE FROM atividade WHERE codAtividade = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtDelete = $conexao->prepare($sqlDelete);
                $stmtDelete->bindParam(1,$this->codAtividade);
                echo($stmtDelete->execute());

            } catch (PDOException $e) {
                echo "Erro: ".$e->getMessage();
            }
        }
    }
?>