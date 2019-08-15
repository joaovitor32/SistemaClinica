<?php
    class Empresa{
        private $codEmpresa;
        private $nome;
        private $cnpj;
        private $telefone;
        private $tipoPgto;

        private $dbUsuario;
        private $dbSenha;

        //SETTERS
        public function setNome($nome){
            $this->nome = $nome;
        }
        public function setCnpj($cnpj){
            $this->cnpj = $cnpj;
        }
        public function setTelefone($telefone){
            $this->telefone = $telefone;
        }
        public function setTipoPgto($tipoPgto){
            $this->tipoPgto = $tipoPgto;
        }
        public function setDBUsuario($usuario){
            $this->dbUsuario = $usuario;
        }
        public function setDBSenha($senha){
            $this->dbSenha = $senha;
        }
        //GETTERS
        public function getCodigo(){
            return $this->nome;
        }
        public function getNome(){
            return $this->nome;
        }
        public function getCnpj(){
            return $this->cnpj;
        }
        public function getTelefone(){
            return $this->telefone;
        }
        public function getTipoPgto(){
            return $this->tipoPgto;
        }

        //CRUD
        public function lista(){
            try{
                include_once('../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlLista = "SELECT * FROM empresa";
                $stmtLista = $conexao->prepare($sqlLista);
                $stmtLista->execute();

                $empresas = $stmtLista->fetchALL(PDO::FETCH_ASSOC);

                return $empresas;

            }catch(PDOException $e){
                echo "Erro: ".$e->getMessage();
            }
        }
        public function listaJSON(){
            echo json_encode($this->lista());
        }   
    
    }

    $empresa = new Empresa();
    $empresa->setDBUsuario("marcoaraujo");
    $empresa->setDBSenha("password");
    $empresa->listaJSON();
?>