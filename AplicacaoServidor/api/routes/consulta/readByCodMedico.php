<?php
    header("Acess-Control-Allow-Origin:*");
    header('Acess-Control-Request-Methdod:POST');
    ob_start();

    $requestHeaders=getallheaders();
    $requestBody=json_decode(file_get_contents('php://input'),true);

    if(isset($requestHeaders["db_user"]) && isset($requestHeaders["db_password"])){
        include('../../controllers/ConsultaController.php');
        executarAcao("READBYCODMEDICO",$requestHeaders,$requestBody);
    } else {
        http_response_code(400);
        echo 'Erro: Dados de conexão com o Banco de Dados não fornecidos!';
    }


?>