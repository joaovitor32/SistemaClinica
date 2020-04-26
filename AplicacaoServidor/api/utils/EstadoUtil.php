  <?php
  class EstadoUtil {
        public $codEstado;
        public $inicio;
        public $termino;
        public $ativo;
        public $codTipo;
        public $nome;
        public $descricao;

        function __construct($codEstado, $inicio, $termino, $ativo, 
                            $codTipo, $nome, $descricao) 
        {
            $this->codEstado = $codEstado;
            $this->inicio = $inicio;
            $this->termino = $termino;
            $this->ativo = $ativo;
            $this->codTipo = $codTipo;
            $this->nome = $nome;
            $this->descricao = $descricao;
        }
    }
?>