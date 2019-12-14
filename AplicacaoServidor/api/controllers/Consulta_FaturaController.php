<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    header("Content-type: application/json");

    include_once("../../models/Consulta_Fatura.php");

    function executarAcao($acao, $requestHeaders, $requestBody){
        switch($acao) {
            case "CREATE":
                $consulta_fatura = new ConsultaFatura();
                $consulta_fatura->setDBUsuario($requestHeaders["db_user"]);
                $consulta_fatura->setDBSenha($requestHeaders["db_password"]);
                $consulta_fatura->setCodFatura($requestBody["fatura"]);
                $consulta_fatura->setCodConsultas($requestBody["consultas"]);
                $consulta_fatura->create();
                return;

            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>