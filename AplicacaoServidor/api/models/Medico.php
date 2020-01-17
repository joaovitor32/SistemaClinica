<?php

    class Medico {

        private $codMedico;
        private $nome;
        private $cpf;
        private $crm;
        private $senha;

        private $dbUsuario;
        private $dbSenha;

        //SETTERS
        public function setCodMedico($codigo){
            $this->codMedico = $codigo ;
        }
        public function setNome($nome){
            $this->nome = $nome ;
        }
        public function setCPF($cpf){
            $this->cpf = $cpf ;
        }
        public function setCRM($crm){
            $this->crm = $crm ;
        }
        public function setSenha($senha){
            $this->senha = md5($senha) ;
        }
        public function setDBUsuario($usuario){
            $this->dbUsuario = $usuario ;
        }
        public function setDBSenha($senha){
            $this->dbSenha = $senha ;
        }

        //GETTERS
        public function getCodMedico(){
            return $this->codMedico ;
        }
        public function getNome(){
            return $this->nome ;
        }
        public function getCPF(){
            return $this->cpf ;
        }
        public function getCRM(){
            return $this->crm ;
        }

        //CRUD
        public function lista(){
            
            try {
                include('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlLista = "SELECT M.codMedico, M.nome, M.cpf, M.crm, E.nome AS especialidade 
                            FROM medico M 
                            LEFT JOIN medico_especialidade ME 
                            ON  M.codMedico = ME.codMedico
                            LEFT JOIN especialidade E 
                            ON ME.codEspecialidade = E.codEspecialidade 
                            ORDER BY  M.codMedico ASC";
                $conexao->exec('SET NAMES utf8');
                $stmtLista = $conexao->prepare($sqlLista);
                $stmtLista->execute();

                $medicos = $stmtLista->fetchALL(PDO::FETCH_ASSOC);
                $response = Array();

                $keys = array_keys($medicos);
                $size = count($medicos);
                
                for ($i = 0; $i < $size; $i++) {
                    $key   = $keys[$i];

                    if($medicos[$key]["codMedico"] == null) continue;
                    
                    $aux->codMedico = $medicos[$key]["codMedico"];
                    $aux->nome = $medicos[$key]["nome"];
                    $aux->cpf = $medicos[$key]["cpf"];
                    $aux->crm = $medicos[$key]["crm"];
                    
                    $aux->especialidades = array();
                    if($medicos[$key]["especialidade"]){
                        array_push($aux->especialidades, $medicos[$key]["especialidade"]);
                    }

                    unset($medicos[$key]);

                    foreach($medicos as $key_aux => $medico_aux) {
                        if(
                            $aux->codMedico == $medico_aux["codMedico"] && 
                            !in_array($medico_aux["especialidade"], $aux->especialidades, true)
                        ) {
                            array_push($aux->especialidades, $medico_aux["especialidade"]);
                            unset($medicos[$key_aux]);
                        }
                    }

                    array_push($response, clone $aux);
                }

                return $response;
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

                $sqlCreate = "INSERT INTO medico(nome,cpf,crm,senha) VALUES(?,?,?,?)";
                $conexao->exec('SET NAMES utf8');
                $stmtCreate = $conexao->prepare($sqlCreate);
                $stmtCreate->bindParam(1,$this->nome);
                $stmtCreate->bindParam(2,$this->cpf);
                $stmtCreate->bindParam(3,$this->crm);
                $stmtCreate->bindParam(4,$this->senha);
                $result = $stmtCreate->execute();

                if($result) {
                    http_response_code(200);
                } else {
                    http_response_code(400);
                    echo(json_encode(array('error' => "Ocorreu um erro ao cadastrar o registro, verifique os valores."), JSON_FORCE_OBJECT));
                }

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
                
                $sqlRead = "SELECT M.codMedico, M.nome, M.cpf, M.crm, E.nome AS especialidade, E.codEspecialidade 
                            FROM medico M 
                            INNER JOIN medico_especialidade ME 
                            ON  M.codMedico = ME.codMedico
                            INNER JOIN especialidade E 
                            ON ME.codEspecialidade = E.codEspecialidade 
                            WHERE M.codMedico = ?
                            ORDER BY  M.codMedico ASC";
                $conexao->exec('SET NAMES utf8');
                $stmtRead = $conexao->prepare($sqlRead);
                $stmtRead->bindParam(1,$this->codMedico);
                $stmtRead->execute();

                $linhas = $stmtRead->fetchALL(PDO::FETCH_ASSOC);

                if($linhas) {
                    $response->codMedico = $linhas[0]["codMedico"];
                    $response->nome = $linhas[0]["nome"];
                    $response->cpf = $linhas[0]["cpf"];
                    $response->crm = $linhas[0]["crm"];
                    
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
                echo "Erro: ".$e->getMessage();
            }
        }
        public function update(){

            try {

                include('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlUpdate = "UPDATE medico SET nome = ?, cpf = ?, crm = ? WHERE codMedico = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtUpdate = $conexao->prepare($sqlUpdate);
                $stmtUpdate->bindParam(1,$this->nome);
                $stmtUpdate->bindParam(2,$this->cpf);
                $stmtUpdate->bindParam(3,$this->crm);
                $stmtUpdate->bindParam(4,$this->codMedico);
                $result = $stmtUpdate->execute();

                if($result) {
                    http_response_code(200);
                } else {
                    http_response_code(400);
                    echo(json_encode(array('error' => "Ocorreu um erro ao atualizar o registro, verifique os valores."), JSON_FORCE_OBJECT));
                }

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
                $sqlDelete = "DELETE FROM medico WHERE codMedico = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtDelete = $conexao->prepare($sqlDelete);
                $stmtDelete->bindParam(1,$this->codMedico);
                echo($stmtDelete->execute());
            } catch (PDOExcpetion $e) {
                echo "Erro: ".$e->getMessage();
            }
        }
        

        public function handleLogin() {
            try {

                include('../../database.class.php');

                $db = new database();
                $db->setUsuario($this->dbUsuario);
                $db->setSenha($this->dbSenha);

                $conexao = $db->conecta_mysql();

                $sqlLogin = "SELECT codMedico, nome, cpf, crm FROM medico WHERE crm = ? AND senha = ?";
                $conexao->exec('SET NAMES utf8');
                $stmtLogin = $conexao->prepare($sqlLogin);
                $stmtLogin->bindParam(1, $this->crm);
                $stmtLogin->bindParam(2, $this->senha);
                $stmtLogin->execute();

                $medico = $stmtLogin->fetch(PDO::FETCH_ASSOC);

                if($medico!=0)
                    echo json_encode($medico);
                else
                    echo json_encode(false);

            } catch (PDOException $e) {
                echo "Erro: ".$e->getMessage();
            }
        }
    }
?>
