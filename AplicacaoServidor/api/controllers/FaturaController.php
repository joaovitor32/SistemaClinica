<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    header("Content-type: application/json");

    include_once("../../models/Fatura.php");

    function executarAcao($acao, $requestHeaders, $requestBody){
        switch($acao) {
            case "INDEX":
                $fatura = new Fatura();
                $fatura->setDBUsuario($requestHeaders["db_user"]);
                $fatura->setDBSenha($requestHeaders["db_password"]);
                return  $fatura->listaJSON(); 
                break;
            case "CREATE":
                $fatura = new Fatura();
                $fatura->setDBUsuario($requestHeaders["db_user"]);
                $fatura->setDBSenha($requestHeaders["db_password"]);
                $fatura->setCodEmpresa($requestBody["empresa"]);
                $fatura->setDescricao($requestBody["descricao"]);
                $fatura->create();
                return;

            case "READ":
                $fatura = new Fatura();
                $fatura->setDBUsuario($requestHeaders["db_user"]);
                $fatura->setDBSenha($requestHeaders["db_password"]);
                $fatura->setCodFatura($requestHeaders["_id"]);
                $fatura->read();
                return;

            case "UPDATE":
                $fatura = new Fatura();
                $fatura->setDBUsuario($requestHeaders["db_user"]);
                $fatura->setDBSenha($requestHeaders["db_password"]);
                $fatura->setCodFatura($requestBody["_id"]);
                $fatura->setStatus($requestBody["status"]);
                $fatura->setDescricao($requestBody["descricao"]);
                $fatura->update();
                return;
            
            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>