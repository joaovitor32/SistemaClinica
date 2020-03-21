<?php

    class Fatura {

        private $codFatura;
        private $codEmpresa;
        private $descricao;
        private $status;
        private $preco;

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
            $this->status = $status ;
        }
        public function setPreco($preco){
            $this->preco = $preco ;
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
        public function getPreco(){
            return $this->preco ;
        }

        //CRUD
        public function lista(){
            
            try {
                include('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlLista = "SELECT F.codFatura, F.status AS pagamento, F.descricao, F.dataHora, F.preco AS valor_total,
                                    E.codEmpresa, E.nome AS empresa, E.cnpj,
                                    C.codConsulta, C.inicio, C.termino, 
                                    TC.codTipoConsulta, TC.nome AS tipo_consulta,
                                    P.codPaciente, P.nome AS paciente, P.rg, P.cpf,
                                    EX.codExame, EX.nome AS exame, EX.preco,
                                    Pr.codProfissional, Pr.nome AS profissional, Pr.identificacao AS identificacao_profissional 
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
                                INNER JOIN consulta_exame_profissional CEP
                                ON C.codConsulta = CEP.codConsulta
                                INNER JOIN exame EX 
                                ON CEP.codExame = EX.codExame 
                                INNER JOIN profissional Pr 
                                ON CEP.codProfissional = Pr.codProfissional
                             ORDER BY F.dataHora DESC";
                $conexao->exec('SET NAMES utf8');
                $stmtLista = $conexao->prepare($sqlLista);
                $stmtLista->execute();

                $lista = $stmtLista->fetchALL(PDO::FETCH_ASSOC);
                $response = Array();

                $keys = array_keys($lista);
                $size = count($lista);

                for ($i = 0; $i < $size; $i++) {
                    $key = $keys[$i];

                    if($lista[$key]["codFatura"] == null) continue;

                    $aux->codFatura = $lista[$key]["codFatura"];
                    $aux->pagamento = $lista[$key]["pagamento"];
                    $aux->descricao = $lista[$key]["descricao"];
                    $aux->dataHora = $lista[$key]["dataHora"];
                    $aux->empresa = $lista[$key]["empresa"];
                    $aux->cnpj = $lista[$key]["cnpj"];
                    $aux->valor_total = $lista[$key]["valor_total"];

                    $consulta->codConsulta = $lista[$key]["codConsulta"];
                    $consulta->inicio = $lista[$key]["inicio"];
                    $consulta->termino = $lista[$key]["termino"];
                    $consulta->codTipoConsulta = $lista[$key]["codTipoConsulta"];
                    $consulta->tipo_consulta = $lista[$key]["tipo_consulta"];
                    $consulta->codPaciente = $lista[$key]["codPaciente"];
                    $consulta->paciente = $lista[$key]["paciente"];
                    $consulta->rg = $lista[$key]["rg"];
                    $consulta->cpf = $lista[$key]["cpf"];
                    $consulta->codExame = $lista[$key]["codExame"];
                    $consulta->exame = $lista[$key]["exame"];
                    $consulta->preco = $lista[$key]["preco"];
                    $consulta->codProfissional = $lista[$key]["codProfissional"];
                    $consulta->profissional = $lista[$key]["profissional"];
                    $consulta->identificacao_profissional = $lista[$key]["identificacao_profissional"];

                    $aux->consultas = array(clone $consulta);

                    unset($lista[$key]);

                    foreach($lista as $key_aux => $row_aux) {
                        if(
                            $aux->codFatura == $row_aux["codFatura"] && 
                            !in_array($row_aux["codConsulta"], $aux->consultas, true)
                            ) {
                                $aux_consulta->codConsulta = $row_aux["codConsulta"];
                                $aux_consulta->inicio = $row_aux["inicio"];
                                $aux_consulta->termino = $row_aux["termino"];
                                $aux_consulta->codTipoConsulta = $row_aux["codTipoConsulta"];
                                $aux_consulta->tipo_consulta = $row_aux["tipo_consulta"];
                                $aux_consulta->codPaciente = $row_aux["codPaciente"];
                                $aux_consulta->paciente = $row_aux["paciente"];
                                $aux_consulta->rg = $row_aux["rg"];
                                $aux_consulta->cpf = $row_aux["cpf"];
                                $aux_consulta->codExame = $row_aux["codExame"];
                                $aux_consulta->exame = $row_aux["exame"];
                                $aux_consulta->preco = $row_aux["preco"];
                                $aux_consulta->codProfissional = $row_aux["codProfissional"];
                                $aux_consulta->profissional = $row_aux["profissional"];
                                $aux_consulta->identificacao_profissional = $row_aux["identificacao_profissional"];

                                array_push($aux->consultas, clone $aux_consulta);
                                unset($lista[$key_aux]);
                        }
                    }

                    array_push($response, clone $aux);
                }


                return $response;
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

                $sqlCreate = "INSERT INTO fatura(codEmpresa,descricao,preco,status,dataHora) VALUES(?,?,?,0,NOW())";
                $conexao->exec('SET NAMES utf8');
                $stmtCreate = $conexao->prepare($sqlCreate);
                $stmtCreate->bindParam(1,$this->codEmpresa);
                $stmtCreate->bindParam(2,$this->descricao);
                $stmtCreate->bindParam(2,$this->preco);
                $result = $stmtCreate->execute();
                
                if($result) {
                    http_response_code(201);
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

                include_once('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);
                
                $conexao = $db->conecta_mysql();

                $sqlRead = "SELECT F.codFatura, F.status AS pagamento, F.descricao, F.dataHora, F.preco AS valor_total,
                                   E.codEmpresa, E.nome AS empresa, E.cnpj,
                                   C.codConsulta, C.inicio, C.termino, 
                                   TC.codTipoConsulta, TC.nome AS tipo_consulta,
                                   P.codPaciente, P.nome AS paciente, P.rg, P.cpf,
                                   EX.codExame, EX.nome AS exame, EX.preco,
                                   Pr.codProfissional, Pr.nome AS profissional, Pr.identificacao AS identificacao_profissional 
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
                                INNER JOIN consulta_exame_profissional CEP
                                ON C.codConsulta = CEP.codConsulta
                                INNER JOIN exame EX 
                                ON CEP.codExame = EX.codExame 
                                INNER JOIN profissional Pr 
                                ON CEP.codProfissional = Pr.codProfissional
                            WHERE F.codFatura = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtRead = $conexao->prepare($sqlRead);
                $stmtRead->bindParam(1,$this->codFatura);
                $stmtRead->execute();

                $lista = $stmtRead->fetchAll(PDO::FETCH_ASSOC);
                // echo json_encode($fatura);

                $response = new stdClass();

                $keys = array_keys($lista);
                $size = count($lista);

                for ($i = 0; $i < $size; $i++) {
                    $key = $keys[$i];

                    if($lista[$key]["codFatura"] == null) continue;

                    $aux->codFatura = $lista[$key]["codFatura"];
                    $aux->pagamento = $lista[$key]["pagamento"];
                    $aux->descricao = $lista[$key]["descricao"];
                    $aux->dataHora = $lista[$key]["dataHora"];
                    $aux->codEmpresa = $lista[$key]["codEmpresa"];
                    $aux->empresa = $lista[$key]["empresa"];
                    $aux->cnpj = $lista[$key]["cnpj"];
                    $aux->valor_total = $lista[$key]["valor_total"];

                    $consulta->codConsulta = $lista[$key]["codConsulta"];
                    $consulta->inicio = $lista[$key]["inicio"];
                    $consulta->termino = $lista[$key]["termino"];
                    $consulta->codTipoConsulta = $lista[$key]["codTipoConsulta"];
                    $consulta->tipo_consulta = $lista[$key]["tipo_consulta"];
                    $consulta->codPaciente = $lista[$key]["codPaciente"];
                    $consulta->paciente = $lista[$key]["paciente"];
                    $consulta->rg = $lista[$key]["rg"];
                    $consulta->cpf = $lista[$key]["cpf"];
                    $consulta->codExame = $lista[$key]["codExame"];
                    $consulta->exame = $lista[$key]["exame"];
                    $consulta->preco = $lista[$key]["preco"];
                    $consulta->codProfissional = $lista[$key]["codProfissional"];
                    $consulta->profissional = $lista[$key]["profissional"];
                    $consulta->identificacao_profissional = $lista[$key]["identificacao_profissional"];

                    $aux->consultas = array(clone $consulta);

                    unset($lista[$key]);

                    foreach($lista as $key_aux => $row_aux) {
                        if(
                            $aux->codFatura == $row_aux["codFatura"] && 
                            !in_array($row_aux["codConsulta"], $aux->consultas, true)
                            ) {
                                $aux_consulta->codConsulta = $row_aux["codConsulta"];
                                $aux_consulta->inicio = $row_aux["inicio"];
                                $aux_consulta->termino = $row_aux["termino"];
                                $aux_consulta->codTipoConsulta = $row_aux["codTipoConsulta"];
                                $aux_consulta->tipo_consulta = $row_aux["tipo_consulta"];
                                $aux_consulta->codPaciente = $row_aux["codPaciente"];
                                $aux_consulta->paciente = $row_aux["paciente"];
                                $aux_consulta->rg = $row_aux["rg"];
                                $aux_consulta->cpf = $row_aux["cpf"];
                                $aux_consulta->codExame = $row_aux["codExame"];
                                $aux_consulta->exame = $row_aux["exame"];
                                $aux_consulta->preco = $row_aux["preco"];
                                $aux_consulta->codProfissional = $row_aux["codProfissional"];
                                $aux_consulta->profissional = $row_aux["profissional"];
                                $aux_consulta->identificacao_profissional = $row_aux["identificacao_profissional"];

                                array_push($aux->consultas, clone $aux_consulta);
                                unset($lista[$key_aux]);
                        }
                    }

                    $response = clone $aux;
                }

                echo json_encode($response);
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