<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    header("Content-type: application/json");

    include_once("../../models/Consulta_Exame_Profissional.php");

    function executarAcao($acao, $requestHeaders, $requestBody){
        switch($acao) {
            case "INDEX":
                $consulta_exame_profissional = new ConsultaExameProfissional();
                $consulta_exame_profissional->setDBUsuario($requestHeaders["db_user"]);
                $consulta_exame_profissional->setDBSenha($requestHeaders["db_password"]);
                return  $consulta_exame_profissional->listaJSON();
                break;
            case "CREATE":
                $consulta_exame_profissional = new ConsultaExameProfissional();
                $consulta_exame_profissional->setDBUsuario($requestHeaders["db_user"]);
                $consulta_exame_profissional->setDBSenha($requestHeaders["db_password"]);
                $consulta_exame_profissional->setCodConsulta($requestBody["consulta"]);
                $consulta_exame_profissional->setCodExame($requestBody["exames"]);
                $consulta_exame_profissional->create();
                return;

            case "READ":
                $consulta_exame_profissional = new ConsultaExameProfissional();
                $consulta_exame_profissional->setDBUsuario($requestHeaders["db_user"]);
                $consulta_exame_profissional->setDBSenha($requestHeaders["db_password"]);
                
                if(!$requestHeaders["campo_principal"] || 
                    ($requestHeaders["campo_principal"] != 'codConsulta' &&
                    $requestHeaders["campo_principal"] != 'codExame' &&
                    $requestHeaders["campo_principal"] != 'codProfissional'))
                {
                    http_response_code(400);
                    echo 'Esta requisição deve conter um campo válido!';
                    return;
                }

                $consulta_exame_profissional->read($requestHeaders["campo_principal"], $requestHeaders["codigo"]);
                return;

            case "UPDATE":
                $consulta_exame_profissional = new ConsultaExameProfissional();
                $consulta_exame_profissional->setDBUsuario($requestHeaders["db_user"]);
                $consulta_exame_profissional->setDBSenha($requestHeaders["db_password"]);
                $consulta_exame_profissional->setCodConsulta($requestBody["consulta"]);
                $consulta_exame_profissional->setCodExame($requestBody["exame"]);
                $consulta_exame_profissional->setCodProfissional($requestBody["profissional"]);
                $consulta_exame_profissional->setInicio($requestBody["inicio"]);
                $consulta_exame_profissional->setTermino($requestBody["termino"]);
                $consulta_exame_profissional->update();
                return;

            case "DELETE":
                $consulta_exame_profissional = new ConsultaExameProfissional();
                $consulta_exame_profissional->setDBUsuario($requestHeaders["db_user"]);
                $consulta_exame_profissional->setDBSenha($requestHeaders["db_password"]);
                $consulta_exame_profissional->setCodConsulta($requestBody["consulta"]);
                $consulta_exame_profissional->setCodExame($requestBody["exame"]);
                $consulta_exame_profissional->delete();
                return;
            
            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>