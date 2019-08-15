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
    }

    $exame = new Exame();
    $exame->setDBUsuario("marcoaraujo");
    $exame->setDBSenha("password");
    $exame->listaJSON();


?>