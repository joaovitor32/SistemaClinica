<?php

    class FuncaoExame{
        private $codFuncao;
        private $codEmpresa;


        private $dbUsuario;
        private $dbSenha;

        //SETTERS
        public function setCodEmpresa($codigo){
            $this->codEmpresa = $codigo;
        }
        public function setNome($nome){
            $this->nome = $nome;
        }
		public function setCodFuncao($codFuncao){
			$this->codFuncao=$codFuncao;
        }
        public function setDBUsuario($dbUsuario){
            $this->dbUsuario=$dbUsuario;
        }
        public function setDBSenha($dbSenha){
            $this->dbSenha=$dbSenha;
        }
        //GETTERS
        public function getCodFuncao(){
            return $this->codFuncao;
        }
        //CRUD
        public function listaFuncaoExame(){
            try{
                include_once('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);
                
                $conexao = $db->conecta_mysql();

                $sqlLista = "SELECT * FROM exame AS ex INNER JOIN funcao_exame AS fe ON fe.codExame=ex.codExame WHERE fe.codFuncao=?";
                $conexao->exec('SET NAMES utf8');
                $stmtLista = $conexao->prepare($sqlLista);
                $stmtLista->bindParam(1,$this->codFuncao);
                $stmtLista->execute();

                $empresas = $stmtLista->fetchALL(PDO::FETCH_ASSOC);
                return $empresas;
            } catch (PDOException $e){
                echo "Erro: ".$e->getMessage();
            }
        }
        public function listaJSON(){
            echo json_encode($this->listaFuncaoExame());
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
}    
?>
