<?php

    class ConsultaExameProfissional {
        private $codConsulta;
        private $codExame;
        private $codProfissional;
        private $inicio;
        private $termino;

        private $dbUsuario;
        private $dbSenha;

        //SETTERS
        public function setCodConsulta($codigo){
            $this->codConsulta = $codigo;
        }
        public function setCodExame($codigo){
            $this->codExame = $codigo;
        }
        public function setCodProfissional($codigo){
            $this->codProfissional = $codigo;
        }
        public function setInicio($data){
            $this->inicio = $data;
        }
        public function setTermino($data){
            $this->termino = $data;
        }
        public function setDBUsuario($usuario){
            $this->dbUsuario = $usuario;
        }
        public function setDBSenha($senha){
            $this->dbSenha = $senha;
        }

        //GETTERS
        public function getCodConsulta(){
            return $this->codConsulta;
        }
        public function getCodExame(){
            return $this->codExame;
        }
        public function getCodProfissional(){
            return $this->codProfissional;
        }
        public function getInicio(){
            return $this->inicio;
        }
        public function getTermino(){
            return $this->termino;
        }

        //CRUD
        public function lista(){
            try {

                include_once('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlLista = "SELECT E.codExame, E.nome AS exame, E.descricao, E.codigo,
                                    C.codConsulta, C.dataHora, 
									P.nome AS paciente, P.cpf, P.nascimento,
                                    Em.codEmpresa, Em.nome AS empresa,
                                    Pr.codProfissional, Pr.nome AS profissional, 
                                    CEP.inicio, CEP.termino
                             FROM consulta_exame_profissional CEP 
                                INNER JOIN consulta C 
                                ON CEP.codConsulta = C.codConsulta 
                                INNER JOIN exame E 
                                ON CEP.codExame = E.codExame
                                LEFT JOIN profissional Pr
                                ON CEP.codProfissional = Pr.codProfissional
                                INNER JOIN paciente P 
                                ON C.codPaciente = P.codPaciente
                                INNER JOIN empresa Em 
                                ON C.codEmpresa = Em.codEmpresa
                             ORDER BY C.dataHora DESC";
                $conexao->exec('SET NAMES utf8');
                $stmtLista = $conexao->prepare($sqlLista);
                $stmtLista->execute();

                $lista = $stmtLista->fetchALL(PDO::FETCH_ASSOC);
                $response = Array();

                $keys = array_keys($lista);
                $size = count($lista);
                
                for ($i = 0; $i < $size; $i++) {
                    $key = $keys[$i];

                    if($lista[$key]["codConsulta"] == null) continue;
                    
                    $aux->codConsulta = $lista[$key]["codConsulta"];
                    $aux->dataHora = $lista[$key]["dataHora"];
                    $aux->paciente = $lista[$key]["paciente"];
                    $aux->cpf = $lista[$key]["cpf"];
                    $aux->codEmpresa = $lista[$key]["codEmpresa"];
                    $aux->empresa = $lista[$key]["empresa"];

                    $procedimento->codExame = $lista[$key]["codExame"];
                    $procedimento->exame = $lista[$key]["exame"];
                    $procedimento->descricao = $lista[$key]["descricao"];
                    $procedimento->codigo = $lista[$key]["codigo"];
                    $procedimento->codProfissional = $lista[$key]["codProfissional"];
                    $procedimento->profissional = $lista[$key]["profissional"];
                    $procedimento->inicio = $lista[$key]["inicio"];
                    $procedimento->termino = $lista[$key]["termino"];

                    $aux->procedimentos = array(clone $procedimento);

                    unset($lista[$key]);

                    foreach($lista as $key_aux => $row_aux) {
                        
                        if(
                            $aux->codConsulta == $row_aux["codConsulta"] && 
                            !in_array($row_aux["codExame"], $aux->procedimentos, true)
                            ) {
                                $aux_procedimento->codExame = $row_aux["codExame"];
                                $aux_procedimento->exame = $row_aux["exame"];
                                $aux_procedimento->descricao = $row_aux["descricao"];
                                $aux_procedimento->codigo = $row_aux["codigo"];
                                $aux_procedimento->codProfissional = $row_aux["codProfissional"];
                                $aux_procedimento->profissional = $row_aux["profissional"];
                                $aux_procedimento->inicio = $row_aux["inicio"];
                                $aux_procedimento->termino = $row_aux["termino"];

                                array_push($aux->procedimentos, clone $aux_procedimento);
                                unset($lista[$key_aux]);
                        }
                    }

                    array_push($response, clone $aux);
                }

                return $response;
                // return $lista;
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

                include_once('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();
                // Inicia uma transaction, possibilitando rollback
                $conexao->beginTransaction();

                $sqlCreate = "INSERT INTO consulta_exame_profissional(codConsulta,codExame) VALUES ";

                foreach($this->codExame as $codigo) {
                    $sqlCreate .= "($this->codConsulta, $codigo),";
                }

                $sqlCreate = rtrim($sqlCreate, ',');

                $conexao->exec('SET NAMES utf8');
                $stmtCreate = $conexao->prepare($sqlCreate);
                $result = $stmtCreate->execute();
                
                if($result) {
                    $conexao->commit();
                    http_response_code(200);
                } else {
                    $conexao->rollback();
                    http_response_code(400);
                    echo(json_encode(array('error' => "Ocorreu um erro ao inserir o registro, verifique os valores."), JSON_FORCE_OBJECT));
                }

            } catch (PDOException $e) {
                $conexao->rollback();
                http_response_code(500);
                $erro = $e->getMessage();
                echo(json_encode(array('error' => "$erro"), JSON_FORCE_OBJECT));
            }
        }
        public function read($campo_principal,$codigo){

            try {

                include('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlRead = "SELECT  E.codExame, E.nome AS exame, E.descricao, E.codigo,
                                    C.codConsulta, C.dataHora, 
									P.nome AS paciente, P.cpf, P.nascimento,
                                    Em.codEmpresa, Em.nome AS empresa,
                                    Pr.codProfissional, Pr.nome AS profissional, 
                                    CEP.inicio, CEP.termino
                            FROM consulta_exame_profissional CEP 
                                INNER JOIN consulta C 
                                ON CEP.codConsulta = C.codConsulta 
                                INNER JOIN exame E 
                                ON CEP.codExame = E.codExame
                                LEFT JOIN profissional Pr 
                                ON CEP.codProfissional = Pr.codProfissional
                                INNER JOIN paciente P 
                                ON C.codPaciente = P.codPaciente
                                INNER JOIN empresa Em 
                                ON C.codEmpresa = Em.codEmpresa
                            WHERE CEP.$campo_principal = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtRead = $conexao->prepare($sqlRead);
                $stmtRead->bindParam(1,$codigo);
                $stmtRead->execute();

                $dados = $stmtRead->fetchALL(PDO::FETCH_ASSOC);
                echo json_encode($dados);

            } catch (PDOException $e) {
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
                // Inicia uma transaction, possibilitando rollback
                $conexao->beginTransaction();

                $sqlUpdate = "UPDATE consulta_exame_profissional SET codProfissional = ?, inicio = ?, termino = ? 
                              WHERE codConsulta = ? AND codExame = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtUpdate = $conexao->prepare($sqlUpdate);
                $stmtUpdate->bindParam(1,$this->codProfissional);
                $stmtUpdate->bindParam(2,$this->inicio);
                $stmtUpdate->bindParam(3,$this->termino);
                $stmtUpdate->bindParam(4,$this->codConsulta);
                $stmtUpdate->bindParam(5,$this->codExame);
                $result = $stmtUpdate->execute();

                if($result) {
                    $conexao->commit();
                    http_response_code(200);
                } else {
                    $conexao->rollback();
                    http_response_code(400);
                    echo(json_encode(array('error' => "Ocorreu um erro ao atualizar o registro, verifique os valores."), JSON_FORCE_OBJECT));
                }

            } catch (PDOException $e){
                $conexao->rollback();
                http_response_code(500);
                $erro = $e->getMessage();
                echo(json_encode(array('error' => "$erro"), JSON_FORCE_OBJECT));
            }
        }
        public function delete(){

            try {

                include('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();
                // Apenas exames não realizados podem ser excluídos
                $sqlDelete = "DELETE FROM consulta_exame_profissional 
                              WHERE codConsulta = ? AND codExame = ? AND inicio IS NULL AND termino IS NULL";
                $conexao->exec('SET NAMES utf8');
                $stmtDelete = $conexao->prepare($sqlDelete);
                $stmtDelete->bindParam(1,$this->codConsulta);
                $stmtDelete->bindParam(2,$this->codExame);
                $result = $stmtDelete->execute();

                if($result) {
                    // O PDO retornará sucesso mesmo se não for excluído, e como o padrão para REST é retornar
                    // 204 para no-content, o front-end deverá controlar o botão de remoção na view para feedback visual
                    http_response_code(204);
                } else {
                    http_response_code(400);
                    echo(json_encode(array('error' => "Ocorreu um erro ao remover o registro, verifique os valores."), JSON_FORCE_OBJECT));
                }

            } catch (PDOException $e) {
                http_response_code(500);
                $erro = $e->getMessage();
                echo(json_encode(array('error' => "$erro"), JSON_FORCE_OBJECT));
            }
        }
    }
?>
