<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-Requested-With,content-type");
    header("Access-Control-Allow-Methods:GET,POST");          
    header("Access-Control-Request-Method:POST");
    header("Content-type: application/json");

    include_once("../../models/Profissional.php");

    function executarAcao($acao, $requestHeaders, $requestBody){
        switch($acao) {
            case "INDEX":
                $profissional = new Profissional();
                $profissional->setDBUsuario($requestHeaders["db_user"]);
                $profissional->setDBSenha($requestHeaders["db_password"]);
                $profissional->lista();
                return;
                break;
            case "CREATE":
                $profissional = new Profissional();
                $profissional->setDBUsuario($requestHeaders["db_user"]);
                $profissional->setDBSenha($requestHeaders["db_password"]);
                $profissional->setNome($requestBody["nome"]);
                $profissional->setCPF($requestBody["cpf"]);
                $profissional->setIdentificacao($requestBody["identificacao"]);
                $profissional->create();
                return;

            case "READ":
                $profissional = new Profissional();
                $profissional->setDBUsuario($requestHeaders["db_user"]);
                $profissional->setDBSenha($requestHeaders["db_password"]);
                $profissional->setCodProfissional($requestHeaders["_id"]);
                $profissional->read();
                return;

            case "UPDATE":
                $profissional = new Profissional();
                $profissional->setDBUsuario($requestHeaders["db_user"]);
                $profissional->setDBSenha($requestHeaders["db_password"]);
                $profissional->setCodProfissional($requestBody["_id"]);
                $profissional->setNome($requestBody["nome"]);
                $profissional->setCPF($requestBody["cpf"]);
                $profissional->setIdentificacao($requestBody["identificacao"]);
                $profissional->update();
                return;

            case "DELETE":
                $profissional = new Profissional();
				$profissional->setDBUsuario($requestHeaders["db_user"]);
                $profissional->setDBSenha($requestHeaders["db_password"]);
                $profissional->setCodProfissional($requestBody["_id"]);
                $profissional->delete();
                return;

            default:
                http_response_code(400);
                echo 'Erro: Opção de Ação inválida!';
                return;
        }
    }
?>
