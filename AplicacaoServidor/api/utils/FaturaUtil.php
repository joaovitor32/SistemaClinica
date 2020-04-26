<?php

class FaturaUtil{

        public $codFatura;
        public $pagamento;
        public $descricao;
        public $dataHora;
        public $codEmpresa;
        public $empresa;
        public $cnpj;
        public $valor_total;
        public $consultas;
    function __construct(
        $codFatura,
        $pagamento,
        $descricao,
        $dataHora,
        $codEmpresa,
        $empresa,
        $cnpj,
        $valor_total
    )
    {
        $this->codFatura=$codFatura;
        $this->pagamento=$pagamento;
        $this->descricao=$descricao;
        $this->dataHora=$dataHora;
        $this->codEmpresa=$codEmpresa;
        $this->empresa=$empresa;
        $this->cnpj=$cnpj;
        $this->valor_total=$valor_total;
        $this->consultas=Array();
    }
    public function addConsulta($consulta){
        array_push($this->consultas,$consulta);
    }
}

?>