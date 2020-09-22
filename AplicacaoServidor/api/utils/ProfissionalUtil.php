<?php

class ProfissionalUtil{

    public $codProfissional;
    public $profissional;
    public $cpf;
    public $identificacao;
    public $especialidade;

    function __construct(
        $codProfissional,
        $profissional,
        $cpf,
        $identificacao
    )
    {
        $this->codProfissional=$codProfissional;
        $this->profissional=$profissional;
        $this->cpf=$cpf;
        $this->identificacao=$identificacao;
        $this->especialidade=Array();
    }
    public function addEspecialidade($especialidade){
        array_push($this->especialidade,$especialidade);
    }
}

?>