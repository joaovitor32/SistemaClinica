<?php

    class ExameEspecialidade {
        private $codExame;
        private $codEspecialidade;

        private $dbUsuario;
        private $dbSenha;

        //SETTERS
        public function setCodExame($codigo){
            $this->codExame = $codigo;
        }
        public function setCodEspecialidade($codigo){
            $this->codEspecialidade = $codigo;
        }
        public function setDBUsuario($usuario){
            $this->dbUsuario = $usuario;
        }
        public function setDBSenha($senha){
            $this->dbSenha = $senha;
        }

        //GETTERS
        public function getCodExame(){
            return $this->codExame;
        }
        public function getCodEspecialidade(){
            return $this->codEspecialidade;
        }

        //CRUD
        public function lista(){
            try {

                include_once('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlLista = "SELECT EX.codExame, EX.nome AS exame, EX.descricao AS descricao_exame, EX.codigo,  EX.preco,
                                    E.codEspecialidade, E.nome AS especialidade, E.descricao AS descricao_especialidade
                             FROM exame_especialidade EXE 
                                INNER JOIN exame EX 
                                ON EXE.codExame = EX.codExame 
                                INNER JOIN especialidade E 
                                ON EXE.codEspecialidade = E.codEspecialidade
                             ORDER BY E.nome ASC";
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

                $sqlCreate = "INSERT INTO exame_especialidade(codExame,codEspecialidade) VALUES(?,?)";
                $conexao->exec('SET NAMES utf8');
                $stmtCreate = $conexao->prepare($sqlCreate);
                $stmtCreate->bindParam(1,$this->codExame);
                $stmtCreate->bindParam(2,$this->codEspecialidade);
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

                $sqlRead = "SELECT E.codExame, E.nome, E.descricao, E.codigo, E.preco
                            FROM exame_especialidade EXE
                                INNER JOIN exame E
                                ON EXE.codExame = E.codExame
                            WHERE EXE.codEspecialidade = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtRead = $conexao->prepare($sqlRead);
                $stmtRead->bindParam(1,$this->codEspecialidade);
                $stmtRead->execute();

                $exames = $stmtRead->fetchALL(PDO::FETCH_ASSOC);
                echo json_encode($exames);

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

                $sqlDelete = "DELETE FROM exame_especialidade WHERE codExame = ? AND codEspecialidade = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtDelete = $conexao->prepare($sqlDelete);
                $stmtDelete->bindParam(1,$this->codExame);
                $stmtDelete->bindParam(2,$this->codEspecialidade);
                echo($stmtDelete->execute());

            } catch (PDOException $e) {
                echo "Erro: ".$e->getMessage();
            }
        }
    }
?>