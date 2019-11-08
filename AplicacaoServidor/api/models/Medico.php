<?php

    class Medico {

        private $codMedico;
        private $nome;
        private $cpf;
        private $crm;
        private $senha;

        private $dbUsuario;
        private $dbSenha;

        //SETTERS
        public function setCodMedico($codigo){
            $this->codMedico = $codigo ;
        }
        public function setNome($nome){
            $this->nome = $nome ;
        }
        public function setCPF($cpf){
            $this->cpf = $cpf ;
        }
        public function setCRM($crm){
            $this->crm = $crm ;
        }
        public function setSenha($senha){
            $this->senha = md5($senha) ;
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
                include('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlLista = "SELECT M.codMedico, M.nome, M.cpf, M.crm, E.nome AS especialidade FROM medico_especialidade ME INNER JOIN medico M ON ME.codMedico = M.codMedico INNER JOIN especialidade E ON ME.codEspecialidade = E.codEspecialidade ORDER BY  M.codMedico ASC";
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
        public function create(){

            try {

                include('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlCreate = "INSERT INTO medico(nome,cpf,crm,senha) VALUES(?,?,?,?)";
                $conexao->exec('SET NAMES utf8');
                $stmtCreate = $conexao->prepare($sqlCreate);
                $stmtCreate->bindParam(1,$this->nome);
                $stmtCreate->bindParam(2,$this->cpf);
                $stmtCreate->bindParam(3,$this->crm);
                $stmtCreate->bindParam(4,$this->senha);
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

                $sqlRead = "SELECT codMedico, nome, cpf, crm FROM medico WHERE codMedico = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtRead = $conexao->prepare($sqlRead);
                $stmtRead->bindParam(1,$this->codMedico);
                $stmtRead->execute();

                $medico = $stmtRead->fetch(PDO::FETCH_ASSOC);
                echo json_encode($medico);

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

                $sqlUpdate = "UPDATE medico SET nome = ?, cpf = ?, crm = ? WHERE codMedico = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtUpdate = $conexao->prepare($sqlUpdate);
                $stmtUpdate->bindParam(1,$this->nome);
                $stmtUpdate->bindParam(2,$this->cpf);
                $stmtUpdate->bindParam(3,$this->crm);
                $stmtUpdate->bindParam(4,$this->codMedico);
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

                $sqlDelete = "DELETE FROM medico WHERE codMedico = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtDelete = $conexao->prepare($sqlDelete);
                $stmtDelete->bindParam(1,$this->codMedico);
                echo($stmtDelete->execute());

            } catch (PDOException $e) {
                echo "Erro: ".$e->getMessage();
            }
        }

        public function handleLogin() {
            try {

                include('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlLogin = "SELECT codMedico, nome, cpf, crm FROM medico WHERE crm = ? AND senha = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtLogin = $conexao->prepare($sqlLogin);
                $stmtLogin->bindParam(1, $this->crm);
                $stmtLogin->bindParam(2, $this->senha);
                $stmtLogin->execute();

                $medico = $stmtLogin->fetch(PDO::FETCH_ASSOC);

                if($medico)
                    echo json_encode($medico);
                else
                    echo -1;

            } catch (PDOException $e) {
                echo "Erro: ".$e->getMessage();
            }
        }
    }
?>