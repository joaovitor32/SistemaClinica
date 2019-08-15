<?php

    class Especialidade {

        private $codEspecialidade;
        private $nome;
        private $descricao;

        private $dbUsuario;
        private $dbSenha;

        //SETTERS
        public function setCodEspecialidade($codigo){
            $this->codEspecialidade = $codigo ;
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
        public function getCodEspecialidade(){
            return $this->codEspecialidade ;
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
                include('../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlLista = "SELECT * FROM especialidade";
                $stmtLista = $conexao->prepare($sqlLista);
                $stmtLista->execute();

                $especialidades = $stmtLista->fetchALL(PDO::FETCH_ASSOC);
                return $especialidades;
            } catch (PDOException $e) {
                echo "Erro: ".$e->getMessage();
            }
        }
        public function listaJSON(){
            echo json_encode($this->lista());
        }  
    }

    $especialidade = new Especialidade();
    $especialidade->setDBUsuario("servidorLabmed");
    $especialidade->setDBSenha("_labmed2019");
    $especialidade->listaJSON();


?>