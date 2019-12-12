<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    header("Content-type: application/json");

    include_once("../../models/Empresa_Paciente_Funcao.php");

    function executarAcao($acao, $requestHeaders, $requestBody){
        switch($acao) {
            case "INDEX":
                $empresa_paciente_funcao = new EmpresaPacienteFuncao();
                $empresa_paciente_funcao->setDBUsuario($requestHeaders["db_user"]);
                $empresa_paciente_funcao->setDBSenha($requestHeaders["db_password"]);
                return  $empresa_paciente_funcao->listaJSON();; 
                break;
            case "CREATE":
                $empresa_paciente_funcao = new EmpresaPacienteFuncao();
                $empresa_paciente_funcao->setDBUsuario($requestHeaders["db_user"]);
                $empresa_paciente_funcao->setDBSenha($requestHeaders["db_password"]);
                $empresa_paciente_funcao->setCodEmpresa($requestBody["empresa"]);
                $empresa_paciente_funcao->setCodPaciente($requestBody["paciente"]);
                $empresa_paciente_funcao->setCodFuncao($requestBody["funcao"]);
                $empresa_paciente_funcao->setCodSubgrupo($requestBody["subgrupo"]);
                $empresa_paciente_funcao->setInicio($requestBody["inicio"]);
                $empresa_paciente_funcao->setTermino($requestBody["termino"]);
                $empresa_paciente_funcao->create();
                return;

            case "READ":
                $empresa_paciente_funcao = new EmpresaPacienteFuncao();
                $empresa_paciente_funcao->setDBUsuario($requestHeaders["db_user"]);
                $empresa_paciente_funcao->setDBSenha($requestHeaders["db_password"]);

                if(!$requestHeaders["campo_principal"] || 
                    ($requestHeaders["campo_principal"] != 'codEmpresa' &&
                    $requestHeaders["campo_principal"] != 'codPaciente' &&
                    $requestHeaders["campo_principal"] != 'codFuncao'))
                {
                    http_response_code(400);
                    echo 'Esta requisição deve conter um campo válido!';
                    return;
                }

                $empresa_paciente_funcao->read($requestHeaders["campo_principal"], $requestHeaders["codigo"]);
                return;

            case "UPDATE":
                $empresa_paciente_funcao = new EmpresaPacienteFuncao();
                $empresa_paciente_funcao->setDBUsuario($requestHeaders["db_user"]);
                $empresa_paciente_funcao->setDBSenha($requestHeaders["db_password"]);
                $empresa_paciente_funcao->setCodEmpresa($requestBody["empresa"]);
                $empresa_paciente_funcao->setCodPaciente($requestBody["paciente"]);
                $empresa_paciente_funcao->setCodFuncao($requestBody["funcao"]);
                $empresa_paciente_funcao->setCodSubgrupo($requestBody["subgrupo"]);
                $empresa_paciente_funcao->setInicio($requestBody["inicio"]);
                $empresa_paciente_funcao->setTermino($requestBody["termino"]);
                $empresa_paciente_funcao->update();
                return;

            case "DELETE":
                $empresa_paciente_funcao = new EmpresaPacienteFuncao();
                $empresa_paciente_funcao->setDBUsuario($requestHeaders["db_user"]);
                $empresa_paciente_funcao->setDBSenha($requestHeaders["db_password"]);
                $empresa_paciente_funcao->setCodEmpresa($requestBody["empresa"]);
                $empresa_paciente_funcao->setCodPaciente($requestBody["paciente"]);
                $empresa_paciente_funcao->setCodFuncao($requestBody["funcao"]);
                $empresa_paciente_funcao->delete();
                return;
            
            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>