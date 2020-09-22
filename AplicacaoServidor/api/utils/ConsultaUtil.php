 <?php
 class ConsultaUtil {
        public $codConsulta;
        public $dataHora;
        public $encerramento_consulta;
        public $paciente;
        public $empresa;
        public $codTipoConsulta;
        public $tipo_consulta;
        public $status;
        public $estados;
        public $cep;
        public $parecer;
        public $codEmpresa;

        function __construct($codConsulta, $dataHora, $encerramento_consulta, $paciente, $empresa, $codTipoConsulta, $tipo_consulta,$status,$codEmpresa) 
        {
            $this->codConsulta = $codConsulta;
            $this->dataHora = $dataHora;
            $this->encerramento_consulta = $encerramento_consulta;
            $this->paciente = $paciente;
            $this->empresa = $empresa;
            $this->codTipoConsulta = $codTipoConsulta;
            $this->tipo_consulta = $tipo_consulta;
            $this->status=$status;
            $this->codEmpresa=$codEmpresa;

            $this->estados = Array();
            $this->cep= Array();
            $this->parecer=Array();
        }

        function addEstado($estado){
            array_push($this->estados, $estado);
        }

        function addCep($cep){
            array_push($this->cep, $cep);
        }
        function addParecer($parecer){
            array_push($this->parecer,$parecer);
        }

        function getCodigo(){
            return $this->codConsulta;
        }
    }
?>