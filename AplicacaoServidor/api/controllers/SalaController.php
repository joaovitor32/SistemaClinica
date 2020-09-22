<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    header("Content-type: application/json");

    include_once("../../models/Sala.php");

    function executarAcao($acao, $requestHeaders, $requestBody){
        switch($acao) {
            case "INDEX":
                $sala = new Sala();
                $sala->setDBUsuario($requestHeaders["db_user"]);
                $sala->setDBSenha($requestHeaders["db_password"]);
                return  $sala->listaJSON(); 
                break;
            case "CREATE":
                $sala = new Sala();
                $sala->setDBUsuario($requestHeaders["db_user"]);
                $sala->setDBSenha($requestHeaders["db_password"]);
                $sala->setNome($requestBody["nome"]);
                $sala->setDescricao($requestBody["descricao"]);
                $sala->create();
                return;

            case "READ":
                $sala = new Sala();
                $sala->setDBUsuario($requestHeaders["db_user"]);
                $sala->setDBSenha($requestHeaders["db_password"]);
                $sala->setCodSala($requestHeaders["_id"]);
                $sala->read();
                return;

            case "UPDATE":
                $sala = new Sala();
                $sala->setDBUsuario($requestHeaders["db_user"]);
                $sala->setDBSenha($requestHeaders["db_password"]);
                $sala->setCodSala($requestBody["_id"]);
                $sala->setNome($requestBody["nome"]);
                $sala->setDescricao($requestBody["descricao"]);
                $sala->update();
                return;

            case "DELETE":
                $sala = new Sala();
                $sala->setDBUsuario($requestHeaders["db_user"]);
                $sala->setDBSenha($requestHeaders["db_password"]);
                $sala->setCodSala($requestBody["_id"]);
                $sala->delete();
                return;
            
            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>