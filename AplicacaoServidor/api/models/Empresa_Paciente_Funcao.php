<?php

    class EmpresaPacienteFuncao {
        private $codEmpresa;
        private $codPaciente;
        private $codFuncao;
        private $codSubgrupo;
        private $inicio;
        private $termino;

        private $dbUsuario;
        private $dbSenha;

        //SETTERS
        public function setCodEmpresa($codigo){
            $this->codEmpresa = $codigo;
        }
        public function setCodPaciente($codigo){
            $this->codPaciente = $codigo;
        }
        public function setCodFuncao($codigo){
            $this->codFuncao = $codigo;
        }
        public function setCodSubgrupo($codigo){
            $this->codSubgrupo = $codigo;
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
        public function getCodEmpresa(){
            return $this->codEmpresa;
        }
        public function getCodPaciente(){
            return $this->codPaciente;
        }
        public function getCodFuncao(){
            return $this->codFuncao;
        }
        public function getCodSubgrupo(){
            return $this->codSubgrupo;
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
                include_once('../../utils/EmpresaUtil.php');
                include_once('../../utils/FuncionarioUtil.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlLista = "SELECT E.codEmpresa, E.nome AS empresa, E.cnpj, E.tipoPgto AS pagamento,
                                    P.codPaciente, P.nome AS paciente, P.cpf, P.rg, P.sexo, P.nascimento,
                                    F.codFuncao, F.nome AS funcao, F.setor, F.descricao AS descricao_funcao,
                                    S.codSubgrupo, S.nome AS subgrupo, EPF.inicio, EPF.termino
                             FROM empresa_paciente_funcao EPF 
                                INNER JOIN empresa E 
                                ON EPF.codEmpresa = E.codEmpresa 
                                INNER JOIN paciente P 
                                ON EPF.codPaciente = P.codPaciente
                                INNER JOIN funcao F 
                                ON EPF.codFuncao = F.codFuncao
                                LEFT JOIN subgrupo S 
                                ON EPF.codSubgrupo = S.codSubgrupo
                             ORDER BY P.nome ASC";
                $conexao->exec('SET NAMES utf8');
                $stmtLista = $conexao->prepare($sqlLista);
                $stmtLista->execute();

                $lista = $stmtLista->fetchALL(PDO::FETCH_ASSOC);
                /*$response = Array();

                $keys = array_keys($lista);
                $size = count($lista);

                for ($i = 0; $i < $size; $i++) {
                    $key = $keys[$i];

                    if($lista[$key]["codEmpresa"] == null) continue;

                    $aux->codEmpresa = $lista[$key]["codEmpresa"];
                    $aux->empresa = $lista[$key]["empresa"];
                    $aux->cnpj = $lista[$key]["cnpj"];
                    $aux->pagamento = $lista[$key]["pagamento"];

                    $relacao->codPaciente = $lista[$key]["codPaciente"];
                    $relacao->paciente = $lista[$key]["paciente"];
                    $relacao->cpf = $lista[$key]["cpf"];
                    $relacao->rg = $lista[$key]["rg"];
                    $relacao->sexo = $lista[$key]["sexo"];
                    $relacao->nascimento = $lista[$key]["nascimento"];
                    $relacao->codFuncao = $lista[$key]["codFuncao"];
                    $relacao->funcao = $lista[$key]["funcao"];
                    $relacao->setor = $lista[$key]["setor"];
                    $relacao->descricao_funcao = $lista[$key]["descricao_funcao"];
                    $relacao->codSubgrupo = $lista[$key]["codSubgrupo"];
                    $relacao->subgrupo = $lista[$key]["subgrupo"];
                    $relacao->inicio = $lista[$key]["inicio"];
                    $relacao->termino = $lista[$key]["termino"];

                    $aux->relacoes = array(clone $relacao);

                    unset($lista[$key]);

                    foreach($lista as $key_aux => $row_aux) {
                        $comparative = array(
                            $row_aux["codPaciente"],
                            $row_aux["codFuncao"],
                            $row_aux["codSubgrupo"],
                            $row_aux["inicio"],
                            $row_aux["termino"]
                        );

                        if(
                            $aux->codEmpresa == $row_aux["codEmpresa"] && 
                            !in_array($comparative, $aux->relacoes, true)
                            ) {

                                $aux_relacao->codPaciente = $row_aux["codPaciente"];
                                $aux_relacao->paciente = $row_aux["paciente"];
                                $aux_relacao->cpf = $row_aux["cpf"];
                                $aux_relacao->rg = $row_aux["rg"];
                                $aux_relacao->sexo = $row_aux["sexo"];
                                $aux_relacao->nascimento = $row_aux["nascimento"];
                                $aux_relacao->codFuncao = $row_aux["codFuncao"];
                                $aux_relacao->funcao = $row_aux["funcao"];
                                $aux_relacao->setor = $row_aux["setor"];
                                $aux_relacao->descricao_funcao = $row_aux["descricao_funcao"];
                                $aux_relacao->codSubgrupo = $row_aux["codSubgrupo"];
                                $aux_relacao->subgrupo = $row_aux["subgrupo"];
                                $aux_relacao->inicio = $row_aux["inicio"];
                                $aux_relacao->termino = $row_aux["termino"];
                                
                                array_push($aux->relacoes, clone $aux_relacao);
                                unset($lista[$key_aux]);
                        }
                    }

                    array_push($response, clone $aux);
                }

                return $response;*/
                foreach($lista as $row) {
                    $empresa = isset($empresas[$row['codEmpresa']]) ? $empresas[$row['codEmpresa']] : NULL;
            
                    if(!$empresa) {
                        $empresa = new EmpresaUtil($row['codEmpresa'],$row['empresa'],$row['cnpj'],$row['pagamento']);
                        
                        $empresas[$row['codEmpresa']] = $empresa;
                    }
            
                    $novo_funcionario = new FuncionarioUtil(
                        $row['codPaciente'],
                        $row['paciente'],
                        $row['cpf'],
                        $row['rg'],
                        $row['sexo'],
                        $row['nascimento'],
                        $row['codFuncao'],
                        $row['funcao'],
                        $row['setor'],
                        $row['descricao_funcao'],
                        $row['codSubgrupo'],
                        $row['subgrupo'],
                        $row['inicio'],
                        $row['termino']
                    );
                    $empresa->addFuncionario($novo_funcionario);
                }
            
                echo(json_encode($empresas, JSON_FORCE_OBJECT));
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

                $sqlCreate = "INSERT INTO empresa_paciente_funcao(codEmpresa,codPaciente,codFuncao,codSubgrupo,inicio,termino) VALUES(?,?,?,?,?,?)";
                $conexao->exec('SET NAMES utf8');
                $stmtCreate = $conexao->prepare($sqlCreate);
                $stmtCreate->bindParam(1,$this->codEmpresa);
                $stmtCreate->bindParam(2,$this->codPaciente);
                $stmtCreate->bindParam(3,$this->codFuncao);
                $stmtCreate->bindParam(4,$this->codSubgrupo);
                $stmtCreate->bindParam(5,$this->inicio);
                $stmtCreate->bindParam(6,$this->termino);
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
        public function read($campo_principal,$codigo){

            try {

                include('../../database.class.php');
                include_once('../../utils/EmpresaUtil.php');
                include_once('../../utils/FuncionarioUtil.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlRead = "SELECT  E.codEmpresa, E.nome AS empresa, E.cnpj, E.tipoPgto AS pagamento,
                                    P.codPaciente, P.nome AS paciente, P.cpf, P.rg, P.sexo, P.nascimento,
                                    F.codFuncao, F.nome AS funcao, F.setor, F.descricao AS descricao_funcao,
                                    S.codSubgrupo, S.nome AS subgrupo, EPF.inicio, EPF.termino
                            FROM empresa_paciente_funcao EPF 
                                INNER JOIN empresa E 
                                ON EPF.codEmpresa = E.codEmpresa 
                                INNER JOIN paciente P 
                                ON EPF.codPaciente = P.codPaciente
                                INNER JOIN funcao F 
                                ON EPF.codFuncao = F.codFuncao
                                LEFT JOIN subgrupo S 
                                ON EPF.codSubgrupo = S.codSubgrupo 
                            WHERE EPF.$campo_principal = ? 
                            ORDER BY P.nome ASC";
                $conexao->exec('SET NAMES utf8');
                $stmtRead = $conexao->prepare($sqlRead);
                $stmtRead->bindParam(1,$codigo);
                $stmtRead->execute();

                $lista = $stmtRead->fetchALL(PDO::FETCH_ASSOC);
                /*$response = Array();

                $keys = array_keys($lista);
                $size = count($lista);

                for ($i = 0; $i < $size; $i++) {
                    $key = $keys[$i];

                    if($lista[$key]["codEmpresa"] == null) continue;

                    $aux->codEmpresa = $lista[$key]["codEmpresa"];
                    $aux->empresa = $lista[$key]["empresa"];
                    $aux->cnpj = $lista[$key]["cnpj"];
                    $aux->pagamento = $lista[$key]["pagamento"];

                    $relacao->codPaciente = $lista[$key]["codPaciente"];
                    $relacao->paciente = $lista[$key]["paciente"];
                    $relacao->cpf = $lista[$key]["cpf"];
                    $relacao->rg = $lista[$key]["rg"];
                    $relacao->sexo = $lista[$key]["sexo"];
                    $relacao->nascimento = $lista[$key]["nascimento"];
                    $relacao->codFuncao = $lista[$key]["codFuncao"];
                    $relacao->funcao = $lista[$key]["funcao"];
                    $relacao->setor = $lista[$key]["setor"];
                    $relacao->descricao_funcao = $lista[$key]["descricao_funcao"];
                    $relacao->codSubgrupo = $lista[$key]["codSubgrupo"];
                    $relacao->subgrupo = $lista[$key]["subgrupo"];
                    $relacao->inicio = $lista[$key]["inicio"];
                    $relacao->termino = $lista[$key]["termino"];

                    $aux->relacoes = array(clone $relacao);

                    unset($lista[$key]);

                    foreach($lista as $key_aux => $row_aux) {
                        $comparative = array(
                            $row_aux["codPaciente"],
                            $row_aux["codFuncao"],
                            $row_aux["codSubgrupo"],
                            $row_aux["inicio"],
                            $row_aux["termino"]
                        );

                        if(
                            $aux->codEmpresa == $row_aux["codEmpresa"] && 
                            !in_array($comparative, $aux->relacoes, true)
                            ) {

                                $aux_relacao->codPaciente = $row_aux["codPaciente"];
                                $aux_relacao->paciente = $row_aux["paciente"];
                                $aux_relacao->cpf = $row_aux["cpf"];
                                $aux_relacao->rg = $row_aux["rg"];
                                $aux_relacao->sexo = $row_aux["sexo"];
                                $aux_relacao->nascimento = $row_aux["nascimento"];
                                $aux_relacao->codFuncao = $row_aux["codFuncao"];
                                $aux_relacao->funcao = $row_aux["funcao"];
                                $aux_relacao->setor = $row_aux["setor"];
                                $aux_relacao->descricao_funcao = $row_aux["descricao_funcao"];
                                $aux_relacao->codSubgrupo = $row_aux["codSubgrupo"];
                                $aux_relacao->subgrupo = $row_aux["subgrupo"];
                                $aux_relacao->inicio = $row_aux["inicio"];
                                $aux_relacao->termino = $row_aux["termino"];
                                
                                array_push($aux->relacoes, clone $aux_relacao);
                                unset($lista[$key_aux]);
                        }
                    }

                    array_push($response, clone $aux);
                }

                echo json_encode($response);*/
                foreach($lista as $row) {
                    $empresa = isset($empresas[$row['codEmpresa']]) ? $empresas[$row['codEmpresa']] : NULL;
            
                    if(!$empresa) {
                        $empresa = new EmpresaUtil($row['codEmpresa'],$row['empresa'],$row['cnpj'],$row['pagamento']);
                        
                        $empresas[$row['codEmpresa']] = $empresa;
                    }
            
                    $novo_funcionario = new FuncionarioUtil(
                        $row['codPaciente'],
                        $row['paciente'],
                        $row['cpf'],
                        $row['rg'],
                        $row['sexo'],
                        $row['nascimento'],
                        $row['codFuncao'],
                        $row['funcao'],
                        $row['setor'],
                        $row['descricao_funcao'],
                        $row['codSubgrupo'],
                        $row['subgrupo'],
                        $row['inicio'],
                        $row['termino']
                    );
                    $empresa->addFuncionario($novo_funcionario);
                }
            
                echo(json_encode($empresas, JSON_FORCE_OBJECT));

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

                $sqlUpdate = "UPDATE empresa_paciente_funcao SET codSubgrupo = ?, inicio = ?, termino = ? WHERE codEmpresa = ? AND codPaciente = ? AND codFuncao= ?";
                $conexao->exec('SET NAMES utf8');
                $stmtUpdate = $conexao->prepare($sqlUpdate);
                $stmtUpdate->bindParam(1,$this->codSubgrupo);
                $stmtUpdate->bindParam(2,$this->inicio);
                $stmtUpdate->bindParam(3,$this->termino);
                $stmtUpdate->bindParam(4,$this->codEmpresa);
                $stmtUpdate->bindParam(5,$this->codPaciente);
                $stmtUpdate->bindParam(6,$this->codFuncao);
                $result = $stmtUpdate->execute();

                if($result) {
                    http_response_code(200);
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
        public function delete(){

            try {

                include('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlDelete = "DELETE FROM empresa_paciente_funcao WHERE codEmpresa = ? AND codPaciente = ? AND codFuncao= ?";
                $conexao->exec('SET NAMES utf8');
                $stmtDelete = $conexao->prepare($sqlDelete);
                $stmtDelete->bindParam(1,$this->codEmpresa);
                $stmtDelete->bindParam(2,$this->codPaciente);
                $stmtDelete->bindParam(3,$this->codFuncao);
                $result = $stmtDelete->execute();

                if($result) {
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
