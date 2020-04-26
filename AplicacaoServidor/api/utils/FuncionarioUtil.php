<?php

    class FuncionarioUtil{

        public $codPaciente;
        public $paciente;
        public $cpf;
        public $rg;
        public $sexo;
        public $nascimento;
        public $codFuncao;
        public $funcao;
        public $setor;
        public $descricao_funcao;
        public $codSubgrupo;
        public $subgrupo;
        public $inicio;
        public $termino;

    function __construct(
        $codPaciente,
        $paciente,
        $cpf,
        $rg,
        $sexo,
        $nascimento,
        $codFuncao,
        $funcao,
        $setor,
        $descricao_funcao,
        $codSubgrupo,
        $subgrupo,
        $inicio,
        $termino
    ){
        $this->codPaciente=$codPaciente;
        $this->paciente=$paciente;
        $this->cpf=$cpf;
        $this->rg=$rg;
        $this->sexo=$sexo;
        $this->nascimento=$nascimento;
        $this->codFuncao=$codFuncao;
        $this->funcao=$funcao;
        $this->setor=$setor;
        $this->descricao_funcao=$descricao_funcao;
        $this->codSubgrupo=$codSubgrupo;
        $this->subgrupo=$subgrupo;
        $this->inicio=$inicio;
        $this->termino=$termino;
    }

}
?>