<?php
    class Empresa{
        private $codEmpresa;
        private $nome;
        private $cnpj;
        private $telefone;
        private $tipoPgto;

        //Sets
        public function setNome($nome){
            $this->nome=$nome;
        }
        public function setCnpj($cnpj){
            $this->cnpj=$cnpj;
        }
        public function setTelefone($telefone){
            $this->telefone=$telefone;
        }
        public function setTipoPgto($tipoPgto){
            $this->tipoPgto=$tipoPgto;
        }
        //Gets
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

        public function listagemEmpresas(){
            try{
                include 'conexao.php';
                $sqlListagem="SELECT * FROM Empresa";
                $stmtListagem=$conexao->prepare($sqlListagem);
                $stmtListagem->execute();

                $empresa=$stmtListagem->fetchALL(PDO::FETCH_ASSOC);
                return $empresa;

            }catch(PDOException $e){
                echo "Erro: ".$e->getMessage();
            }
        }
        public function listaEmpresasJSON(){
            echo json_encode($this->listagemEmpresas());
        }   
    
    }
?>