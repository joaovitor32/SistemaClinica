<?php
    class Consulta{

        private $codConsulta;
        private $codExame;
        private $codMedico;
        private $inicio;
        private $fim;


        private $dbUsuario;
        private $dbSenha;

        //GETS
        public function getCodConsulta(){
            return $this->codConsulta;
        }
        public function getCodExame(){
            return $this->codExame;
        }
        public function getCodMedico(){
            return $this->codMedico;
        }
        public function getInicio(){
            return $this->inicio;
        }
        public function getFim(){
            return $this->fim;
        }
        //SETS
        public function setCodConsulta($codConsulta){
            $this->codConsulta=$codConsulta;
        }
        public function setCodExame($codExame){
            $this->codExame=$codExame;
        }
        public function setCodMedico($codMedico){
            $this->codMedico=$codMedico;
        }
        public function setInicio($inicio){
            $this->inicio=$inicio;
        }
        public function setFim($fim){
            $this->fim=$fim;
        }
        public function setDBUsuario($usuario){
            $this->dbUsuario = $usuario ;
        }
        public function setDBSenha($senha){
            $this->dbSenha = $senha ;
        }

        //CRUD
        public function listaByMedico(){
            try{
                
                include "../../database.class.php";
                $db=new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);
                $conexao=$db->conecta_mysql();

                $sqlListaConsultasByMedico="SELECT * FROM consulta AS co INNER JOIN paciente AS pa ON pa.codPaciente=co.codPaciente INNER JOIN consulta_exame_medico AS ce ON ce.codConsulta=co.codConsulta WHERE ce.codMedico=?";
                $conexao->exec("SET NAMES utf8");
                $stmtListaConsultasBYMedico=$conexao->prepare($sqlListaConsultasByMedico);
                $stmtListaConsultasBYMedico->bindParam(1,$this->codMedico);
                $stmtListaConsultasBYMedico->execute();
                $consultasByMedico=$stmtListaConsultasBYMedico->fetchALL(PDO::FETCH_ASSOC);
                return $consultasByMedico;
            }catch(PDOException $e){
                echo "Erro: ".$e->getMessage();
            }
        }
        public function listaJSON(){
            echo json_encode($this->listaByMedico());
        }

    }
?>