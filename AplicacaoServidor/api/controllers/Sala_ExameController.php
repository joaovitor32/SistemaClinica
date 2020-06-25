<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    header("Content-type: application/json");

    include_once("../../models/Sala_Exame.php");

    function executarAcao($acao, $requestHeaders, $requestBody){
        switch($acao) {
            case "INDEX":
                $sala_exame = new SalaExame();
                $sala_exame->setDBUsuario($requestHeaders["db_user"]);
                $sala_exame->setDBSenha($requestHeaders["db_password"]);
                return  $sala_exame->listaJSON();
                break;
            case "CREATE":
                $sala_exame = new SalaExame();
                $sala_exame->setDBUsuario($requestHeaders["db_user"]);
                $sala_exame->setDBSenha($requestHeaders["db_password"]);
                $sala_exame->setCodSala($requestBody["sala"]);
                $sala_exame->setCodExame($requestBody["exames"]);
                $sala_exame->create();
                return;

            case "READ":
                $sala_exame = new SalaExame();
                $sala_exame->setDBUsuario($requestHeaders["db_user"]);
                $sala_exame->setDBSenha($requestHeaders["db_password"]);
                $sala_exame->setCodSala($requestHeaders["_id"]);
                $sala_exame->read();
                return;

            case "DELETE":
                $sala_exame = new SalaExame();
                $sala_exame->setDBUsuario($requestHeaders["db_user"]);
                $sala_exame->setDBSenha($requestHeaders["db_password"]);
                $sala_exame->setCodSala($requestBody["sala"]);
                $sala_exame->setCodExame($requestBody["exame"]);
                $sala_exame->delete();
                return;
            
            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>