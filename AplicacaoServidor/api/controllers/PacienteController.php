<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    header("Content-type: application/json");

    include_once("../../models/Paciente.php");

    function executarAcao($acao, $requestHeaders, $requestBody){
        switch($acao) {
            case "INDEX":
                $paciente = new Paciente();
                $paciente->setDBUsuario($requestHeaders["db_user"]);
                $paciente->setDBSenha($requestHeaders["db_password"]);
                $paciente->listaJSON();
                return;
                break;
            case "CREATE":
                $paciente = new Paciente();
                $paciente->setDBUsuario($requestHeaders["db_user"]);
                $paciente->setDBSenha($requestHeaders["db_password"]);
                $paciente->setNome($requestBody["nome"]);
                $paciente->setCPF($requestBody["cpf"]);
                $paciente->setRG($requestBody["rg"]);
                $paciente->setSexo($requestBody["sexo"]);
                $paciente->setNascimento($requestBody["nascimento"]);
                $paciente->create();
                return;

            case "READ":
                $paciente = new Paciente();
                $paciente->setDBUsuario($requestHeaders["db_user"]);
                $paciente->setDBSenha($requestHeaders["db_password"]);
                $paciente->setCodPaciente($requestHeaders["_id"]);
                $paciente->read();
                return;

            case "UPDATE":
                $paciente = new Paciente();
                $paciente->setDBUsuario($requestHeaders["db_user"]);
                $paciente->setDBSenha($requestHeaders["db_password"]);
                $paciente->setCodPaciente($requestBody["_id"]);
                $paciente->setNome($requestBody["nome"]);
                $paciente->setCPF($requestBody["cpf"]);
                $paciente->setRG($requestBody["rg"]);
                $paciente->setSexo($requestBody["sexo"]);
                $paciente->setNascimento($requestBody["nascimento"]);
                $paciente->update();
                return;

            case "DELETE":
                $paciente = new Paciente();
                $paciente->setDBUsuario($requestHeaders["db_user"]);
                $paciente->setDBSenha($requestHeaders["db_password"]);
                $paciente->setCodPaciente($requestBody["_id"]);
                $paciente->delete();
                return;
            
            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>