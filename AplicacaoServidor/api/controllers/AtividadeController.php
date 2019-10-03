<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    header("Content-type: application/json");

    include_once("../../models/Atividade.php");

    function executarAcao($acao, $requestHeaders, $requestBody){
        switch($acao) {
            case "INDEX":
                $atividade = new Atividade();
                $atividade->setDBUsuario($requestHeaders["db_user"]);
                $atividade->setDBSenha($requestHeaders["db_password"]);
                return  $atividade->listaJSON();; 
                break;
            case "CREATE":
                $atividade = new Atividade();
                $atividade->setDBUsuario($requestHeaders["DB_user"]);
                $atividade->setDBSenha($requestHeaders["DB_password"]);
                $atividade->setNome($requestBody["nome"]);
                $atividade->setDescricao($requestBody["descricao"]);
                $atividade->create();
                return;

            case "READ":
                $atividade = new Atividade();
                $atividade->setDBUsuario($requestHeaders["DB_user"]);
                $atividade->setDBSenha($requestHeaders["DB_password"]);
                $atividade->setCodAtividade($requestHeaders["_id"]);
                $atividade->read();
                return;

            case "UPDATE":
                $atividade = new Atividade();
                $atividade->setDBUsuario($requestHeaders["DB_user"]);
                $atividade->setDBSenha($requestHeaders["DB_password"]);
                $atividade->setCodAtividade($requestBody["_id"]);
                $atividade->setNome($requestBody["nome"]);
                $atividade->setDescricao($requestBody["descricao"]);
                $atividade->update();
                return;

            case "DELETE":
                $atividade = new Atividade();
                $atividade->setDBUsuario($requestHeaders["DB_user"]);
                $atividade->setDBSenha($requestHeaders["DB_password"]);
                $atividade->setCodAtividade($requestBody["_id"]);
                $atividade->delete();
                return;
            
            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>