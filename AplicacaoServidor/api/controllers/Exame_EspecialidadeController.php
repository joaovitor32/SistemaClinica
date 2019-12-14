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
                $exame_especialidade = new ExameEspecialidade();
                $exame_especialidade->setDBUsuario($requestHeaders["db_user"]);
                $exame_especialidade->setDBSenha($requestHeaders["db_password"]);
                return  $exame_especialidade->listaJSON();; 
                break;
            case "CREATE":
                $exame_especialidade = new ExameEspecialidade();
                $exame_especialidade->setDBUsuario($requestHeaders["db_user"]);
                $exame_especialidade->setDBSenha($requestHeaders["db_password"]);
                $exame_especialidade->setCodExame($requestBody["exame"]);
                $exame_especialidade->setCodEspecialidade($requestBody["especialidade"]);
                $exame_especialidade->create();
                return;

            case "READ":
                $exame_especialidade = new ExameEspecialidade();
                $exame_especialidade->setDBUsuario($requestHeaders["db_user"]);
                $exame_especialidade->setDBSenha($requestHeaders["db_password"]);
                $exame_especialidade->setCodEspecialidade($requestHeaders["_id"]);
                $exame_especialidade->read();
                return;

            case "DELETE":
                $exame_especialidade = new ExameEspecialidade();
                $exame_especialidade->setDBUsuario($requestHeaders["db_user"]);
                $exame_especialidade->setDBSenha($requestHeaders["db_password"]);
                $exame_especialidade->setCodExame($requestBody["exame"]);
                $exame_especialidade->setCodEspecialidade($requestBody["especialidade"]);
                $exame_especialidade->delete();
                return;
            
            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>