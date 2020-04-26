<?php

class SalaUtil{

    public $codSala;
    public $sala;
    public $descricao_sala;
    public $exames;

    function __construct(
        $codSala,
        $sala,
        $descricao_sala
    )
    {   
        $this->codSala=$codSala;
        $this->sala=$sala;
        $this->descricao_sala=$descricao_sala;
        $this->exames=Array();
    }
    function addExame($exame){
        array_push($this->exames,$exame);
    }
}

?>