<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    header("Content-type: application/json");

    include_once("../../models/Categoria_Risco.php");

    function executarAcao($acao, $requestHeaders, $requestBody){
        switch($acao) {
            case "INDEX":
                $categoria = new CategoriaRisco();
                $categoria->setDBUsuario($requestHeaders["db_user"]);
                $categoria->setDBSenha($requestHeaders["db_password"]);
                return  $categoria->listaJSON();
                break;
            case "CREATE":
                $categoria = new CategoriaRisco();
                $categoria->setDBUsuario($requestHeaders["db_user"]);
                $categoria->setDBSenha($requestHeaders["db_password"]);
                $categoria->setNome($requestBody["nome"]);
                $categoria->setDescricao($requestBody["descricao"]);
                $categoria->create();
                return;

            case "READ":
                $categoria = new CategoriaRisco();
                $categoria->setDBUsuario($requestHeaders["db_user"]);
                $categoria->setDBSenha($requestHeaders["db_password"]);
                $categoria->setCodCategoriaRisco($requestHeaders["_id"]);
                $categoria->read();
                return;

            case "UPDATE":
                $categoria = new CategoriaRisco();
                $categoria->setDBUsuario($requestHeaders["db_user"]);
                $categoria->setDBSenha($requestHeaders["db_password"]);
                $categoria->setCodCategoriaRisco($requestBody["_id"]);
                $categoria->setNome($requestBody["nome"]);
                $categoria->setDescricao($requestBody["descricao"]);
                $categoria->update();
                return;

            case "DELETE":
                $categoria = new CategoriaRisco();
                $categoria->setDBUsuario($requestHeaders["db_user"]);
                $categoria->setDBSenha($requestHeaders["db_password"]);
                $categoria->setCodCategoriaRisco($requestBody["_id"]);
                $categoria->delete();
                return;
            
            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>