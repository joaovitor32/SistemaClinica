<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    header("Content-type: application/json");

    include_once("../../models/Risco.php");

    function executarAcao($acao, $requestHeaders, $requestBody){
        switch($acao) {
            case "INDEX":
                $risco = new Risco();
                $risco->setDBUsuario($requestHeaders["db_user"]);
                $risco->setDBSenha($requestHeaders["db_password"]);
                return  $risco->listaJSON();; 
                break;
            case "CREATE":
                $risco = new Risco();
                $risco->setDBUsuario($requestHeaders["db_user"]);
                $risco->setDBSenha($requestHeaders["db_password"]);
                $risco->setNome($requestBody["nome"]);
                $risco->setDescricao($requestBody["descricao"]);
                $risco->setCodCategoriaRisco($requestBody["categoria"]);
                $risco->create();
                return;

            case "READ":
                $risco = new Risco();
                $risco->setDBUsuario($requestHeaders["db_user"]);
                $risco->setDBSenha($requestHeaders["db_password"]);
                $risco->setCodRisco($requestHeaders["_id"]);
                $risco->read();
                return;

            case "UPDATE":
                $risco = new Risco();
                $risco->setDBUsuario($requestHeaders["db_user"]);
                $risco->setDBSenha($requestHeaders["db_password"]);
                $risco->setCodRisco($requestBody["_id"]);
                $risco->setNome($requestBody["nome"]);
                $risco->setDescricao($requestBody["descricao"]);
                $risco->setCodCategoriaRisco($requestBody["categoria"]);
                $risco->update();
                return;

            case "DELETE":
                $risco = new Risco();
                $risco->setDBUsuario($requestHeaders["db_user"]);
                $risco->setDBSenha($requestHeaders["db_password"]);
                $risco->setCodRisco($requestBody["_id"]);
                $risco->delete();
                return;
            
            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>