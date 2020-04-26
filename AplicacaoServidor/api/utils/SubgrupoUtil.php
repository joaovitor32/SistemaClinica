
<?php

class SubgrupoUtil{

    public $codSubgrupo;
    public $subgrupo;
    public $atividades;

    function __construct($codSubgrupo,$subgrupo)
    {
        $this->codSubgrupo=$codSubgrupo;
        $this->subgrupo=$subgrupo;
        $this->atividades=Array();
    }
    function addAtividade($atividade){
        array_push($this->atividades,$atividade);
    }

}

?>