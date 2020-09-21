<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    header("Content-type: application/json");

    include_once("../../models/Consulta_Parecer.php");

    function executarAcao($acao, $requestHeaders, $requestBody){
        switch($acao) {
            case "INDEX":
                $consulta_parecer = new ConsultaParecer();
                $consulta_parecer->setDBUsuario($requestHeaders["db_user"]);
                $consulta_parecer->setDBSenha($requestHeaders["db_password"]);
                return  $consulta_parecer->listaJSON();; 
                break;
            case "CREATE":
                $consulta_parecer = new ConsultaParecer();
                $consulta_parecer->setDBUsuario($requestHeaders["db_user"]);
                $consulta_parecer->setDBSenha($requestHeaders["db_password"]);
                $consulta_parecer->setCodConsulta($requestBody["consulta"]);
                $consulta_parecer->setCodParecer($requestBody["pareceres"]);
                $consulta_parecer->create();
                return;

            case "READ":
                $consulta_parecer = new ConsultaParecer();
                $consulta_parecer->setDBUsuario($requestHeaders["db_user"]);
                $consulta_parecer->setDBSenha($requestHeaders["db_password"]);
                $consulta_parecer->setCodConsulta($requestHeaders["_id"]);
                $consulta_parecer->read();
                return;

            case "DELETE":
                $consulta_parecer = new ConsultaParecer();
                $consulta_parecer->setDBUsuario($requestHeaders["db_user"]);
                $consulta_parecer->setDBSenha($requestHeaders["db_password"]);
                $consulta_parecer->setCodConsulta($requestBody["consulta"]);
                $consulta_parecer->setCodParecer($requestBody["parecer"]);
                $consulta_parecer->delete();
                return;
            
            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>