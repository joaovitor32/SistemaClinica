<?php
    
    class database{
        //Usuário e senha do banco de dados
        private $usuario;
        private $senha;
        
        public function getUsuario(){
            return $this->usuario;
        }

        public function getSenha(){
            return $this->senha;
        }

        public function setUsuario($usuario){
            $this->usuario = $usuario;
        }
        
        public function setSenha($senha){
            $this->senha = $senha;
        }

        public function conecta_mysql(){
            //criar a conexão
            try {
                $conexao = new PDO("mysql:host=localhost;dbname=dbClinica","","");
                $conexao->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);
            } catch(PDOException $e){
                echo $e->getMessage();
            }
            return $conexao;
        }
    }

?>
