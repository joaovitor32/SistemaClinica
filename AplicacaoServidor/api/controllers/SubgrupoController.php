<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    header("Content-type: application/json");

    include_once("../../models/Subgrupo.php");

    function executarAcao($acao, $requestHeaders, $requestBody){
        switch($acao) {
            case "INDEX":
                $subgrupo = new Subgrupo();
                $subgrupo->setDBUsuario($requestHeaders["DB_user"]);
                $subgrupo->setDBSenha($requestHeaders["DB_password"]);
                $subgrupo->listaJSON();
                return;

            case "CREATE":
                $subgrupo = new Subgrupo();
                $subgrupo->setDBUsuario($requestHeaders["DB_user"]);
                $subgrupo->setDBSenha($requestHeaders["DB_password"]);
                $subgrupo->setNome($requestBody["nome"]);
                $subgrupo->setCodFuncao($requestBody["codFuncao"]);
                $subgrupo->create();
                return;

            case "READ":
                $subgrupo = new Subgrupo();
                $subgrupo->setDBUsuario($requestHeaders["DB_user"]);
                $subgrupo->setDBSenha($requestHeaders["DB_password"]);
                $subgrupo->setCodSubgrupo($requestHeaders["_id"]);
                $subgrupo->read();
                return;

            case "UPDATE":
                $subgrupo = new Subgrupo();
                $subgrupo->setDBUsuario($requestHeaders["DB_user"]);
                $subgrupo->setDBSenha($requestHeaders["DB_password"]);
                $subgrupo->setCodSubgrupo($requestBody["_id"]);
                $subgrupo->setNome($requestBody["nome"]);
                $subgrupo->setCodFuncao($requestBody["codFuncao"]);
                $subgrupo->update();
                return;

            case "DELETE":
                $subgrupo = new Subgrupo();
                $subgrupo->setDBUsuario($requestHeaders["DB_user"]);
                $subgrupo->setDBSenha($requestHeaders["DB_password"]);
                $subgrupo->setCodSubgrupo($requestBody["_id"]);
                $subgrupo->delete();
                return;
            
            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>