<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    header("Content-type: application/json");

    include_once("../../models/FuncaoExame.php");

    function executarAcao($acao, $requestHeaders, $requestBody){
        switch($acao) {
           case "READ":
                $FuncaoExame = new FuncaoExame();
                $FuncaoExame->setDBUsuario($requestHeaders["db_user"]);
                $FuncaoExame->setDBSenha($requestHeaders["db_password"]);
                $FuncaoExame->setCodFuncao($requestBody["_id"]);
                return $FuncaoExame->listaJSON();
            
            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>
