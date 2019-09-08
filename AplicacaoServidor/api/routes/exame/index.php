<?php

    $requestHeaders = getallheaders();
    
    if( isset($requestHeaders["DB_user"]) && 
        isset($requestHeaders["DB_password"])
    ){
        include('../../controllers/ExameController.php');
        executarAcao("INDEX",$requestHeaders,false);
    } else {
        http_response_code(400);
        echo 'Erro: Dados de conexão com o Banco de Dados não fornecidos!';
    }

?>