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
                $medico->setDBUsuario($requestHeaders["db_user"]);
                $medico->setDBSenha($requestHeaders["db_password"]);
                $medico->listaJSON();
                return;
                break;
            case "CREATE":
                $medico = new Medico();
                $medico->setDBUsuario($requestHeaders["db_user"]);
                $medico->setDBSenha($requestHeaders["db_password"]);
                $medico->setNome($requestBody["nome"]);
                $medico->setCPF($requestBody["cpf"]);
                $medico->setCRM($requestBody["crm"]);
                $medico->setSenha($requestBody["senha"]);
                $medico->create();
                return;

            case "READ":
                $medico = new Medico();
                $medico->setDBUsuario($requestHeaders["db_user"]);
                $medico->setDBSenha($requestHeaders["db_password"]);
                $medico->setCodMedico($requestHeaders["_id"]);
                $medico->read();
                return;

            case "UPDATE":
                $medico = new Medico();
                $medico->setDBUsuario($requestHeaders["db_user"]);
                $medico->setDBSenha($requestHeaders["db_password"]);
                $medico->setCodMedico($requestBody["_id"]);
                $medico->setNome($requestBody["nome"]);
                $medico->setCPF($requestBody["cpf"]);
                $medico->setCRM($requestBody["crm"]);
                $medico->update();
                return;

            case "DELETE":
                $medico = new Medico();
				$medico->setDBUsuario($requestHeaders["db_user"]);
                $medico->setDBSenha($requestHeaders["db_password"]);
                $medico->setCodMedico($requestBody["_id"]);
                $medico->delete();
                return;
            
            case "LOGIN":
                $medico = new Medico();
                $medico->setDBUsuario($requestHeaders["db_user"]);
                $medico->setDBSenha($requestHeaders["db_password"]);
                $medico->setCRM($requestBody["crm"]);
                $medico->setSenha($requestBody["senha"]);
                $medico->handleLogin();
                return;

            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>
