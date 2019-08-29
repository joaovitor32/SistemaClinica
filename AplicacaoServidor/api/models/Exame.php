<?php

    class Exame {

        private $codExame;
        private $nome;
        private $descricao;
        private $preco;

        private $dbUsuario;
        private $dbSenha;

        //SETTERS
        public function setCodExame($codigo){
            $this->codExame = $codigo ;
        }
        public function setNome($nome){
            $this->nome = $nome ;
        }
        public function setDescricao($descricao){
            $this->descricao = $descricao ;
        }
        public function setPreco($preco){
            $this->preco = $preco ;
        }
        public function setDBUsuario($usuario){
            $this->dbUsuario = $usuario ;
        }
        public function setDBSenha($senha){
            $this->dbSenha = $senha ;
        }

        //GETTERS
        public function getCodExame(){
            return $this->codExame ;
        }
        public function getNome(){
            return $this->nome ;
        }
        public function getDescricao(){
            return $this->descricao ;
        }
        public function getPreco(){
            return $this->preco ;
        }

        //CRUD
        public function lista(){
            
            try {
                include('../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlLista = "SELECT * FROM exame";
                $conexao->exec('SET NAMES utf8');
                $stmtLista = $conexao->prepare($sqlLista);
                $stmtLista->execute();

                $exames = $stmtLista->fetchALL(PDO::FETCH_ASSOC);
                return $exames;
            } catch (PDOException $e) {
                echo "Erro: ".$e->getMessage();
            }
        }
        public function listaJSON(){
            echo json_encode($this->lista());
        }
        public function create(){

            try {

                include('../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlCreate = "INSERT INTO exame(nome,descricao,preco) VALUES(?,?,?)";
                $conexao->exec('SET NAMES utf8');
                $stmtCreate = $conexao->prepare($sqlCreate);
                $stmtCreate->bindParam(1,$this->nome);
                $stmtCreate->bindParam(2,$this->descricao);
                $stmtCreate->bindParam(3,$this->preco);
                echo($stmtCreate->execute());

            } catch (PDOException $e) {
                echo "Erro: ".$e->getMessage();
            }
        }
        public function read(){

            try {

                include('../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlRead = "SELECT * FROM exame WHERE codExame = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtRead = $conexao->prepare($sqlRead);
                $stmtRead->bindParam(1,$this->codExame);
                $stmtRead->execute();

                $exame = $stmtRead->fetch(PDO::FETCH_ASSOC);
                echo json_encode($exame);

            } catch (PDOException $e) {
                echo "Erro: ".$e->getMessage();
            }
        }
        public function update(){

            try {

                include('../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlUpdate = "UPDATE exame SET nome = ?, descricao = ?, preco = ? WHERE codExame = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtUpdate = $conexao->prepare($sqlUpdate);
                $stmtUpdate->bindParam(1,$this->nome);
                $stmtUpdate->bindParam(2,$this->descricao);
                $stmtUpdate->bindParam(3,$this->preco);
                $stmtUpdate->bindParam(4,$this->codExame);
                echo($stmtUpdate->execute());

            } catch (PDOException $e) {
                echo "Erro: ".$e->getMessage();
            }
        }
        public function delete(){

            try {

                include('../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlDelete = "DELETE FROM exame WHERE codExame = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtDelete = $conexao->prepare($sqlDelete);
                $stmtDelete->bindParam(1,$this->codExame);
                echo($stmtDelete->execute());

            } catch (PDOException $e) {
                echo "Erro: ".$e->getMessage();
            }
        }
    }

    $exame = new Exame();
    $exame->setDBUsuario("servidorLabmed");
    $exame->setDBSenha("_labmed2019");
    $exame->listaJSON();


?>