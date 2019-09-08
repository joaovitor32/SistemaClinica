<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    header("Content-type: application/json");

    include_once("../../models/Exame.php");

    function executarAcao($acao, $requestHeaders, $requestBody){
        switch($acao) {
            case "INDEX":
                $exame = new Exame();
                $exame->setDBUsuario($requestHeaders["DB_user"]);
                $exame->setDBSenha($requestHeaders["DB_password"]);
                $exame->listaJSON();
                return;

            case "CREATE":
                $exame = new Exame();
                $exame->setDBUsuario($requestHeaders["DB_user"]);
                $exame->setDBSenha($requestHeaders["DB_password"]);
                $exame->setNome($requestBody["nome"]);
                $exame->setDescricao($requestBody["descricao"]);
                $exame->setPreco($requestBody["preco"]);
                $exame->setCodigo($requestBody["codigo"]);
                $exame->create();
                return;

            case "READ":
                $exame = new Exame();
                $exame->setDBUsuario($requestHeaders["DB_user"]);
                $exame->setDBSenha($requestHeaders["DB_password"]);
                $exame->setCodExame($requestHeaders["_id"]);
                $exame->read();
                return;

            case "UPDATE":
                $exame = new Exame();
                $exame->setDBUsuario($requestHeaders["DB_user"]);
                $exame->setDBSenha($requestHeaders["DB_password"]);
                $exame->setCodExame($requestBody["_id"]);
                $exame->setNome($requestBody["nome"]);
                $exame->setDescricao($requestBody["descricao"]);
                $exame->setPreco($requestBody["preco"]);
                $exame->setCodigo($requestBody["codigo"]);
                $exame->update();
                return;

            case "DELETE":
                $exame = new Exame();
                $exame->setDBUsuario($requestHeaders["DB_user"]);
                $exame->setDBSenha($requestHeaders["DB_password"]);
                $exame->setCodExame($requestBody["_id"]);
                $exame->delete();
                return;
            
            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>