<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With,content-type");
header("Access-Control-Allow-Methods:GET,POST");          
header("Access-Control-Request-Method:POST");
header("Content-type: application/json");
include_once("../../models/Consulta.php");
function executarAcao($acao, $requestHeaders, $requestBody){
    switch($acao) {
        case "READBYCODMEDICO":
            $consulta = new Consulta();
            $consulta->setDBUsuario($requestHeaders["db_user"]);
            $consulta->setDBSenha($requestHeaders["db_password"]);
            $consulta->setCodMedico($requestBody['codMedico']);
            return $consulta->listaJSON();
            break;
        case "READ":
            $consulta = new Consulta();
            $consulta->setDBUsuario($requestHeaders["db_user"]);
            $consulta->setDBSenha($requestHeaders["db_password"]);
            $consulta->setCodConsulta($requestBody['codConsulta']);
            return $consulta->listaJSONConsultas();
            break;
        default:
            http_response_code(400);
            echo 'Erro: Opção de Ação inválida!';
            return;
    }
}
?>