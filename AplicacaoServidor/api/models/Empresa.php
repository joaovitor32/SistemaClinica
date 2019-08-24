<?php

    class Empresa {
        private $codEmpresa;
        private $nome;
        private $cnpj;
        private $telefone;
        private $tipoPgto;

        private $dbUsuario;
        private $dbSenha;

        //SETTERS
        public function setCodEmpresa($codigo){
            $this->codEmpresa = $codigo;
        }
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
                $conexao->exec('SET NAMES utf8');
                $stmtLista = $conexao->prepare($sqlLista);
                $stmtLista->execute();

                $empresas = $stmtLista->fetchALL(PDO::FETCH_ASSOC);
                return $empresas;
            } catch (PDOException $e){
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

                $sqlCreate = "INSERT INTO empresa(nome,cnpj,telefone,tipoPgto)  VALUES (?,?,?,?)";
                $conexao->exec('SET NAMES utf8');
                $stmtCreate = $conexao->prepare($sqlCreate);
                $stmtCreate->bindParam(1,$this->nome);
                $stmtCreate->bindParam(2,$this->cnpj);
                $stmtCreate->bindParam(3,$this->telefone);
                $stmtCreate->bindParam(4,$this->tipoPgto);
                echo($stmtCreate->execute());

            } catch (PDOExcpetion $e) {
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

                $sqlRead = "SELECT *  FROM empresa WHERE codEmpresa = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtRead = $conexao->prepare($sqlRead);
                $stmtRead->bindParam(1,$this->codEmpresa);
                $stmtRead->execute();

                $empresa = $stmtRead->fetch(PDO::FETCH_ASSOC);

                echo json_encode($empresa);

            } catch (PDOExcpetion $e) {
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

                $sqlUpdate = "UPDATE empresa SET nome = ?, cnpj = ?, telefone = ?, tipoPgto = ? WHERE codEmpresa = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtUpdate = $conexao->prepare($sqlUpdate);
                $stmtUpdate->bindParam(1,$this->nome);
                $stmtUpdate->bindParam(2,$this->cnpj);
                $stmtUpdate->bindParam(3,$this->telefone);
                $stmtUpdate->bindParam(4,$this->tipoPgto);
                $stmtUpdate->bindParam(5,$this->codEmpresa);
                echo($stmtUpdate->execute());

            } catch (PDOExcpetion $e) {
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

                $sqlDelete = "DELETE FROM empresa WHERE codEmpresa = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtDelete = $conexao->prepare($sqlDelete);
                $stmtDelete->bindParam(1,$this->codEmpresa);
                echo($stmtDelete->execute());

            } catch (PDOExcpetion $e) {
                echo "Erro: ".$e->getMessage();
            }
        }
    
    }

    $empresa = new Empresa();
    $empresa->setDBUsuario("servidorLabmed");
    $empresa->setDBSenha("_labmed2019");
    $empresa->listaJSON();
?>