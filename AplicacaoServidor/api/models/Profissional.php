<?php

    class Profissional {

        private $codProfissional;
        private $nome;
        private $cpf;
        private $identificacao;

        private $dbUsuario;
        private $dbSenha;

        //SETTERS
        public function setCodProfissional($codigo){
            $this->codProfissional = $codigo ;
        }
        public function setNome($nome){
            $this->nome = $nome ;
        }
        public function setCPF($cpf){
            $this->cpf = $cpf ;
        }
        public function setIdentificacao($identificacao){
            $this->identificacao = $identificacao ;
        }
        public function setDBUsuario($usuario){
            $this->dbUsuario = $usuario ;
        }
        public function setDBSenha($senha){
            $this->dbSenha = $senha ;
        }

        //GETTERS
        public function getCodProfissional(){
            return $this->codProfissional ;
        }
        public function getNome(){
            return $this->nome ;
        }
        public function getCPF(){
            return $this->cpf ;
        }
        public function getIdentificacao(){
            return $this->identificacao ;
        }

        //CRUD
        public function lista(){
            
            try {
                include('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlLista = "SELECT P.codProfissional, P.nome, P.cpf, P.identificacao, E.nome AS especialidade 
                            FROM profissional P 
                            LEFT JOIN profissional_especialidade PE 
                            ON  P.codProfissional = PE.codProfissional
                            LEFT JOIN especialidade E 
                            ON PE.codEspecialidade = E.codEspecialidade 
                            ORDER BY  P.codProfissional ASC";
                $conexao->exec('SET NAMES utf8');
                $stmtLista = $conexao->prepare($sqlLista);
                $stmtLista->execute();

                $profissionais = $stmtLista->fetchALL(PDO::FETCH_ASSOC);
                $response = Array();

                $keys = array_keys($profissionais);
                $size = count($profissionais);
                
                for ($i = 0; $i < $size; $i++) {
                    $key   = $keys[$i];

                    if($profissionais[$key]["codProfissional"] == null) continue;
                    
                    $aux->codProfissional = $profissionais[$key]["codProfissional"];
                    $aux->nome = $profissionais[$key]["nome"];
                    $aux->cpf = $profissionais[$key]["cpf"];
                    $aux->identificacao = $profissionais[$key]["identificacao"];
                    
                    $aux->especialidades = array();
                    if($profissionais[$key]["especialidade"]){
                        array_push($aux->especialidades, $profissionais[$key]["especialidade"]);
                    }

                    unset($profissionais[$key]);

                    foreach($profissionais as $key_aux => $profissional_aux) {
                        if(
                            $aux->codProfissional == $profissional_aux["codProfissional"] && 
                            !in_array($profissional_aux["especialidade"], $aux->especialidades, true)
                        ) {
                            array_push($aux->especialidades, $profissional_aux["especialidade"]);
                            unset($profissionais[$key_aux]);
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

                $sqlCreate = "INSERT INTO profissional(nome,cpf,identificacao) VALUES(?,?,?)";
                $conexao->exec('SET NAMES utf8');
                $stmtCreate = $conexao->prepare($sqlCreate);
                $stmtCreate->bindParam(1,$this->nome);
                $stmtCreate->bindParam(2,$this->cpf);
                $stmtCreate->bindParam(3,$this->identificacao);
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

                include('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();
                
                $sqlRead = "SELECT P.codProfissional, P.nome, P.cpf, P.identificacao, E.nome AS especialidade, E.codEspecialidade 
                            FROM profissional P 
                            INNER JOIN profissional_especialidade PE 
                            ON  P.codProfissional = PE.codProfissional
                            INNER JOIN especialidade E 
                            ON PE.codEspecialidade = E.codEspecialidade 
                            WHERE P.codProfissional = ?
                            ORDER BY  P.codProfissional ASC";
                $conexao->exec('SET NAMES utf8');
                $stmtRead = $conexao->prepare($sqlRead);
                $stmtRead->bindParam(1,$this->codProfissional);
                $stmtRead->execute();

                $linhas = $stmtRead->fetchALL(PDO::FETCH_ASSOC);

                if($linhas) {
                    $response->codProfissional = $linhas[0]["codProfissional"];
                    $response->nome = $linhas[0]["nome"];
                    $response->cpf = $linhas[0]["cpf"];
                    $response->identificacao = $linhas[0]["identificacao"];
                    
                    $response->especialidades = array();
                    
                    foreach($linhas as $linha) {
                        if(!in_array($linha["especialidade"], $response->especialidades, true)) {
                            $especialidade->codEspecialidade = $linha["codEspecialidade"];
                            $especialidade->especialidade = $linha["especialidade"];
                            array_push($response->especialidades, clone $especialidade);
                        }
                    }
    
                    echo json_encode($response);
                } else {
                    http_response_code(404);
                    echo(json_encode(array('error' => "Ocorreu um erro ao buscar o registro, verifique os valores."), JSON_FORCE_OBJECT));
                }

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

                $sqlUpdate = "UPDATE profissional SET nome = ?, cpf = ?, identificacao = ? WHERE codProfissional = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtUpdate = $conexao->prepare($sqlUpdate);
                $stmtUpdate->bindParam(1,$this->nome);
                $stmtUpdate->bindParam(2,$this->cpf);
                $stmtUpdate->bindParam(3,$this->identificacao);
                $stmtUpdate->bindParam(4,$this->codProfissional);
                $result = $stmtUpdate->execute();

                if($result) {
                    http_response_code(200);
                    $this->read();
                } else {
                    http_response_code(400);
                    echo(json_encode(array('error' => "Ocorreu um erro ao atualizar o registro, verifique os valores."), JSON_FORCE_OBJECT));
                }

            } catch (PDOException $e) {
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
                
                $sqlDelete = "DELETE FROM profissional WHERE codProfissional = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtDelete = $conexao->prepare($sqlDelete);
                $stmtDelete->bindParam(1,$this->codProfissional);
                $result = $stmtDelete->execute();

                if($result) {
                    http_response_code(204);
                } else {
                    http_response_code(400);
                    echo(json_encode(array('error' => "ocorreu um erro ao remover o registro, verifique os valores."), JSON_FORCE_OBJECT));
                }
            } catch (PDOExcpetion $e) {
                http_response_code(500);
                $erro = $e->getMessage();
                echo(json_encode(array('error' => "$erro"), JSON_FORCE_OBJECT));
            }
        }
    }
?>
