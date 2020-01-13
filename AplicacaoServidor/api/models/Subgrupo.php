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
                include('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlLista = "SELECT S.codSubgrupo, S.nome, F.codFuncao, F.nome AS nomefuncao FROM subgrupo S INNER JOIN funcao F ON S.codFuncao = F.codFuncao ORDER BY F.nome ASC";
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
        public function create(){

            try {

                include('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlCreate = "INSERT INTO subgrupo(nome,codFuncao) VALUES(?,?)";
                $conexao->exec('SET NAMES utf8');
                $stmtCreate = $conexao->prepare($sqlCreate);
                $stmtCreate->bindParam(1,$this->nome);
                $stmtCreate->bindParam(2,$this->codFuncao);
                echo($stmtCreate->execute());

            } catch (PDOException $e) {
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

                $sqlRead = "SELECT S.codSubgrupo, S.nome, F.codFuncao, F.nome AS nomeFuncao FROM subgrupo S INNER JOIN funcao F ON S.codFuncao = F.codFuncao WHERE codSubgrupo = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtRead = $conexao->prepare($sqlRead);
                $stmtRead->bindParam(1,$this->codSubgrupo);
                $stmtRead->execute();

                $exame = $stmtRead->fetch(PDO::FETCH_ASSOC);
                echo json_encode($exame);

            } catch (PDOException $e) {
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

                $sqlUpdate = "UPDATE subgrupo SET nome = ?, codFuncao = ? WHERE codSubgrupo = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtUpdate = $conexao->prepare($sqlUpdate);
                $stmtUpdate->bindParam(1,$this->nome);
                $stmtUpdate->bindParam(2,$this->codFuncao);
                $stmtUpdate->bindParam(3,$this->codSubgrupo);
                echo($stmtUpdate->execute());

            } catch (PDOException $e) {
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

                $sqlDelete = "DELETE FROM subgrupo WHERE codSubgrupo = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtDelete = $conexao->prepare($sqlDelete);
                $stmtDelete->bindParam(1,$this->codSubgrupo);
                echo($stmtDelete->execute());

            } catch (PDOException $e) {
                echo "Erro: ".$e->getMessage();
            }
        }
    }
?>