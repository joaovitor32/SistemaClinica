<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    header("Content-type: application/json");

    include_once("../../models/TipoConsulta.php");

    function executarAcao($acao, $requestHeaders, $requestBody){
        switch($acao) {
            case "INDEX":
                $tipo_consulta = new TipoConsulta();
                $tipo_consulta->setDBUsuario($requestHeaders["db_user"]);
                $tipo_consulta->setDBSenha($requestHeaders["db_password"]);
                return  $tipo_consulta->listaJSON();; 
                break;
            case "CREATE":
                $tipo_consulta = new TipoConsulta();
                $tipo_consulta->setDBUsuario($requestHeaders["db_user"]);
                $tipo_consulta->setDBSenha($requestHeaders["db_password"]);
                $tipo_consulta->setNome($requestBody["nome"]);
                $tipo_consulta->create();
                return;

            case "READ":
                $tipo_consulta = new TipoConsulta();
                $tipo_consulta->setDBUsuario($requestHeaders["db_user"]);
                $tipo_consulta->setDBSenha($requestHeaders["db_password"]);
                $tipo_consulta->setCodTipoConsulta($requestHeaders["_id"]);
                $tipo_consulta->read();
                return;

            case "UPDATE":
                $tipo_consulta = new TipoConsulta();
                $tipo_consulta->setDBUsuario($requestHeaders["db_user"]);
                $tipo_consulta->setDBSenha($requestHeaders["db_password"]);
                $tipo_consulta->setCodTipoConsulta($requestBody["_id"]);
                $tipo_consulta->setNome($requestBody["nome"]);
                $tipo_consulta->update();
                return;

            case "DELETE":
                $tipo_consulta = new TipoConsulta();
                $tipo_consulta->setDBUsuario($requestHeaders["db_user"]);
                $tipo_consulta->setDBSenha($requestHeaders["db_password"]);
                $tipo_consulta->setCodTipoConsulta($requestBody["_id"]);
                $tipo_consulta->delete();
                return;
            
            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>