<?php

class RiscoUtil{
    
    public $codRisco;
    public $risco;
    public $descricao_risco;
    public $codCategoriaRisco;
    public $categoria;
    public $exames;

    function __construct(
        $codRisco,
        $risco,
        $descricao_risco,
        $codCategoriaRisco,
        $categoria
    )
    {
        $this->codRisco=$codRisco;
        $this->risco=$risco;
        $this->descricao_risco=$descricao_risco;
        $this->codCategoriaRisco=$codCategoriaRisco;
        $this->categoria=$categoria;
        $this->exames=Array();
    }
    public function addExame($exame){
        array_push($this->exames,$exame);
    }
}


?>