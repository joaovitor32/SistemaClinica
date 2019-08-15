-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 14/08/2019 às 20:29
-- Versão do servidor: 10.1.37-MariaDB-0+deb9u1
-- Versão do PHP: 7.0.33-0+deb9u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `dbClinica`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `atividade`
--

CREATE TABLE `atividade` (
  `codAtividade` bigint(20) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `descricao` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `atividade_exame`
--

CREATE TABLE `atividade_exame` (
  `codAtividade` bigint(20) NOT NULL,
  `codExame` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `consulta`
--

CREATE TABLE `consulta` (
  `codConsulta` bigint(20) NOT NULL,
  `codPaciente` bigint(20) NOT NULL,
  `dataHora` datetime NOT NULL,
  `termino` datetime DEFAULT NULL,
  `statusPgto` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `consulta_exame_medico`
--

CREATE TABLE `consulta_exame_medico` (
  `codConsulta` bigint(20) NOT NULL,
  `codExame` bigint(20) NOT NULL,
  `codMedico` bigint(20) NOT NULL,
  `inicio` datetime DEFAULT NULL,
  `termino` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `consulta_fatura`
--

CREATE TABLE `consulta_fatura` (
  `codFatura` bigint(20) NOT NULL,
  `codConsulta` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `empresa`
--

CREATE TABLE `empresa` (
  `codEmpresa` bigint(20) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `cnpj` varchar(18) NOT NULL,
  `telefone` varchar(15) NOT NULL,
  `tipoPgto` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `empresa_paciente_funcao`
--

CREATE TABLE `empresa_paciente_funcao` (
  `codEmpresa` bigint(20) NOT NULL,
  `codPaciente` bigint(20) NOT NULL,
  `codFuncao` bigint(20) NOT NULL,
  `codSubgrupo` bigint(20) DEFAULT NULL,
  `inicio` date DEFAULT NULL,
  `termino` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `especialidade`
--

CREATE TABLE `especialidade` (
  `codEspecialidade` bigint(20) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `descricao` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `estado`
--

CREATE TABLE `estado` (
  `codEstado` bigint(20) NOT NULL,
  `codTipo` bigint(20) NOT NULL,
  `codConsulta` bigint(20) NOT NULL,
  `inicio` datetime NOT NULL,
  `termino` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `exame`
--

CREATE TABLE `exame` (
  `codExame` bigint(20) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `descricao` text NOT NULL,
  `preco` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `fatura`
--

CREATE TABLE `fatura` (
  `codFatura` bigint(20) NOT NULL,
  `codEmpresa` bigint(20) NOT NULL,
  `descricao` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `funcao`
--

CREATE TABLE `funcao` (
  `codFuncao` bigint(20) NOT NULL,
  `nome` varchar(30) DEFAULT NULL,
  `descricao` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `funcao_exame`
--

CREATE TABLE `funcao_exame` (
  `codFuncao` bigint(20) NOT NULL,
  `codExame` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `medico`
--

CREATE TABLE `medico` (
  `codMedico` bigint(20) NOT NULL,
  `nome` varchar(70) NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `crm` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `medico_especialidade`
--

CREATE TABLE `medico_especialidade` (
  `codMedico` bigint(20) NOT NULL,
  `codEspecialidade` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `paciente`
--

CREATE TABLE `paciente` (
  `codPaciente` bigint(20) NOT NULL,
  `nome` varchar(70) NOT NULL,
  `cpf` varchar(14) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `subgrupo`
--

CREATE TABLE `subgrupo` (
  `codSubgrupo` bigint(20) NOT NULL,
  `nome` varchar(10) NOT NULL,
  `codFuncao` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `subgrupo_atividade`
--

CREATE TABLE `subgrupo_atividade` (
  `codAtividade` bigint(20) NOT NULL,
  `codSubgrupo` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tipoEstado`
--

CREATE TABLE `tipoEstado` (
  `codTipo` bigint(20) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `descricao` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `atividade`
--
ALTER TABLE `atividade`
  ADD PRIMARY KEY (`codAtividade`);

--
-- Índices de tabela `atividade_exame`
--
ALTER TABLE `atividade_exame`
  ADD PRIMARY KEY (`codAtividade`,`codExame`),
  ADD KEY `codExame` (`codExame`);

--
-- Índices de tabela `consulta`
--
ALTER TABLE `consulta`
  ADD PRIMARY KEY (`codConsulta`),
  ADD KEY `codPaciente` (`codPaciente`);

--
-- Índices de tabela `consulta_exame_medico`
--
ALTER TABLE `consulta_exame_medico`
  ADD PRIMARY KEY (`codConsulta`,`codExame`,`codMedico`),
  ADD KEY `codExame` (`codExame`),
  ADD KEY `codMedico` (`codMedico`);

--
-- Índices de tabela `consulta_fatura`
--
ALTER TABLE `consulta_fatura`
  ADD PRIMARY KEY (`codFatura`,`codConsulta`),
  ADD KEY `codConsulta` (`codConsulta`);

--
-- Índices de tabela `empresa`
--
ALTER TABLE `empresa`
  ADD PRIMARY KEY (`codEmpresa`);

--
-- Índices de tabela `empresa_paciente_funcao`
--
ALTER TABLE `empresa_paciente_funcao`
  ADD PRIMARY KEY (`codEmpresa`,`codPaciente`,`codFuncao`),
  ADD KEY `codPaciente` (`codPaciente`),
  ADD KEY `codFuncao` (`codFuncao`),
  ADD KEY `codSubgrupo` (`codSubgrupo`);

--
-- Índices de tabela `especialidade`
--
ALTER TABLE `especialidade`
  ADD PRIMARY KEY (`codEspecialidade`);

--
-- Índices de tabela `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`codEstado`),
  ADD KEY `codConsulta` (`codConsulta`),
  ADD KEY `codTipo` (`codTipo`);

--
-- Índices de tabela `exame`
--
ALTER TABLE `exame`
  ADD PRIMARY KEY (`codExame`);

--
-- Índices de tabela `fatura`
--
ALTER TABLE `fatura`
  ADD PRIMARY KEY (`codFatura`),
  ADD KEY `codEmpresa` (`codEmpresa`);

--
-- Índices de tabela `funcao`
--
ALTER TABLE `funcao`
  ADD PRIMARY KEY (`codFuncao`);

--
-- Índices de tabela `funcao_exame`
--
ALTER TABLE `funcao_exame`
  ADD PRIMARY KEY (`codFuncao`,`codExame`),
  ADD KEY `codExame` (`codExame`);

--
-- Índices de tabela `medico`
--
ALTER TABLE `medico`
  ADD PRIMARY KEY (`codMedico`);

--
-- Índices de tabela `medico_especialidade`
--
ALTER TABLE `medico_especialidade`
  ADD PRIMARY KEY (`codMedico`,`codEspecialidade`),
  ADD KEY `codEspecialidade` (`codEspecialidade`);

--
-- Índices de tabela `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`codPaciente`);

--
-- Índices de tabela `subgrupo`
--
ALTER TABLE `subgrupo`
  ADD PRIMARY KEY (`codSubgrupo`),
  ADD KEY `codFuncao` (`codFuncao`);

--
-- Índices de tabela `subgrupo_atividade`
--
ALTER TABLE `subgrupo_atividade`
  ADD PRIMARY KEY (`codAtividade`,`codSubgrupo`),
  ADD KEY `codSubgrupo` (`codSubgrupo`);

--
-- Índices de tabela `tipoEstado`
--
ALTER TABLE `tipoEstado`
  ADD PRIMARY KEY (`codTipo`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `atividade`
--
ALTER TABLE `atividade`
  MODIFY `codAtividade` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de tabela `consulta`
--
ALTER TABLE `consulta`
  MODIFY `codConsulta` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de tabela `empresa`
--
ALTER TABLE `empresa`
  MODIFY `codEmpresa` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de tabela `especialidade`
--
ALTER TABLE `especialidade`
  MODIFY `codEspecialidade` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de tabela `estado`
--
ALTER TABLE `estado`
  MODIFY `codEstado` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de tabela `exame`
--
ALTER TABLE `exame`
  MODIFY `codExame` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de tabela `fatura`
--
ALTER TABLE `fatura`
  MODIFY `codFatura` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de tabela `funcao`
--
ALTER TABLE `funcao`
  MODIFY `codFuncao` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de tabela `medico`
--
ALTER TABLE `medico`
  MODIFY `codMedico` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de tabela `paciente`
--
ALTER TABLE `paciente`
  MODIFY `codPaciente` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de tabela `subgrupo`
--
ALTER TABLE `subgrupo`
  MODIFY `codSubgrupo` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de tabela `tipoEstado`
--
ALTER TABLE `tipoEstado`
  MODIFY `codTipo` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `atividade_exame`
--
ALTER TABLE `atividade_exame`
  ADD CONSTRAINT `atividade_exame_ibfk_1` FOREIGN KEY (`codAtividade`) REFERENCES `atividade` (`codAtividade`),
  ADD CONSTRAINT `atividade_exame_ibfk_2` FOREIGN KEY (`codExame`) REFERENCES `exame` (`codExame`);

--
-- Restrições para tabelas `consulta`
--
ALTER TABLE `consulta`
  ADD CONSTRAINT `consulta_ibfk_1` FOREIGN KEY (`codPaciente`) REFERENCES `paciente` (`codPaciente`);

--
-- Restrições para tabelas `consulta_exame_medico`
--
ALTER TABLE `consulta_exame_medico`
  ADD CONSTRAINT `consulta_exame_medico_ibfk_1` FOREIGN KEY (`codConsulta`) REFERENCES `consulta` (`codConsulta`),
  ADD CONSTRAINT `consulta_exame_medico_ibfk_2` FOREIGN KEY (`codExame`) REFERENCES `exame` (`codExame`),
  ADD CONSTRAINT `consulta_exame_medico_ibfk_3` FOREIGN KEY (`codMedico`) REFERENCES `medico` (`codMedico`);

--
-- Restrições para tabelas `consulta_fatura`
--
ALTER TABLE `consulta_fatura`
  ADD CONSTRAINT `consulta_fatura_ibfk_1` FOREIGN KEY (`codFatura`) REFERENCES `fatura` (`codFatura`),
  ADD CONSTRAINT `consulta_fatura_ibfk_2` FOREIGN KEY (`codConsulta`) REFERENCES `consulta` (`codConsulta`);

--
-- Restrições para tabelas `empresa_paciente_funcao`
--
ALTER TABLE `empresa_paciente_funcao`
  ADD CONSTRAINT `empresa_paciente_funcao_ibfk_1` FOREIGN KEY (`codEmpresa`) REFERENCES `empresa` (`codEmpresa`),
  ADD CONSTRAINT `empresa_paciente_funcao_ibfk_2` FOREIGN KEY (`codPaciente`) REFERENCES `paciente` (`codPaciente`),
  ADD CONSTRAINT `empresa_paciente_funcao_ibfk_3` FOREIGN KEY (`codFuncao`) REFERENCES `funcao` (`codFuncao`),
  ADD CONSTRAINT `empresa_paciente_funcao_ibfk_4` FOREIGN KEY (`codSubgrupo`) REFERENCES `subgrupo` (`codSubgrupo`);

--
-- Restrições para tabelas `estado`
--
ALTER TABLE `estado`
  ADD CONSTRAINT `estado_ibfk_1` FOREIGN KEY (`codConsulta`) REFERENCES `consulta` (`codConsulta`),
  ADD CONSTRAINT `estado_ibfk_2` FOREIGN KEY (`codTipo`) REFERENCES `tipoEstado` (`codTipo`);

--
-- Restrições para tabelas `fatura`
--
ALTER TABLE `fatura`
  ADD CONSTRAINT `fatura_ibfk_1` FOREIGN KEY (`codEmpresa`) REFERENCES `empresa` (`codEmpresa`);

--
-- Restrições para tabelas `funcao_exame`
--
ALTER TABLE `funcao_exame`
  ADD CONSTRAINT `funcao_exame_ibfk_1` FOREIGN KEY (`codFuncao`) REFERENCES `funcao` (`codFuncao`),
  ADD CONSTRAINT `funcao_exame_ibfk_2` FOREIGN KEY (`codExame`) REFERENCES `exame` (`codExame`);

--
-- Restrições para tabelas `medico_especialidade`
--
ALTER TABLE `medico_especialidade`
  ADD CONSTRAINT `medico_especialidade_ibfk_1` FOREIGN KEY (`codMedico`) REFERENCES `medico` (`codMedico`),
  ADD CONSTRAINT `medico_especialidade_ibfk_2` FOREIGN KEY (`codEspecialidade`) REFERENCES `especialidade` (`codEspecialidade`);

--
-- Restrições para tabelas `subgrupo`
--
ALTER TABLE `subgrupo`
  ADD CONSTRAINT `subgrupo_ibfk_1` FOREIGN KEY (`codFuncao`) REFERENCES `funcao` (`codFuncao`);

--
-- Restrições para tabelas `subgrupo_atividade`
--
ALTER TABLE `subgrupo_atividade`
  ADD CONSTRAINT `subgrupo_atividade_ibfk_1` FOREIGN KEY (`codAtividade`) REFERENCES `atividade` (`codAtividade`),
  ADD CONSTRAINT `subgrupo_atividade_ibfk_2` FOREIGN KEY (`codSubgrupo`) REFERENCES `subgrupo` (`codSubgrupo`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
