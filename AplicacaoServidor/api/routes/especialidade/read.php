<?php

    $requestHeaders = getallheaders();
    
    if( isset($requestHeaders["DB_user"]) && 
        isset($requestHeaders["DB_password"])
    ){
        include('../../controllers/EspecialidadeController.php');
        executarAcao("READ",$requestHeaders,false);
    } else {
        http_response_code(400);
        echo 'Erro: Dados de conexão com o Banco de Dados não fornecidos!';
    }

?>