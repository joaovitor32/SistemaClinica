<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    header("Content-type: application/json");

    include_once("../../models/Empresa.php");

    function executarAcao($acao, $requestHeaders, $requestBody){
        switch($acao) {
            case "INDEX":
                $empresa = new Empresa();
                $empresa->setDBUsuario($requestHeaders["DB_user"]);
                $empresa->setDBSenha($requestHeaders["DB_password"]);
                $empresa->listaJSON();
                return;

            case "CREATE":
                $empresa = new Empresa();
                $empresa->setDBUsuario($requestHeaders["DB_user"]);
                $empresa->setDBSenha($requestHeaders["DB_password"]);
                $empresa->setNome($requestBody["nome"]);
                $empresa->setCnpj($requestBody["cnpj"]);
                $empresa->setTelefone1($requestBody["telefone1"]);
                $empresa->setTelefone2($requestBody["telefone2"]);
                $empresa->setTipoPgto($requestBody["tipoPgto"]);
                $empresa->setRua($requestBody["rua"]);
                $empresa->setNumero($requestBody["numero"]);
                $empresa->setBairro($requestBody["bairro"]);
                $empresa->setCidade($requestBody["cidade"]);
                $empresa->setEstado($requestBody["estado"]);
                $empresa->setCEP($requestBody["cep"]);
                $empresa->create();
                return;

            case "READ":
                $empresa = new Empresa();
                $empresa->setDBUsuario($requestHeaders["DB_user"]);
                $empresa->setDBSenha($requestHeaders["DB_password"]);
                $empresa->setCodEmpresa($requestHeaders["_id"]);
                $empresa->read();
                return;

            case "UPDATE":
                $empresa = new Empresa();
                $empresa->setDBUsuario($requestHeaders["DB_user"]);
                $empresa->setDBSenha($requestHeaders["DB_password"]);
                $empresa->setCodEmpresa($requestBody["_id"]);
                $empresa->setNome($requestBody["nome"]);
                $empresa->setCnpj($requestBody["cnpj"]);
                $empresa->setTelefone1($requestBody["telefone1"]);
                $empresa->setTelefone2($requestBody["telefone2"]);
                $empresa->setTipoPgto($requestBody["tipoPgto"]);
                $empresa->setRua($requestBody["rua"]);
                $empresa->setNumero($requestBody["numero"]);
                $empresa->setBairro($requestBody["bairro"]);
                $empresa->setCidade($requestBody["cidade"]);
                $empresa->setEstado($requestBody["estado"]);
                $empresa->setCEP($requestBody["cep"]);
                $empresa->update();
                return;

            case "DELETE":
                $empresa = new Empresa();
                $empresa->setDBUsuario($requestHeaders["DB_user"]);
                $empresa->setDBSenha($requestHeaders["DB_password"]);
                $empresa->setCodEmpresa($requestBody["_id"]);
                $empresa->delete();
                return;
            
            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>