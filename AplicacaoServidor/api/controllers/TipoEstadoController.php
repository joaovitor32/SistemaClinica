<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    header("Content-type: application/json");

    include_once("../../models/TipoEstado.php");

    function executarAcao($acao, $requestHeaders, $requestBody){
        switch($acao) {
            case "INDEX":
                $tipo_estado = new TipoEstado();
                $tipo_estado->setDBUsuario($requestHeaders["db_user"]);
                $tipo_estado->setDBSenha($requestHeaders["db_password"]);
                return  $tipo_estado->listaJSON();; 
                break;
            case "CREATE":
                $tipo_estado = new TipoEstado();
                $tipo_estado->setDBUsuario($requestHeaders["db_user"]);
                $tipo_estado->setDBSenha($requestHeaders["db_password"]);
                $tipo_estado->setNome($requestBody["nome"]);
                $tipo_estado->setDescricao($requestBody["descricao"]);
                $tipo_estado->create();
                return;

            case "READ":
                $tipo_estado = new TipoEstado();
                $tipo_estado->setDBUsuario($requestHeaders["db_user"]);
                $tipo_estado->setDBSenha($requestHeaders["db_password"]);
                $tipo_estado->setCodTipo($requestHeaders["_id"]);
                $tipo_estado->read();
                return;

            case "UPDATE":
                $tipo_estado = new TipoEstado();
                $tipo_estado->setDBUsuario($requestHeaders["db_user"]);
                $tipo_estado->setDBSenha($requestHeaders["db_password"]);
                $tipo_estado->setCodTipo($requestBody["_id"]);
                $tipo_estado->setNome($requestBody["nome"]);
                $tipo_estado->setDescricao($requestBody["descricao"]);
                $tipo_estado->update();
                return;

            case "DELETE":
                $tipo_estado = new TipoEstado();
                $tipo_estado->setDBUsuario($requestHeaders["db_user"]);
                $tipo_estado->setDBSenha($requestHeaders["db_password"]);
                $tipo_estado->setCodTipo($requestBody["_id"]);
                $tipo_estado->delete();
                return;
            
            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>