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
                include('../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlLista = "SELECT * FROM atividade";
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
    }

    $atividade = new Atividade();
    $atividade->setDBUsuario("marcoaraujo");
    $atividade->setDBSenha("password");
    $atividade->listaJSON();


?>