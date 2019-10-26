<?php

    class Empresa {
        private $codEmpresa;
        private $nome;
        private $cnpj;
        private $telefone1;
        private $telefone2;
        private $tipoPgto;
        private $rua;
        private $numero;
        private $bairro;
        private $cidade;
        private $estado;
        private $cep;

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
        public function setTelefone1($telefone1){
            $this->telefone1 = $telefone1;
        }
        public function setTelefone2($telefone2){
            $this->telefone2 = $telefone2;
        }
        public function setTipoPgto($tipoPgto){
            $this->tipoPgto = $tipoPgto;
        }
        public function setRua($rua){
            $this->rua = $rua;
        }
        public function setNumero($numero){
            $this->numero = $numero;
        }
        public function setBairro($bairro){
            $this->bairro = $bairro;
        }
        public function setCidade($cidade){
            $this->cidade = $cidade;
        }
        public function setEstado($estado){
            $this->estado = $estado;
        }
        public function setCEP($cep){
            $this->cep = $cep;
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
        public function getTelefone1(){
            return $this->telefone1;
        }
        public function getTelefone2(){
            return $this->telefone2;
        }
        public function getTipoPgto(){
            return $this->tipoPgto;
        }
        public function getRua(){
            return $this->rua;
        }
        public function getNumero(){
            return $this->numero;
        }
        public function getBairro(){
            return $this->bairro;
        }
        public function getCidade(){
            return $this->cidade;
        }
        public function getEstado(){
            return $this->estado;
        }
        public function getCEP(){
            return $this->cep;
        }

        //CRUD
        public function lista(){
            try{
                include_once('../../database.class.php');

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
            echo json_encode($this->lista());
        }
        public function create(){
            
            try {

                include('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlCreate = "INSERT INTO empresa(nome,cnpj,telefone1,telefone2,tipoPgto,rua,numero,bairro,cidade,estado,cep)  VALUES (?,?,?,?,?,?,?,?,?,?,?)";
                $conexao->exec('SET NAMES utf8');
                $stmtCreate = $conexao->prepare($sqlCreate);
                $stmtCreate->bindParam(1,$this->nome);
                $stmtCreate->bindParam(2,$this->cnpj);
                $stmtCreate->bindParam(3,$this->telefone1);
                $stmtCreate->bindParam(4,$this->telefone2);
                $stmtCreate->bindParam(5,$this->tipoPgto);
                $stmtCreate->bindParam(6,$this->rua);
                $stmtCreate->bindParam(7,$this->numero);
                $stmtCreate->bindParam(8,$this->bairro);
                $stmtCreate->bindParam(9,$this->cidade);
                $stmtCreate->bindParam(10,$this->estado);
                $stmtCreate->bindParam(11,$this->cep);
                echo($stmtCreate->execute());

            } catch (PDOExcpetion $e) {
                echo "Erro: ".$e->getMessage();
            }
        }
        public function read(){
            
            try {

                include('../../database.class.php');

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

                include('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlUpdate = "UPDATE empresa SET nome = ?, cnpj = ?, telefone1 = ?, telefone2 = ?, tipoPgto = ?, rua = ?, numero = ?, bairro = ?, cidade = ?, estado = ?, cep = ? WHERE codEmpresa = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtUpdate = $conexao->prepare($sqlUpdate);
                $stmtUpdate->bindParam(1,$this->nome);
                $stmtUpdate->bindParam(2,$this->cnpj);
                $stmtUpdate->bindParam(3,$this->telefone1);
                $stmtUpdate->bindParam(4,$this->telefone2);
                $stmtUpdate->bindParam(5,$this->tipoPgto);
                $stmtUpdate->bindParam(6,$this->rua);
                $stmtUpdate->bindParam(7,$this->numero);
                $stmtUpdate->bindParam(8,$this->bairro);
                $stmtUpdate->bindParam(9,$this->cidade);
                $stmtUpdate->bindParam(10,$this->estado);
                $stmtUpdate->bindParam(11,$this->cep);
                $stmtUpdate->bindParam(12,$this->codEmpresa);
                echo($stmtUpdate->execute());

            } catch (PDOExcpetion $e) {
                echo "Erro: ".$e->getMessage();
            }
        }
        public function delete(){
            
            try {

                include('../../database.class.php');

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
?>
