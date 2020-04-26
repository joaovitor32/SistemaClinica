<?php

    class ParecerUtil{

        public $codParecer;
        public $nome;
        public $descricao;
    

    function __construct($codParecer,$nome,$descricao)
    {
        $this->codParecer=$codParecer;
        $this->nome=$nome;
        $this->descricao=$descricao;
    }


    }
?>
