<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    header("Content-type: application/json");

    include_once("../../models/Medico_Especialidade.php");

    function executarAcao($acao, $requestHeaders, $requestBody){
        switch($acao) {
            case "INDEX":
                $medico_especialidade = new MedicoEspecialidade();
                $medico_especialidade->setDBUsuario($requestHeaders["db_user"]);
                $medico_especialidade->setDBSenha($requestHeaders["db_password"]);
                return  $medico_especialidade->listaJSON();; 
                break;
            case "CREATE":
                $medico_especialidade = new MedicoEspecialidade();
                $medico_especialidade->setDBUsuario($requestHeaders["db_user"]);
                $medico_especialidade->setDBSenha($requestHeaders["db_password"]);
                $medico_especialidade->setCodMedico($requestBody["medico"]);
                $medico_especialidade->setCodEspecialidade($requestBody["especialidade"]);
                $medico_especialidade->create();
                return;

            case "READ":
                $medico_especialidade = new MedicoEspecialidade();
                $medico_especialidade->setDBUsuario($requestHeaders["db_user"]);
                $medico_especialidade->setDBSenha($requestHeaders["db_password"]);
                $medico_especialidade->setCodMedico($requestHeaders["_id"]);
                $medico_especialidade->read();
                return;

            case "DELETE":
                $medico_especialidade = new MedicoEspecialidade();
                $medico_especialidade->setDBUsuario($requestHeaders["db_user"]);
                $medico_especialidade->setDBSenha($requestHeaders["db_password"]);
                $medico_especialidade->setCodMedico($requestBody["medico"]);
                $medico_especialidade->setCodEspecialidade($requestBody["especialidade"]);
                $medico_especialidade->delete();
                return;
            
            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>