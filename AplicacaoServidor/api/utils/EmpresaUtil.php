<?php

    class EmpresaUtil{

        public $codEmpresa;
        public $empresa;
        public $cnpj;
        public $pagamento;

        public $funcionarios;

        function __construct(
            $codEmpresa,
            $empresa,
            $cnpj,
            $pagamento
        ){
            $this->codEmpresa=$codEmpresa;
            $this->empresa=$empresa;
            $this->cnpj=$cnpj;
            $this->pagamento=$pagamento;
            $this->funcionarios=Array();
        }

        function addFuncionario($funcionario){
            array_push($this->funcionarios,$funcionario);
        }
        function getCodigo(){
            return $this->codEmpresa;
        }

    }

?>