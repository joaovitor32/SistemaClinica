<?php

class FuncaoUtil{

    public $codFuncao;
    public $funcao;
    public $descricao_funcao;
    public $setor;
    public $exames;

    function __construct(
        $codFuncao,
        $funcao,
        $descricao_funcao,
        $setor
    ){
        $this->codFuncao=$codFuncao;
        $this->funcao=$funcao;
        $this->descricao_funcao=$descricao_funcao;
        $this->setor=$setor;
        $this->exames=Array();
    }
    public function addExame($exame){
        array_push($this->exames,$exame);
    }
}

?>