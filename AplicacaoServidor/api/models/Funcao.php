<?php

    class Funcao {
        private $codFuncao;
        private $nome;
        private $descricao;

        private $dbUsuario;
        private $dbSenha;

        //SETTERS
        public function setCodFuncao($codigo){
            $this->codFuncao = $codigo;
        }
        public function setNome($nome){
            $this->nome = $nome;
        }
        public function setDescricao($descricao){
            $this->descricao = $descricao;
        }
        public function setDBUsuario($usuario){
            $this->dbUsuario = $usuario;
        }
        public function setDBSenha($senha){
            $this->dbSenha = $senha;
        }

        //GETTERS
        public function getCodFuncao(){
            return $this->codFuncao;
        }
        public function getNome(){
            return $this->nome;
        }
        public function getDescricao(){
            return $this->descricao;
        }

        //CRUD

        public function lista(){
            
            try {
                include('../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlLista = "SELECT * FROM funcao";
                $conexao->exec('SET NAMES utf8');
                $stmtLista = $conexao->prepare($sqlLista);
                $stmtLista->execute();

                $funcoes = $stmtLista->fetchALL(PDO::FETCH_ASSOC);
                return $funcoes;
            } catch (PDOException $e) {
                echo "Erro: ".$e->getMessage();
            }
        }

        public function listaJSON(){
            echo json_encode($this->lista());
        }
    }

    $funcoes = new Funcao();
    $funcoes->setDBUsuario("servidorLabmed");
    $funcoes->setDBSenha("_labmed2019");
    $funcoes->listaJSON();
?>