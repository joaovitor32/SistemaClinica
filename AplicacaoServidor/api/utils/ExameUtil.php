<?php

class ExameUtil{

    public $codExame;
    public $exame;
    public $descricao_exame;
    public $preco;
    public $codigo;

    function __construct(
        $codExame,
        $exame,
        $descricao_exame,
        $preco,
        $codigo
    ){
        $this->codExame=$codExame;
        $this->exame=$exame;
        $this->descricao_exame=$descricao_exame;
        $this->preco=$preco;
        $this->codigo=$codigo;
    
    }
}

?>