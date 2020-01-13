<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    header("Content-type: application/json");

    include_once("../../models/Consulta_Exame_Medico.php");

    function executarAcao($acao, $requestHeaders, $requestBody){
        switch($acao) {
            case "INDEX":
                $consulta_exame_medico = new ConsultaExameMedico();
                $consulta_exame_medico->setDBUsuario($requestHeaders["db_user"]);
                $consulta_exame_medico->setDBSenha($requestHeaders["db_password"]);
                return  $consulta_exame_medico->listaJSON();
                break;
            case "CREATE":
                $consulta_exame_medico = new ConsultaExameMedico();
                $consulta_exame_medico->setDBUsuario($requestHeaders["db_user"]);
                $consulta_exame_medico->setDBSenha($requestHeaders["db_password"]);
                $consulta_exame_medico->setCodConsulta($requestBody["consulta"]);
                $consulta_exame_medico->setCodExame($requestBody["exame"]);
                $consulta_exame_medico->create();
                return;

            case "READ":
                $consulta_exame_medico = new ConsultaExameMedico();
                $consulta_exame_medico->setDBUsuario($requestHeaders["db_user"]);
                $consulta_exame_medico->setDBSenha($requestHeaders["db_password"]);

                if(!$requestHeaders["campo_principal"] || 
                    ($requestHeaders["campo_principal"] != 'codConsulta' &&
                    $requestHeaders["campo_principal"] != 'codExame' &&
                    $requestHeaders["campo_principal"] != 'codMedico'))
                {
                    http_response_code(400);
                    echo 'Esta requisição deve conter um campo válido!';
                    return;
                }

                $consulta_exame_medico->read($requestHeaders["campo_principal"], $requestHeaders["codigo"]);
                return;

            case "UPDATE":
                $consulta_exame_medico = new ConsultaExameMedico();
                $consulta_exame_medico->setDBUsuario($requestHeaders["db_user"]);
                $consulta_exame_medico->setDBSenha($requestHeaders["db_password"]);
                $consulta_exame_medico->setCodConsulta($requestBody["consulta"]);
                $consulta_exame_medico->setCodExame($requestBody["exame"]);
                $consulta_exame_medico->setCodMedico($requestBody["medico"]);
                $consulta_exame_medico->setInicio($requestBody["inicio"]);
                $consulta_exame_medico->setTermino($requestBody["termino"]);
                $consulta_exame_medico->update();
                return;

            case "DELETE":
                $consulta_exame_medico = new ConsultaExameMedico();
                $consulta_exame_medico->setDBUsuario($requestHeaders["db_user"]);
                $consulta_exame_medico->setDBSenha($requestHeaders["db_password"]);
                $consulta_exame_medico->setCodConsulta($requestBody["consulta"]);
                $consulta_exame_medico->setCodExame($requestBody["exame"]);
                $consulta_exame_medico->setCodMedico($requestBody["medico"]);
                $consulta_exame_medico->delete();
                return;
            
            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>