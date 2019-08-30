<?php

    class Paciente {
        private $codPaciente;
        private $nome;
        private $cpf;

        private $dbUsuario;
        private $dbSenha;

        //SETTERS
        public function setCodPaciente($codigo){
            $this->codPaciente = $codigo;
        }
        public function setNome($nome){
            $this->nome = $nome;
        }
        public function setCPF($cpf){
            $this->cpf = $cpf;
        }
        public function setDBUsuario($usuario){
            $this->dbUsuario = $usuario;
        }
        public function setDBSenha($senha){
            $this->dbSenha = $senha;
        }

        //GETTERS
        public function getCodPaciente(){
            return $this->codPaciente;
        }
        public function getNome(){
            return $this->nome;
        }
        public function getCPF(){
            return $this->cpf;
        }

        //CRUD
        public function lista(){
            try {

                include_once('../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlLista = "SELECT * FROM paciente";
                $conexao->exec('SET NAMES utf8');
                $stmtLista = $conexao->prepare($sqlLista);
                $stmtLista->execute();

                $pacientes = $stmtLista->fetchALL(PDO::FETCH_ASSOC);
                return $pacientes;
            } catch (PDOException $e) {
                echo "Erro: ".$e->getMessage();
            }
        }

        public function listaJSON(){
            //Autorizar CORS para testes antes do controller
            header("Access-Control-Allow-Origin: *");
            echo json_encode($this->lista());
        }
        public function create(){

            try {

                include('../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlCreate = "INSERT INTO paciente(nome,cpf) VALUES(?,?)";
                $conexao->exec('SET NAMES utf8');
                $stmtCreate = $conexao->prepare($sqlCreate);
                $stmtCreate->bindParam(1,$this->nome);
                $stmtCreate->bindParam(2,$this->cpf);
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

                $sqlRead = "SELECT * FROM paciente WHERE codPaciente = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtRead = $conexao->prepare($sqlRead);
                $stmtRead->bindParam(1,$this->codPaciente);
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

                $sqlUpdate = "UPDATE paciente SET nome = ?, cpf = ? WHERE codPaciente = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtUpdate = $conexao->prepare($sqlUpdate);
                $stmtUpdate->bindParam(1,$this->nome);
                $stmtUpdate->bindParam(2,$this->cpf);
                $stmtUpdate->bindParam(3,$this->codPaciente);
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

                $sqlDelete = "DELETE FROM paciente WHERE codPaciente = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtDelete = $conexao->prepare($sqlDelete);
                $stmtDelete->bindParam(1,$this->codPaciente);
                echo($stmtDelete->execute());

            } catch (PDOException $e) {
                echo "Erro: ".$e->getMessage();
            }
        }
    }

    $paciente = new Paciente();
    $paciente->setDBUsuario("servidorLabmed");
    $paciente->setDBSenha("_labmed2019");
    $paciente->listaJSON();
?>