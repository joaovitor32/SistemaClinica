<?php
    class AtividadeUtil{

        public $codAtividade;
        public $atividade;
        public $descricao_atividade;

        function __construct($codAtividade,$atividade,$descricao_atividade)
        {
            $this->codAtividade=$codAtividade;
            $this->atividade=$atividade;
            $this->descricao_atividade=$descricao_atividade;
        }

    }

?>