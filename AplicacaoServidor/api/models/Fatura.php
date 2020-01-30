<?php

    class Fatura {

        private $codFatura;
        private $codEmpresa;
        private $descricao;
        private $status;

        private $dbUsuario;
        private $dbSenha;

        //SETTERS
        public function setCodFatura($codigo){
            $this->codFatura = $codigo ;
        }
        public function setCodEmpresa($codigo){
            $this->codEmpresa = $codigo ;
        }
        public function setDescricao($descricao){
            $this->descricao = $descricao ;
        }
        public function setStatus($status){
            $this->status = $descricao ;
        }
        public function setDBUsuario($usuario){
            $this->dbUsuario = $usuario ;
        }
        public function setDBSenha($senha){
            $this->dbSenha = $senha ;
        }

        //GETTERS
        public function getCodFatura(){
            return $this->codFatura ;
        }
        public function getCodEmpresa(){
            return $this->codEmpresa ;
        }
        public function getDescricao(){
            return $this->descricao ;
        }
        public function getStatus(){
            return $this->status ;
        }

        //CRUD
        public function lista(){
            
            try {
                include('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlLista = "SELECT F.status AS pagamento, F.descricao, F.dataHora, 
                                    E.codEmpresa, E.nome AS empresa, E.cnpj,
                                    C.codConsulta, C.inicio, C.termino, 
                                    TC.codTipoConsulta, TC.nome AS tipo_consulta,
                                    P.codPaciente, P.nome AS paciente, P.rg, P.cpf,
                                    EX.codExame, EX.nome AS exame, EX.preco,
                                    M.codMedico, M.nome AS medico, M.crm  
                             FROM fatura F
                                INNER JOIN empresa E
                                ON F.codEmpresa = E.codEmpresa 
                                INNER JOIN consulta_fatura CF 
                                ON F.codFatura = CF.codFatura 
                                INNER JOIN consulta C 
                                ON CF.codConsulta = C.codConsulta 
                                INNER JOIN tipo_consulta TC 
                                ON C.codTipoConsulta = TC.codTipoConsulta
                                INNER JOIN paciente P 
                                ON C.codPaciente = P.codPaciente
                                INNER JOIN consulta_exame_medico CEM
                                ON C.codConsulta = CEM.codConsulta
                                INNER JOIN exame EX 
                                ON CEM.codExame = EX.codExame 
                                INNER JOIN medico M 
                                ON CEM.codMedico = M.codMedico
                             ORDER BY F.dataHora DESC";
                $conexao->exec('SET NAMES utf8');
                $stmtLista = $conexao->prepare($sqlLista);
                $stmtLista->execute();

                $lista = $stmtLista->fetchALL(PDO::FETCH_ASSOC);
                return $lista;
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

                $sqlCreate = "INSERT INTO fatura(codEmpresa,descricao,status, dataHora) VALUES(?,?,0,NOW())";
                $conexao->exec('SET NAMES utf8');
                $stmtCreate = $conexao->prepare($sqlCreate);
                $stmtCreate->bindParam(1,$this->codEmpresa);
                $stmtCreate->bindParam(2,$this->descricao);
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

                $sqlRead = "SELECT F.status AS pagamento, F.descricao, F.dataHora, 
                                   E.codEmpresa, E.nome AS empresa, E.cnpj,
                                   C.codConsulta, C.inicio, C.termino, 
                                   TC.codTipoConsulta, TC.nome AS tipo_consulta,
                                   P.codPaciente, P.nome AS paciente, P.rg, P.cpf,
                                   EX.codExame, EX.nome AS exame, EX.preco,
                                   M.codMedico, M.nome AS medico, M.crm  
                            FROM fatura F
                                INNER JOIN empresa E
                                ON F.codEmpresa = E.codEmpresa 
                                INNER JOIN consulta_fatura CF 
                                ON F.codFatura = CF.codFatura 
                                INNER JOIN consulta C 
                                ON CF.codConsulta = C.codConsulta 
                                INNER JOIN tipo_consulta TC 
                                ON C.codTipoConsulta = TC.codTipoConsulta
                                INNER JOIN paciente P 
                                ON C.codPaciente = P.codPaciente
                                INNER JOIN consulta_exame_medico CEM
                                ON C.codConsulta = CEM.codConsulta
                                INNER JOIN exame EX 
                                ON CEM.codExame = EX.codExame 
                                INNER JOIN medico M 
                                ON CEM.codMedico = M.codMedico
                            WHERE codFatura = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtRead = $conexao->prepare($sqlRead);
                $stmtRead->bindParam(1,$this->codFatura);
                $stmtRead->execute();

                $fatura = $stmtRead->fetch(PDO::FETCH_ASSOC);
                echo json_encode($fatura);

            } catch (PDException $e) {
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

                $sqlUpdate = "UPDATE fatura SET status = ?, descricao = ? WHERE codFatura = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtUpdate = $conexao->prepare($sqlUpdate);
                $stmtUpdate->bindParam(1,$this->status);
                $stmtUpdate->bindParam(2,$this->descricao);
                $stmtUpdate->bindParam(3,$this->codFatura);
                $result = $stmtUpdate->execute();

                if($result) {
                    http_response_code(200);
                    $this->read();
                } else {
                    http_response_code(400);
                    echo(json_encode(array('error' => "Ocorreu um erro ao atualizar o registro, verifique os valores."), JSON_FORCE_OBJECT));
                }


            } catch (PDOException $e){
                http_response_code(500);
                $erro = $e->getMessage();
                echo(json_encode(array('error' => "$erro"), JSON_FORCE_OBJECT));
            }
        }
    }
?>