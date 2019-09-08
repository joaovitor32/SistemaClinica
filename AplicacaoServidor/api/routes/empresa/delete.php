<?php

    $requestHeaders = getallheaders();
    $requestBody = json_decode(file_get_contents('php://input'),true);
    
    if( isset($requestHeaders["DB_user"]) && 
        isset($requestHeaders["DB_password"])
    ){
        include('../../controllers/FuncaoController.php');
        executarAcao("DELETE",$requestHeaders,$requestBody);
    } else {
        http_response_code(400);
        echo 'Erro: Dados de conexão com o Banco de Dados não fornecidos!';
    }

?>