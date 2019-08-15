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
            echo json_encode($this->lista());
        }
    }

    $paciente = new Paciente();
    $paciente->setDBUsuario("servidorLabmed");
    $paciente->setDBSenha("_labmed2019");
    $paciente->listaJSON();
?>