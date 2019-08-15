<?php

    class Medico {

        private $codMedico;
        private $nome;
        private $cpf;
        private $crm;

        private $dbUsuario;
        private $dbSenha;

        //SETTERS
        public function setCodMedico($codigo){
            $this->codMedico = $codigo ;
        }
        public function setNome($nome){
            $this->nome = $nome ;
        }
        public function setDescricao($cpf){
            $this->cpf = $cpf ;
        }
        public function setPreco($crm){
            $this->crm = $crm ;
        }
        public function setDBUsuario($usuario){
            $this->dbUsuario = $usuario ;
        }
        public function setDBSenha($senha){
            $this->dbSenha = $senha ;
        }

        //GETTERS
        public function getCodMedico(){
            return $this->codMedico ;
        }
        public function getNome(){
            return $this->nome ;
        }
        public function getCPF(){
            return $this->cpf ;
        }
        public function getCRM(){
            return $this->crm ;
        }

        //CRUD
        public function lista(){
            
            try {
                include('../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlLista = "SELECT * FROM medico";
                $conexao->exec('SET NAMES utf8');
                $stmtLista = $conexao->prepare($sqlLista);
                $stmtLista->execute();

                $medicos = $stmtLista->fetchALL(PDO::FETCH_ASSOC);
                return $medicos;
            } catch (PDOException $e) {
                echo "Erro: ".$e->getMessage();
            }
        }
        public function listaJSON(){
            echo json_encode($this->lista());
        }  
    }

    $medico = new Medico();
    $medico->setDBUsuario("servidorLabmed");
    $medico->setDBSenha("_labmed2019");
    $medico->listaJSON();


?>