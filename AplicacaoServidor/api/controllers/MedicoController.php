<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    header("Content-type: application/json");

    include_once("../../models/Medico.php");

    function executarAcao($acao, $requestHeaders, $requestBody){
        switch($acao) {
            case "INDEX":
                $medico = new Medico();
                $medico->setDBUsuario($requestHeaders["DB_user"]);
                $medico->setDBSenha($requestHeaders["DB_password"]);
                $medico->listaJSON();
                return;

            case "CREATE":
                $medico = new Medico();
                $medico->setDBUsuario($requestHeaders["DB_user"]);
                $medico->setDBSenha($requestHeaders["DB_password"]);
                $medico->setNome($requestBody["nome"]);
                $medico->setCPF($requestBody["cpf"]);
                $medico->setCRM($requestBody["crm"]);
                $medico->create();
                return;

            case "READ":
                $medico = new Medico();
                $medico->setDBUsuario($requestHeaders["DB_user"]);
                $medico->setDBSenha($requestHeaders["DB_password"]);
                $medico->setCodMedico($requestHeaders["_id"]);
                $medico->read();
                return;

            case "UPDATE":
                $medico = new Medico();
                $medico->setDBUsuario($requestHeaders["DB_user"]);
                $medico->setDBSenha($requestHeaders["DB_password"]);
                $medico->setCodMedico($requestBody["_id"]);
                $medico->setNome($requestBody["nome"]);
                $medico->setCPF($requestBody["cpf"]);
                $medico->setCRM($requestBody["crm"]);
                $medico->update();
                return;

            case "DELETE":
                $medico = new Medico();
                $medico->setDBUsuario($requestHeaders["DB_user"]);
                $medico->setDBSenha($requestHeaders["DB_password"]);
                $medico->setCodMedico($requestBody["_id"]);
                $medico->delete();
                return;
            
            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>