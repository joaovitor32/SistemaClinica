<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    header("Content-type: application/json");

    include_once("../../models/Especialidade.php");

    function executarAcao($acao, $requestHeaders, $requestBody){
        switch($acao) {
            case "INDEX":
                $especialidade = new Especialidade();
                $especialidade->setDBUsuario($requestHeaders["db_user"]);
                $especialidade->setDBSenha($requestHeaders["db_password"]);
                $especialidade->listaJSON();
                return;

            case "CREATE":
                $especialidade = new Especialidade();
                $especialidade->setDBUsuario($requestHeaders["db_user"]);
                $especialidade->setDBSenha($requestHeaders["db_password"]);
                $especialidade->setNome($requestBody["nome"]);
                $especialidade->setDescricao($requestBody["descricao"]);
                $especialidade->create();
                return;

            case "READ":
                $especialidade = new Especialidade();
                $especialidade->setDBUsuario($requestHeaders["db_user"]);
                $especialidade->setDBSenha($requestHeaders["db_password"]);
                $especialidade->setCodEspecialidade($requestHeaders["_id"]);
                $especialidade->read();
                return;

            case "UPDATE":
                $especialidade = new Especialidade();
                $especialidade->setDBUsuario($requestHeaders["db_user"]);
                $especialidade->setDBSenha($requestHeaders["db_password"]);
                $especialidade->setCodEspecialidade($requestBody["_id"]);
                $especialidade->setNome($requestBody["nome"]);
                $especialidade->setDescricao($requestBody["descricao"]);
                $especialidade->update();
                return;

            case "DELETE":
                $especialidade = new Especialidade();
                $especialidade->setDBUsuario($requestHeaders["db_user"]);
                $especialidade->setDBSenha($requestHeaders["db_password"]);
                $especialidade->setCodEspecialidade($requestBody["_id"]);
                $especialidade->delete();
                return;
            
            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>