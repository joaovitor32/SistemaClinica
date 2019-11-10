<?php
    session_start();
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    $data=json_decode(file_get_contents('php://input'));
    if(!empty($data)){
        $result='';
        if($data->action=="VERIFICA_LOGIN"){
            include '../Model/Login.php';
            $login=new Login;
            $login->setLogin($data->login);
            $login->setSenha(md5($data->senha));
            return $login->grantAcess();
        }else if($data->action=="GET_OUT"){
            unset($_SESSION);
            session_destroy();
            $vet=array("success"=>true);
            echo json_encode($vet);
        }
    }
?>
