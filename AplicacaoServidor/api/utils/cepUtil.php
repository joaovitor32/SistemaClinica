<?php
	class cepUtil{
        public $codExame;
        public $exame;
        public $descricao;
        public $codigo;
        public $codProfissional;
        public $profissional;
        public $inicio;
        public $termino;

    function __construct($codExame,$exame,$descricao,$codigo,$codProfissional,$profissional,$inicio,$termino) {
        $this->codExame=$codExame;
        $this->exame=$exame;
        $this->descricao=$descricao;
        $this->codigo=$codigo;
        $this->codProfissional=$codProfissional;
        $this->profissional=$profissional;
        $this->inicio=$inicio;
        $this->termino=$termino;
        
    }
}
?>

