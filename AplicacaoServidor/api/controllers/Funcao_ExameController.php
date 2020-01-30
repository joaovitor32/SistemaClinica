<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    header("Content-type: application/json");

    include_once("../../models/Funcao_Exame.php");

    function executarAcao($acao, $requestHeaders, $requestBody){
        switch($acao) {
            case "INDEX":
                $funcao_exame = new FuncaoExame();
                $funcao_exame->setDBUsuario($requestHeaders["db_user"]);
                $funcao_exame->setDBSenha($requestHeaders["db_password"]);
                return  $funcao_exame->listaJSON();; 
                break;
            case "CREATE":
                $funcao_exame = new FuncaoExame();
                $funcao_exame->setDBUsuario($requestHeaders["db_user"]);
                $funcao_exame->setDBSenha($requestHeaders["db_password"]);
                $funcao_exame->setCodFuncao($requestBody["funcao"]);
                $funcao_exame->setCodExame($requestBody["exames"]);
                $funcao_exame->create();
                return;

            case "READ":
                $funcao_exame = new FuncaoExame();
                $funcao_exame->setDBUsuario($requestHeaders["db_user"]);
                $funcao_exame->setDBSenha($requestHeaders["db_password"]);
                $funcao_exame->setCodFuncao($requestBody["_id"]);
                $funcao_exame->read();
                return;

            case "DELETE":
                $funcao_exame = new FuncaoExame();
                $funcao_exame->setDBUsuario($requestHeaders["db_user"]);
                $funcao_exame->setDBSenha($requestHeaders["db_password"]);
                $funcao_exame->setCodFuncao($requestBody["funcao"]);
                $funcao_exame->setCodExame($requestBody["exame"]);
                $funcao_exame->delete();
                return;
            
            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>