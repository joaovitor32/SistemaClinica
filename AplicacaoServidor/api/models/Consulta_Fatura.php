<?php

    class ConsultaFatura {
        private $codConsultas;
        private $codFatura;

        private $dbUsuario;
        private $dbSenha;

        //SETTERS
        public function setCodConsultas($codigo){
            $this->codConsultas = $codigo;
        }
        public function setCodFatura($codigo){
            $this->codFatura = $codigo;
        }
        public function setDBUsuario($usuario){
            $this->dbUsuario = $usuario;
        }
        public function setDBSenha($senha){
            $this->dbSenha = $senha;
        }

        //GETTERS
        public function getCodConsultas(){
            return $this->codConsultas;
        }
        public function getCodFatura(){
            return $this->codFatura;
        }

        //CRUD
        public function create(){
            
            try {

                include('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                foreach($this->codConsultas as $consulta) {
                    $sqlCreate = "INSERT INTO consulta_fatura(codConsulta,codFatura) VALUES(?,?)";
                    $conexao->exec('SET NAMES utf8');
                    $stmtCreate = $conexao->prepare($sqlCreate);
                    $stmtCreate->bindParam(1,$consulta);
                    $stmtCreate->bindParam(2,$this->codFatura);
                    $stmtCreate->execute();
                }

                echo 1;

            } catch (PDOException $e) {
                echo "Erro: ".$e->getMessage();
            }
        }
    }
?>