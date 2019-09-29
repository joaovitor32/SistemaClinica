<?php  
   header("Access-Control-Allow-Origin: *");
   // header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    //header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    //header("Content-type: application/json");
    //header('Cache-Control: no-cache, no-store, must-revalidate');
    //header('Pragma: no-cache');
    //header('Expires: 0');
    ob_start();

    $requestHeaders =getallheaders();

    var_dump($requestHeaders);
    $login= $requestHeaders['db_user'];
    $senha= $requestHeaders['db_password'];

    
    if( isset($login) && isset($senha)){

        include('../../controllers/EmpresaController.php');
        executarAcao("INDEX",$requestHeaders,false);
        
    } else {
        http_response_code(400);
        echo 'Erro: Dados de conexão com o Banco de Dados não fornecidos!';
    }

?>
