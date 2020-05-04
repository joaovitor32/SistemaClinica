<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    header("Content-type: application/json");

    include_once("../../models/Risco_Exame.php");

    function executarAcao($acao, $requestHeaders, $requestBody){
        switch($acao) {
            case "INDEX":
                $risco_exame = new RiscoExame();
                $risco_exame->setDBUsuario($requestHeaders["db_user"]);
                $risco_exame->setDBSenha($requestHeaders["db_password"]);
                return  $risco_exame->lista(); 
                break;
            case "CREATE":
                $risco_exame = new RiscoExame();
                $risco_exame->setDBUsuario($requestHeaders["db_user"]);
                $risco_exame->setDBSenha($requestHeaders["db_password"]);
                $risco_exame->setCodRisco($requestBody["risco"]);
                $risco_exame->setCodExame($requestBody["exames"]);
                $risco_exame->create();
                return;

            case "READ":
                $risco_exame = new RiscoExame();
                $risco_exame->setDBUsuario($requestHeaders["db_user"]);
                $risco_exame->setDBSenha($requestHeaders["db_password"]);
                $risco_exame->setCodRisco($requestHeaders["_id"]);
                $risco_exame->read();
                return;

            case "DELETE":
                $risco_exame = new RiscoExame();
                $risco_exame->setDBUsuario($requestHeaders["db_user"]);
                $risco_exame->setDBSenha($requestHeaders["db_password"]);
                $risco_exame->setCodRisco($requestBody["risco"]);
                $risco_exame->setCodExame($requestBody["exame"]);
                $risco_exame->delete();
                return;
            
            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>
