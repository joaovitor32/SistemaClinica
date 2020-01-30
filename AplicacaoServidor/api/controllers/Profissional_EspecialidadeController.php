<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    header("Content-type: application/json");

    include_once("../../models/Profissional_Especialidade.php");

    function executarAcao($acao, $requestHeaders, $requestBody){
        switch($acao) {
            case "INDEX":
                $profissional_especialidade = new ProfissionalEspecialidade();
                $profissional_especialidade->setDBUsuario($requestHeaders["db_user"]);
                $profissional_especialidade->setDBSenha($requestHeaders["db_password"]);
                return  $profissional_especialidade->listaJSON();
                break;
            case "CREATE":
                $profissional_especialidade = new ProfissionalEspecialidade();
                $profissional_especialidade->setDBUsuario($requestHeaders["db_user"]);
                $profissional_especialidade->setDBSenha($requestHeaders["db_password"]);
                $profissional_especialidade->setCodProfissional($requestBody["profissional"]);
                $profissional_especialidade->setCodEspecialidade($requestBody["especialidade"]);
                $profissional_especialidade->create();
                return;

            case "READ":
                $profissional_especialidade = new ProfissionalEspecialidade();
                $profissional_especialidade->setDBUsuario($requestHeaders["db_user"]);
                $profissional_especialidade->setDBSenha($requestHeaders["db_password"]);
                $profissional_especialidade->setCodProfissional($requestHeaders["_id"]);
                $profissional_especialidade->read();
                return;

            case "DELETE":
                $profissional_especialidade = new ProfissionalEspecialidade();
                $profissional_especialidade->setDBUsuario($requestHeaders["db_user"]);
                $profissional_especialidade->setDBSenha($requestHeaders["db_password"]);
                $profissional_especialidade->setCodProfissional($requestBody["profissional"]);
                $profissional_especialidade->setCodEspecialidade($requestBody["especialidade"]);
                $profissional_especialidade->delete();
                return;
            
            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>