<?php

    class Subgrupo {

        private $codSubgrupo;
        private $nome;
        private $codFuncao;

        private $dbUsuario;
        private $dbSenha;

        //SETTERS
        public function setCodSubgrupo($codigo){
            $this->codSubgrupo = $codigo ;
        }
        public function setNome($nome){
            $this->nome = $nome ;
        }
        public function setCodFuncao($funcao){
            $this->codFuncao = $funcao ;
        }
        public function setDBUsuario($usuario){
            $this->dbUsuario = $usuario ;
        }
        public function setDBSenha($senha){
            $this->dbSenha = $senha ;
        }

        //GETTERS
        public function getCodSubgrupo(){
            return $this->codSubgrupo ;
        }
        public function getNome(){
            return $this->nome ;
        }
        public function getCodFuncao(){
            return $this->codFuncao ;
        }

        //CRUD
        public function lista(){
            
            try {
                include('../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlLista = "SELECT * FROM subgrupo";
                $conexao->exec('SET NAMES utf8');
                $stmtLista = $conexao->prepare($sqlLista);
                $stmtLista->execute();

                $subgrupos = $stmtLista->fetchALL(PDO::FETCH_ASSOC);
                return $subgrupos;
            } catch (PDOException $e) {
                echo "Erro: ".$e->getMessage();
            }
        }
        public function listaJSON(){
            echo json_encode($this->lista());
        }  
    }

    $subgrupo = new Subgrupo();
    $subgrupo->setDBUsuario("servidorLabmed");
    $subgrupo->setDBSenha("_labmed2019");
    $subgrupo->listaJSON();


?>