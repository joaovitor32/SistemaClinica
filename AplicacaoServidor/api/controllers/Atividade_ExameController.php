<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    header("Content-type: application/json");

    include_once("../../models/Atividade_Exame.php");

    function executarAcao($acao, $requestHeaders, $requestBody){
        switch($acao) {
            case "INDEX":
                $atividade_exame = new AtividadeExame();
                $atividade_exame->setDBUsuario($requestHeaders["db_user"]);
                $atividade_exame->setDBSenha($requestHeaders["db_password"]);
                return  $atividade_exame->listaJSON();; 
                break;
            case "CREATE":
                $atividade_exame = new AtividadeExame();
                $atividade_exame->setDBUsuario($requestHeaders["db_user"]);
                $atividade_exame->setDBSenha($requestHeaders["db_password"]);
                $atividade_exame->setCodAtividade($requestBody["atividade"]);
                $atividade_exame->setCodExame($requestBody["exames"]);
                $atividade_exame->create();
                return;

            case "READ":
                $atividade_exame = new AtividadeExame();
                $atividade_exame->setDBUsuario($requestHeaders["db_user"]);
                $atividade_exame->setDBSenha($requestHeaders["db_password"]);
                $atividade_exame->setCodAtividade($requestHeaders["_id"]);
                $atividade_exame->read();
                return;

            case "DELETE":
                $atividade_exame = new AtividadeExame();
                $atividade_exame->setDBUsuario($requestHeaders["db_user"]);
                $atividade_exame->setDBSenha($requestHeaders["db_password"]);
                $atividade_exame->setCodAtividade($requestBody["atividade"]);
                $atividade_exame->setCodExame($requestBody["exame"]);
                $atividade_exame->delete();
                return;
            
            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>