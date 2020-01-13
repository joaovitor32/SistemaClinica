<?php

    $requestHeaders = getallheaders();
    
    if( isset($requestHeaders["db_user"]) && 
        isset($requestHeaders["db_password"])
    ){
        include('../../controllers/Consulta_Exame_MedicoController.php');
        executarAcao("INDEX",$requestHeaders,false);
    } else {
        http_response_code(400);
        echo 'Erro: Dados de conexão com o Banco de Dados não fornecidos!';
    }

?>