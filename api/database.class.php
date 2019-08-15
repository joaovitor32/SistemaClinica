<?php
    
    class database{
        //Host, usuário, senha e banco de dados
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
                $conexao = new PDO("mysql:host=127.0.0.1;dbname=dbClinica",$this->usuario,$this->senha);
                $conexao->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);
            } catch(PDOException $e){
                echo $e->getMessage();
            }
            return $conexao;
        }
    }

?>