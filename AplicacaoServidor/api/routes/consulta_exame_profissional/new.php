<?php

    $requestHeaders = getallheaders();
    $requestBody = json_decode(file_get_contents('php://input'),true);
    
    if( isset($requestHeaders["db_user"]) && 
        isset($requestHeaders["db_password"])
    ){
        include('../../controllers/Consulta_Exame_ProfissionalController.php');
        executarAcao("CREATE",$requestHeaders,$requestBody);
    } else {
        http_response_code(400);
        echo 'Erro: Dados de conexão com o Banco de Dados não fornecidos!';
    }

?>