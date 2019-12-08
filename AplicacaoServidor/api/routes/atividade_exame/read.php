<?php

    $requestHeaders = getallheaders();
    
    if( isset($requestHeaders["db_user"]) && 
        isset($requestHeaders["db_password"])
    ){
        include('../../controllers/Atividade_ExameController.php');
        executarAcao("READ",$requestHeaders,false);
    } else {
        http_response_code(400);
        echo 'Erro: Dados de conexão com o Banco de Dados não fornecidos!';
    }

?>