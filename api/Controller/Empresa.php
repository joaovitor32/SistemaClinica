<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    $data=json_decode(file_get_contents('php://input'));
    if(!empty($data)){
        if($data->action="VisualizarEmpresas"){
            include '../Model/Empresa.php';
            $empresa=new Empresa();
            echo $empresa->listaEmpresasJSON();
        }
    }
?>
