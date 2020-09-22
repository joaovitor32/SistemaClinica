<?php
    class EspecialidadeUtil{

        public $codEspecialidade;
        public $especialidade;
        public $descricao_especialidade;
        public $exames;

    function __construct(
        $codEspecialidade,
        $especialidade,
        $descricao_especialidade
    )
    {
        $this->codEspecialidade=$codEspecialidade;
        $this->especialidade=$especialidade;
        $this->descricao_especialidade=$descricao_especialidade;
        $this->exames=Array();
    }
    function addExame($exame){
        array_push($this->exames, $exame);
    }

    function getCodigo(){
        return $this->codConsulta;
    }

}
?>