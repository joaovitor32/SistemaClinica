<?php

    class MedicoEspecialidade {
        private $codMedico;
        private $codEspecialidade;

        private $dbUsuario;
        private $dbSenha;

        //SETTERS
        public function setCodMedico($codigo){
            $this->codMedico = $codigo;
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
        public function getCodMedico(){
            return $this->codMedico;
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

                $sqlLista = "SELECT M.codMedico, M.nome AS medico, M.cpf, M.crm, 
                                    E.codEspecialidade, E.nome AS especialidade, E.descricao
                             FROM medico_especialidade ME 
                                INNER JOIN medico M 
                                ON ME.codMedico =M.codMedico 
                                INNER JOIN especialidade E 
                                ON ME.codEspecialidade = E.codEspecialidade
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

                $sqlCreate = "INSERT INTO medico_especialidade(codMedico,codEspecialidade) VALUES(?,?)";
                $conexao->exec('SET NAMES utf8');
                $stmtCreate = $conexao->prepare($sqlCreate);
                $stmtCreate->bindParam(1,$this->codMedico);
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

                $sqlRead = "SELECT E.codEspecialidade, E.nome, E.descricao
                            FROM medico_especialidade ME
                                INNER JOIN especialidade E
                                ON ME.codEspecialidade = E.codEspecialidade
                            WHERE ME.codMedico = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtRead = $conexao->prepare($sqlRead);
                $stmtRead->bindParam(1,$this->codMedico);
                $stmtRead->execute();

                $medicos = $stmtRead->fetchALL(PDO::FETCH_ASSOC);
                echo json_encode($medicos);

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

                $sqlDelete = "DELETE FROM medico_especialidade WHERE codMedico = ? AND codEspecialidade = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtDelete = $conexao->prepare($sqlDelete);
                $stmtDelete->bindParam(1,$this->codMedico);
                $stmtDelete->bindParam(2,$this->codEspecialidade);
                echo($stmtDelete->execute());

            } catch (PDOException $e) {
                echo "Erro: ".$e->getMessage();
            }
        }
    }
?>