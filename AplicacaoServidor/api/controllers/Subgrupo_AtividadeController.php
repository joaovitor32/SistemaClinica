<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    header("Content-type: application/json");

    include_once("../../models/Subgrupo_Atividade.php");

    function executarAcao($acao, $requestHeaders, $requestBody){
        switch($acao) {
            case "INDEX":
                $subgrupo_atividade = new SubgrupoAtividade();
                $subgrupo_atividade->setDBUsuario($requestHeaders["db_user"]);
                $subgrupo_atividade->setDBSenha($requestHeaders["db_password"]);
                return  $subgrupo_atividade->listaJSON();; 
                break;
            case "CREATE":
                $subgrupo_atividade = new SubgrupoAtividade();
                $subgrupo_atividade->setDBUsuario($requestHeaders["db_user"]);
                $subgrupo_atividade->setDBSenha($requestHeaders["db_password"]);
                $subgrupo_atividade->setCodSubgrupo($requestBody["subgrupo"]);
                $subgrupo_atividade->setCodAtividade($requestBody["atividades"]);
                $subgrupo_atividade->create();
                return;

            case "READ":
                $subgrupo_atividade = new SubgrupoAtividade();
                $subgrupo_atividade->setDBUsuario($requestHeaders["db_user"]);
                $subgrupo_atividade->setDBSenha($requestHeaders["db_password"]);
                $subgrupo_atividade->setCodSubgrupo($requestHeaders["_id"]);
                $subgrupo_atividade->read();
                return;

            case "DELETE":
                $subgrupo_atividade = new SubgrupoAtividade();
                $subgrupo_atividade->setDBUsuario($requestHeaders["db_user"]);
                $subgrupo_atividade->setDBSenha($requestHeaders["db_password"]);
                $subgrupo_atividade->setCodAtividade($requestBody["atividade"]);
                $subgrupo_atividade->setCodSubgrupo($requestBody["subgrupo"]);
                $subgrupo_atividade->delete();
                return;
            
            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>