<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    header("Content-type: application/json");

    include_once("../../models/Funcao.php");

    function executarAcao($acao, $requestHeaders, $requestBody){
        switch($acao) {
            case "INDEX":
                $funcao = new Funcao();
                $funcao->setDBUsuario($requestHeaders["db_user"]);
                $funcao->setDBSenha($requestHeaders["db_password"]);
                $funcao->listaJSON();
                return;
                break;
            case "CREATE":
                $funcao = new Funcao();
                $funcao->setDBUsuario($requestHeaders["DB_user"]);
                $funcao->setDBSenha($requestHeaders["DB_password"]);
                $funcao->setNome($requestBody["nome"]);
                $funcao->setDescricao($requestBody["descricao"]);
                $funcao->setSetor($requestBody["setor"]);
                $funcao->create();
                return;

            case "READ":
                $funcao = new Funcao();
                $funcao->setDBUsuario($requestHeaders["DB_user"]);
                $funcao->setDBSenha($requestHeaders["DB_password"]);
                $funcao->setCodFuncao($requestHeaders["_id"]);
                $funcao->read();
                return;

            case "UPDATE":
                $funcao = new Funcao();
                $funcao->setDBUsuario($requestHeaders["DB_user"]);
                $funcao->setDBSenha($requestHeaders["DB_password"]);
                $funcao->setCodFuncao($requestBody["_id"]);
                $funcao->setNome($requestBody["nome"]);
                $funcao->setDescricao($requestBody["descricao"]);
                $funcao->setSetor($requestBody["setor"]);
                $funcao->update();
                return;

            case "DELETE":
                $funcao = new Funcao();
                $funcao->setDBUsuario($requestHeaders["DB_user"]);
                $funcao->setDBSenha($requestHeaders["DB_password"]);
                $funcao->setCodFuncao($requestBody["_id"]);
                $funcao->delete();
                return;
            
            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>