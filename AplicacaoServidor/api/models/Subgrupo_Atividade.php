<?php

    class SubgrupoAtividade {
        private $codSubgrupo;
        private $codAtividade;

        private $dbUsuario;
        private $dbSenha;

        //SETTERS
        public function setCodAtividade($codigo){
            $this->codAtividade = $codigo;
        }
        public function setCodSubgrupo($codigo){
            $this->codSubgrupo = $codigo;
        }
        public function setDBUsuario($usuario){
            $this->dbUsuario = $usuario;
        }
        public function setDBSenha($senha){
            $this->dbSenha = $senha;
        }

        //GETTERS
        public function getCodPaciente(){
            return $this->codAtividade;
        }
        public function getCodSubgrupo(){
            return $this->codSubgrupo;
        }

        //CRUD
        public function lista(){
            try {

                include_once('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlLista = "SELECT A.codAtividade, A.nome AS atividade, A.descricao AS descricao_atividade, 
                                    S.codSubgrupo, S.nome AS subgrupo
                             FROM subgrupo_atividade SA 
                                INNER JOIN atividade A 
                                ON SA.codAtividade = A.codAtividade 
                                INNER JOIN subgrupo S 
                                ON SA.codSubgrupo = S.codSubgrupo
                             ORDER BY SA.codSubgrupo ASC";
                $conexao->exec('SET NAMES utf8');
                $stmtLista = $conexao->prepare($sqlLista);
                $stmtLista->execute();

                $lista = $stmtLista->fetchALL(PDO::FETCH_ASSOC);
                return $lista;
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

                $sqlCreate = "INSERT INTO subgrupo_atividade(codAtividade, codSubgrupo) VALUES(?,?)";
                $conexao->exec('SET NAMES utf8');
                $stmtCreate = $conexao->prepare($sqlCreate);
                $stmtCreate->bindParam(1,$this->codAtividade);
                $stmtCreate->bindParam(2,$this->codSubgrupo);
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

                $sqlRead = "SELECT A.codAtividade, A.nome, A.descricao
                            FROM subgrupo_atividade SA
                                INNER JOIN atividade A
                                ON SA.codAtividade = A.codAtividade
                            WHERE SA.codSubgrupo = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtRead = $conexao->prepare($sqlRead);
                $stmtRead->bindParam(1,$this->codSubgrupo);
                $stmtRead->execute();

                $atividades = $stmtRead->fetchALL(PDO::FETCH_ASSOC);
                echo json_encode($atividades);

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

                $sqlDelete = "DELETE FROM subgrupo_atividade WHERE codAtividade = ? AND codSubgrupo = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtDelete = $conexao->prepare($sqlDelete);
                $stmtDelete->bindParam(1,$this->codAtividade);
                $stmtDelete->bindParam(2,$this->codSubgrupo);
                echo($stmtDelete->execute());

            } catch (PDOException $e) {
                echo "Erro: ".$e->getMessage();
            }
        }
    }
?>