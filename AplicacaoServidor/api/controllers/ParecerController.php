<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    header("Content-type: application/json");

    include_once("../../models/Parecer.php");

    function executarAcao($acao, $requestHeaders, $requestBody){
        switch($acao) {
            case "INDEX":
                $parecer = new Parecer();
                $parecer->setDBUsuario($requestHeaders["db_user"]);
                $parecer->setDBSenha($requestHeaders["db_password"]);
                return  $parecer->listaJSON();; 
                break;
            case "CREATE":
                $parecer = new Parecer();
                $parecer->setDBUsuario($requestHeaders["db_user"]);
                $parecer->setDBSenha($requestHeaders["db_password"]);
                $parecer->setNome($requestBody["nome"]);
                $parecer->setDescricao($requestBody["descricao"]);
                $parecer->create();
                return;

            case "READ":
                $parecer = new Parecer();
                $parecer->setDBUsuario($requestHeaders["db_user"]);
                $parecer->setDBSenha($requestHeaders["db_password"]);
                $parecer->setCodParecer($requestHeaders["_id"]);
                $parecer->read();
                return;

            case "UPDATE":
                $parecer = new Parecer();
                $parecer->setDBUsuario($requestHeaders["db_user"]);
                $parecer->setDBSenha($requestHeaders["db_password"]);
                $parecer->setCodParecer($requestBody["_id"]);
                $parecer->setNome($requestBody["nome"]);
                $parecer->setDescricao($requestBody["descricao"]);
                $parecer->update();
                return;

            case "DELETE":
                $parecer = new Parecer();
                $parecer->setDBUsuario($requestHeaders["db_user"]);
                $parecer->setDBSenha($requestHeaders["db_password"]);
                $parecer->setCodParecer($requestBody["_id"]);
                $parecer->delete();
                return;
            
            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>