<?php

    class Paciente {
        private $codPaciente;
        private $nome;
        private $cpf;
        private $rg;
        private $sexo;
        private $nascimento;

        private $dbUsuario;
        private $dbSenha;

        //SETTERS
        public function setCodPaciente($codigo){
            $this->codPaciente = $codigo;
        }
        public function setNome($nome){
            $this->nome = $nome;
        }
        public function setCPF($cpf){
            $this->cpf = $cpf;
        }
        public function setRG($rg){
            $this->rg = $rg;
        }
        public function setSexo($sexo){
            $this->sexo = $sexo;
        }
        public function setNascimento($nascimento){
            $this->nascimento = $nascimento;
        }
        public function setDBUsuario($usuario){
            $this->dbUsuario = $usuario;
        }
        public function setDBSenha($senha){
            $this->dbSenha = $senha;
        }

        //GETTERS
        public function getCodPaciente(){
            return $this->codPaciente;
        }
        public function getNome(){
            return $this->nome;
        }
        public function getCPF(){
            return $this->cpf;
        }
        public function getRG(){
            return $this->rg;
        }
        public function getSexo(){
            return $this->sexo;
        }
        public function getNascimento(){
            return $this->nascimento;
        }

        //CRUD
        public function lista(){
            try {

                include_once('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlLista = "SELECT P.codPaciente, P.nome, P.cpf, E.nome AS empresa, F.nome as funcao
                             FROM empresa_paciente_funcao EPF 
                                INNER JOIN empresa E 
                                ON EPF.codEmpresa = E.codEmpresa 
                                INNER JOIN paciente P 
                                ON EPF.codPaciente = P.codPaciente 
                                INNER JOIN funcao F 
                                ON EPF.codFuncao = F.codFuncao 
                             ORDER BY E.nome ASC";
                $conexao->exec('SET NAMES utf8');
                $stmtLista = $conexao->prepare($sqlLista);
                $stmtLista->execute();

                $pacientes = $stmtLista->fetchALL(PDO::FETCH_ASSOC);
                return $pacientes;
            } catch (PDOException $e) {
                http_response_code(500);
                $erro = $e->getMessage();
                echo(json_encode(array('error' => "$erro"), JSON_FORCE_OBJECT));
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

                $sqlCreate = "INSERT INTO paciente(nome,cpf,rg,sexo,nascimento) VALUES(?,?,?,?,?)";
                $conexao->exec('SET NAMES utf8');
                $stmtCreate = $conexao->prepare($sqlCreate);
                $stmtCreate->bindParam(1,$this->nome);
                $stmtCreate->bindParam(2,$this->cpf);
                $stmtCreate->bindParam(3,$this->rg);
                $stmtCreate->bindParam(4,$this->sexo);
                $stmtCreate->bindParam(5,$this->nascimento);
                $result = $stmtCreate->execute();
                
                if($result) {
                    http_response_code(200);
                } else {
                    http_response_code(400);
                    echo(json_encode(array('error' => "Ocorreu um erro ao cadastrar o registro, verifique os valores."), JSON_FORCE_OBJECT));
                }

            } catch (PDOException $e) {
                http_response_code(500);
                $erro = $e->getMessage();
                echo(json_encode(array('error' => "$erro"), JSON_FORCE_OBJECT));
            }
        }
        public function read(){

            try {

                include('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlRead = "SELECT * FROM paciente WHERE codPaciente = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtRead = $conexao->prepare($sqlRead);
                $stmtRead->bindParam(1,$this->codPaciente);
                $stmtRead->execute();

                $paciente = $stmtRead->fetch(PDO::FETCH_ASSOC);
                echo json_encode($paciente);

            } catch (PDOException $e) {
                http_response_code(500);
                $erro = $e->getMessage();
                echo(json_encode(array('error' => "$erro"), JSON_FORCE_OBJECT));
            }
        }
        public function update(){

            try {

                include('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlUpdate = "UPDATE paciente SET nome = ?, cpf = ?, rg = ?, sexo = ?, nascimento = ? WHERE codPaciente = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtUpdate = $conexao->prepare($sqlUpdate);
                $stmtUpdate->bindParam(1,$this->nome);
                $stmtUpdate->bindParam(2,$this->cpf);
                $stmtUpdate->bindParam(3,$this->rg);
                $stmtUpdate->bindParam(4,$this->sexo);
                $stmtUpdate->bindParam(5,$this->nascimento);
                $stmtUpdate->bindParam(6,$this->codPaciente);
                $result = $stmtUpdate->execute();

                if($result) {
                    http_response_code(200);
                    $this->read();
                } else {
                    http_response_code(400);
                    echo(json_encode(array('error' => "Ocorreu um erro ao atualizar o registro, verifique os valores."), JSON_FORCE_OBJECT));
                }


            } catch (PDOException $e) {
                http_response_code(500);
                $erro = $e->getMessage();
                echo(json_encode(array('error' => "$erro"), JSON_FORCE_OBJECT));
            }
        }
        public function delete(){

            try {

                include('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlDelete = "DELETE FROM paciente WHERE codPaciente = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtDelete = $conexao->prepare($sqlDelete);
                $stmtDelete->bindParam(1,$this->codPaciente);
                $result = $stmtDelete->execute();

                if($result) {
                    http_response_code(204);
                } else {
                    http_response_code(400);
                    echo(json_encode(array('error' => "Ocorreu um erro ao remover o registro, verifique os valores."), JSON_FORCE_OBJECT));
                }

            } catch (PDOException $e) {
                http_response_code(500);
                $erro = $e->getMessage();
                echo(json_encode(array('error' => "$erro"), JSON_FORCE_OBJECT));
            }
        }
    }
?>