-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 15/08/2019 às 09:24
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

--
-- Fazendo dump de dados para tabela `atividade`
--

INSERT INTO `atividade` (`codAtividade`, `nome`, `descricao`) VALUES
(1, 'Altura', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.'),
(2, 'Fumaça', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.'),
(3, 'Químicos', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.'),
(4, 'Ruído', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.'),
(5, 'Endemias', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.');

-- --------------------------------------------------------

--
-- Estrutura para tabela `atividade_exame`
--

CREATE TABLE `atividade_exame` (
  `codAtividade` bigint(20) NOT NULL,
  `codExame` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `atividade_exame`
--

INSERT INTO `atividade_exame` (`codAtividade`, `codExame`) VALUES
(1, 1),
(1, 4),
(2, 8),
(2, 10),
(3, 6),
(3, 7),
(4, 2),
(4, 7),
(5, 9),
(5, 10);

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

--
-- Fazendo dump de dados para tabela `empresa`
--

INSERT INTO `empresa` (`codEmpresa`, `nome`, `cnpj`, `telefone`, `tipoPgto`) VALUES
(1, 'FAOL', '30.538.060/0001-23', '(22)2523-1234', 0),
(2, 'Auto Viação 1001', '30.069.314/0001-01', '(22)2523-5555', 1);

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

--
-- Fazendo dump de dados para tabela `empresa_paciente_funcao`
--

INSERT INTO `empresa_paciente_funcao` (`codEmpresa`, `codPaciente`, `codFuncao`, `codSubgrupo`, `inicio`, `termino`) VALUES
(1, 1, 1, 1, '2019-08-15', NULL),
(1, 2, 1, 2, '2019-08-15', NULL),
(1, 3, 2, NULL, '2019-08-15', NULL),
(2, 4, 7, NULL, '2019-08-04', NULL);

-- --------------------------------------------------------

--
-- Estrutura para tabela `especialidade`
--

CREATE TABLE `especialidade` (
  `codEspecialidade` bigint(20) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `descricao` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `especialidade`
--

INSERT INTO `especialidade` (`codEspecialidade`, `nome`, `descricao`) VALUES
(1, 'Cardiologista', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.'),
(2, 'Ortopedista', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.'),
(3, 'Oftalmologista', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.'),
(4, 'Toxicologista', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.'),
(5, 'Radiologista', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.');

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

--
-- Fazendo dump de dados para tabela `exame`
--

INSERT INTO `exame` (`codExame`, `nome`, `descricao`, `preco`) VALUES
(1, 'Hemograma', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.', 99),
(2, 'Audiometria', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.', 30),
(3, 'Optometria', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.', 59.99),
(4, 'Endoscopia', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.', 199),
(5, 'Eletroencefalograma', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.', 78.5),
(6, 'Eletrocardiograma', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.', 69.99),
(7, 'Biópsia', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.', 300),
(8, 'Broncoscopia', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.', 250),
(9, 'Laringoscopia', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.', 150),
(10, 'Radiografia', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.', 225);

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

--
-- Fazendo dump de dados para tabela `funcao`
--

INSERT INTO `funcao` (`codFuncao`, `nome`, `descricao`) VALUES
(1, 'Servente de Pedreiro', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.'),
(2, 'Costureiro', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.'),
(3, 'Auxiliar de Enfermagem', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.'),
(4, 'Técnico em Química', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.'),
(5, 'Torneiro Mecânico', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.'),
(6, 'Ferramenteiro', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.'),
(7, 'Cobrador', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.'),
(8, 'Motorista ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.'),
(9, 'Mecânico', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.'),
(10, 'Lanterneiro', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.');

-- --------------------------------------------------------

--
-- Estrutura para tabela `funcao_exame`
--

CREATE TABLE `funcao_exame` (
  `codFuncao` bigint(20) NOT NULL,
  `codExame` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `funcao_exame`
--

INSERT INTO `funcao_exame` (`codFuncao`, `codExame`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);

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

--
-- Fazendo dump de dados para tabela `medico`
--

INSERT INTO `medico` (`codMedico`, `nome`, `cpf`, `crm`) VALUES
(1, 'Julia Barbosa Oliveira', '666.345.517-66', '920541'),
(2, 'Luís Melo Souza', '646.036.897-05', '850772'),
(3, 'Murilo Sousa Cavalcanti', '116.280.887-02', '674230 '),
(4, 'Vitór Martins Melo', '930.329.467-00', '891088'),
(5, 'Matilde Pereira Rodrigues', '202.366.387-34', '171664');

-- --------------------------------------------------------

--
-- Estrutura para tabela `medico_especialidade`
--

CREATE TABLE `medico_especialidade` (
  `codMedico` bigint(20) NOT NULL,
  `codEspecialidade` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `medico_especialidade`
--

INSERT INTO `medico_especialidade` (`codMedico`, `codEspecialidade`) VALUES
(1, 5),
(2, 4),
(3, 3),
(4, 2),
(5, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `paciente`
--

CREATE TABLE `paciente` (
  `codPaciente` bigint(20) NOT NULL,
  `nome` varchar(70) NOT NULL,
  `cpf` varchar(14) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `paciente`
--

INSERT INTO `paciente` (`codPaciente`, `nome`, `cpf`) VALUES
(1, 'João Vitor Lopes', '242.242.240-24'),
(2, 'Hugo Rangel', '069.069.069-69'),
(3, 'Matheus Salles', '155.155.155-55'),
(4, 'Bruno Reinoso', '157.157.157-57');

-- --------------------------------------------------------

--
-- Estrutura para tabela `subgrupo`
--

CREATE TABLE `subgrupo` (
  `codSubgrupo` bigint(20) NOT NULL,
  `nome` varchar(10) NOT NULL,
  `codFuncao` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `subgrupo`
--

INSERT INTO `subgrupo` (`codSubgrupo`, `nome`, `codFuncao`) VALUES
(1, 'A', 1),
(2, 'B', 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `subgrupo_atividade`
--

CREATE TABLE `subgrupo_atividade` (
  `codAtividade` bigint(20) NOT NULL,
  `codSubgrupo` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `subgrupo_atividade`
--

INSERT INTO `subgrupo_atividade` (`codAtividade`, `codSubgrupo`) VALUES
(1, 2),
(2, 1),
(2, 2),
(3, 2),
(4, 1);

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
-- Fazendo dump de dados para tabela `tipoEstado`
--

INSERT INTO `tipoEstado` (`codTipo`, `nome`, `descricao`) VALUES
(1, 'Agendado', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at turpis tortor. Vivamus eu nisi vulputate, viverra velit eu, eleifend dolor. '),
(2, 'Em espera', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at turpis tortor. Vivamus eu nisi vulputate, viverra velit eu, eleifend dolor. '),
(3, 'Atrasado', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at turpis tortor. Vivamus eu nisi vulputate, viverra velit eu, eleifend dolor. '),
(4, 'Em consulta', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at turpis tortor. Vivamus eu nisi vulputate, viverra velit eu, eleifend dolor. '),
(5, 'Encerrado', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at turpis tortor. Vivamus eu nisi vulputate, viverra velit eu, eleifend dolor. ');

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
  MODIFY `codAtividade` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de tabela `consulta`
--
ALTER TABLE `consulta`
  MODIFY `codConsulta` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de tabela `empresa`
--
ALTER TABLE `empresa`
  MODIFY `codEmpresa` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de tabela `especialidade`
--
ALTER TABLE `especialidade`
  MODIFY `codEspecialidade` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de tabela `estado`
--
ALTER TABLE `estado`
  MODIFY `codEstado` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de tabela `exame`
--
ALTER TABLE `exame`
  MODIFY `codExame` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT de tabela `fatura`
--
ALTER TABLE `fatura`
  MODIFY `codFatura` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de tabela `funcao`
--
ALTER TABLE `funcao`
  MODIFY `codFuncao` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT de tabela `medico`
--
ALTER TABLE `medico`
  MODIFY `codMedico` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de tabela `paciente`
--
ALTER TABLE `paciente`
  MODIFY `codPaciente` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de tabela `subgrupo`
--
ALTER TABLE `subgrupo`
  MODIFY `codSubgrupo` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de tabela `tipoEstado`
--
ALTER TABLE `tipoEstado`
  MODIFY `codTipo` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
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
