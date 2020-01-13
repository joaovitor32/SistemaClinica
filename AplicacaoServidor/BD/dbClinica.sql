-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 13/01/2020 às 14:08
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
(5, 'Endemias', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.'),
(7, 'Reciclagem', 'Testum Ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sollicitudin erat, eget maximus lorem. Donec sit amet augue sit amet velit tristique lobortis sed aliquet elit. Etiam venenatis vitae erat vel pulvinar. Etiam quis ipsum et orci suscipit scelerisque nec ac nunc. Quisque pretium malesuada nibh sit amet pulvinar. Donec tempor mollis tempus. Donec ac nunc ante. Morbi fringilla magna libero, at maximus diam efficitur in. Morbi ultricies tortor at risus sagittis placerat. Fusce ullamcorper imperdiet lacus, a consectetur massa placerat at. Duis feugiat nisi eu auctor sollicitudin. Praesent tristique nunc eget lectus eleifend, a pellentesque purus convallis. Etiam tempor nibh a dui aliquet ultrices. Quisque maximus sem ut dolor iaculis, a congue enim ultrices. Sed posuere nisl elit, ac fermentum ligula viverra eg.');

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
(1, 2),
(1, 4),
(1, 8),
(2, 4),
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
  `status` tinyint(1) NOT NULL,
  `codTipoConsulta` bigint(20) NOT NULL,
  `validade` int(11) DEFAULT NULL,
  `codEmpresa` bigint(20) NOT NULL,
  `inicio` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `consulta`
--

INSERT INTO `consulta` (`codConsulta`, `codPaciente`, `dataHora`, `termino`, `status`, `codTipoConsulta`, `validade`, `codEmpresa`, `inicio`) VALUES
(3, 1, '2020-01-13 08:00:00', NULL, 0, 1, 12, 1, NULL),
(4, 2, '2020-01-10 09:00:00', NULL, 0, 2, 12, 2, NULL),
(5, 3, '2020-01-10 09:30:00', '2020-01-23 16:00:00', 1, 5, 12, 4, '2020-01-23 15:31:00');

-- --------------------------------------------------------

--
-- Estrutura para tabela `consulta_exame_medico`
--

CREATE TABLE `consulta_exame_medico` (
  `codConsulta` bigint(20) NOT NULL,
  `codExame` bigint(20) NOT NULL,
  `codMedico` bigint(20) DEFAULT NULL,
  `inicio` datetime DEFAULT NULL,
  `termino` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `consulta_exame_medico`
--

INSERT INTO `consulta_exame_medico` (`codConsulta`, `codExame`, `codMedico`, `inicio`, `termino`) VALUES
(3, 1, NULL, NULL, NULL),
(3, 2, NULL, NULL, NULL),
(3, 5, 2, NULL, NULL),
(4, 5, NULL, NULL, NULL),
(4, 8, 7, NULL, NULL),
(5, 1, NULL, NULL, NULL),
(5, 5, 2, NULL, NULL);

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
  `telefone1` varchar(15) NOT NULL,
  `telefone2` varchar(15) DEFAULT NULL,
  `tipoPgto` tinyint(1) NOT NULL,
  `rua` varchar(80) NOT NULL,
  `numero` int(11) NOT NULL,
  `bairro` varchar(50) NOT NULL,
  `cidade` varchar(50) NOT NULL,
  `estado` varchar(2) NOT NULL,
  `cep` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `empresa`
--

INSERT INTO `empresa` (`codEmpresa`, `nome`, `cnpj`, `telefone1`, `telefone2`, `tipoPgto`, `rua`, `numero`, `bairro`, `cidade`, `estado`, `cep`) VALUES
(1, 'FAOL', '30.538.060/0001-23', '(22)2523-1234', '(22)2523-1234', 0, 'Av. Gov. Roberto Silveira', 3612, 'Conselheiro Paulino', 'Nova Friburgo', 'RJ', '28635-000'),
(2, 'Auto Viação 1001', '30.069.314/0001-01', '(22)2523-5555', '(22)2523-5555', 1, 'Rod. Amaral Peixoto', 0, 'Pte. da Saudade', 'Nova Friburgo', 'RJ', '28615-055'),
(3, 'Serra Junior Engenharia S/C', '05.242.209/0001-85', '(22) 2533-2265', '(22) 2533-2265', 0, 'Rua Bonfim', 25, 'Vila Amelia', 'Nova Friburgo', 'RJ', '28625-570'),
(4, 'AUTO POSTO ESTRELA DE FRIBURGO LTDA', '09.547.489/0001-90', '(21)2474-1705', '(21)3835-1426', 0, 'RUA VEREADOR JOSE MARTINS DA COSTA', 163, 'PONTE DA SAUDADE', 'NOVA FRIBURGO', 'RJ', '28.615-055'),
(5, 'AUTO POSTO PLANETA', '09.547.489/0001-90', '(21)2474-1705', '(21)3835-1426', 0, 'RUA VEREADOR JOSE MARTINS DA COSTA', 163, 'PONTE DA SAUDADE', 'NOVA FRIBURGO', 'RJ', '28.615-055'),
(6, 'FFA ESTRUTURAS E SERVIÇOS LTDA', '08.375.450/0001-70', '(21) 3836-2300', '(21) 2656-6185', 1, 'RUA TANAGRA', 42, 'OLARIA', 'RIO DE JANEIRO', 'RJ', '21.031-560');

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
(3, 'Clínico Geral', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.'),
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
  `termino` datetime DEFAULT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `exame`
--

CREATE TABLE `exame` (
  `codExame` bigint(20) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `descricao` text NOT NULL,
  `preco` double NOT NULL,
  `codigo` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `exame`
--

INSERT INTO `exame` (`codExame`, `nome`, `descricao`, `preco`, `codigo`) VALUES
(1, 'Hemograma', 'Teste ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.', 200.99, '311448963'),
(2, 'Audiometria', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.', 30, '311448963'),
(3, 'Optometria', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.', 60, '208981615'),
(4, 'Endoscopia', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.', 199, '411693037'),
(5, 'Eletroencefalograma', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.', 78.5, '482645143'),
(6, 'Eletrocardiograma', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.', 69.99, '409239409'),
(7, 'Biópsia', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.', 300, '508342442'),
(8, 'Broncoscopia', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.', 250, '311875658'),
(9, 'Laringoscopia', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.', 150, '293564577'),
(10, 'Radiografia', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.', 225, '506693387');

-- --------------------------------------------------------

--
-- Estrutura para tabela `exame_especialidade`
--

CREATE TABLE `exame_especialidade` (
  `codExame` bigint(20) NOT NULL,
  `codEspecialidade` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `fatura`
--

CREATE TABLE `fatura` (
  `codFatura` bigint(20) NOT NULL,
  `codEmpresa` bigint(20) NOT NULL,
  `descricao` text,
  `status` tinyint(4) NOT NULL,
  `dataHora` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `funcao`
--

CREATE TABLE `funcao` (
  `codFuncao` bigint(20) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `descricao` text,
  `setor` varchar(50) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `funcao`
--

INSERT INTO `funcao` (`codFuncao`, `nome`, `descricao`, `setor`) VALUES
(1, 'Servente de Pedreiro', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.', 'Construção'),
(2, 'Costureiro', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.', 'Têxtil'),
(3, 'Auxiliar de Enfermagem', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.', 'Saúde'),
(4, 'Técnico em Química', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.', 'Indústria'),
(5, 'Torneiro Mecânico', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.', 'Metalmecânica'),
(6, 'Ferramenteiro', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.', 'Metalmecânica'),
(7, 'Cobrador', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.', 'Transporte'),
(8, 'Motorista ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.', 'Transporte'),
(9, 'Mecânico', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.', 'Reparos'),
(10, 'Lanterneiro', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor a ex a ultrices. Nulla vel consequat magna. Vivamus euismod eu dui congue dapibus. Maecenas ornare dapibus ex id rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc elementum sollicitudin facilisis. Nulla euismod neque in tempus pellentesque. Aliquam dignissim blandit purus a rhoncus. Aliquam at aliquet lorem. Nulla et leo porttitor, vehicula sapien at, elementum magna.', 'Reparos');

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
(1, 2),
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
  `crm` varchar(30) NOT NULL,
  `senha` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `medico`
--

INSERT INTO `medico` (`codMedico`, `nome`, `cpf`, `crm`, `senha`) VALUES
(1, 'Julia Barbosa Oliveira', '666.345.517-66', '920541', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'Luís Melo Souza', '646.036.897-05', '850772', '81dc9bdb52d04dc20036dbd8313ed055'),
(3, 'Murilo Sousa Cavalcanti', '116.280.887-02', '674230 ', '81dc9bdb52d04dc20036dbd8313ed055'),
(4, 'Vitór Martins Melo', '930.329.467-00', '891088', '81dc9bdb52d04dc20036dbd8313ed055'),
(5, 'Matilde Pereira Rodrigues', '202.366.387-34', '171664', '81dc9bdb52d04dc20036dbd8313ed055'),
(6, 'Magnim Pereira Rodrigues', '202.366.387-34', '999999', '81dc9bdb52d04dc20036dbd8313ed055'),
(7, 'MODELO', '000.000.000-00', '000000', '698d51a19d8a121ce581499d7b701668');

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
(1, 4),
(1, 5),
(2, 4),
(3, 2),
(4, 1),
(5, 1),
(7, 1),
(7, 2),
(7, 4),
(7, 5);

-- --------------------------------------------------------

--
-- Estrutura para tabela `paciente`
--

CREATE TABLE `paciente` (
  `codPaciente` bigint(20) NOT NULL,
  `nome` varchar(70) NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `rg` varchar(20) NOT NULL,
  `sexo` varchar(1) NOT NULL,
  `nascimento` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `paciente`
--

INSERT INTO `paciente` (`codPaciente`, `nome`, `cpf`, `rg`, `sexo`, `nascimento`) VALUES
(1, 'João Vitor Lopes', '242.242.240-24', '24.647.540-7', 'M', '2019-09-11'),
(2, 'Hugo Rangel', '069.069.069-69', '44.705.733-9', 'M', '2017-04-12'),
(3, 'Matheus Salles', '155.155.155-55', '34.613.448-1', 'M', '1976-01-01'),
(4, 'Bruno Reinoso', '157.157.157-57', '15.317.572-2', 'M', '1999-12-09'),
(5, 'Teste', '123', '123', 'F', '2019-12-02'),
(6, 'Teste', '123', '123', 'F', '2019-12-02');

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
(1, 'A', 10),
(2, 'A', 9),
(3, 'C', 1);

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

-- --------------------------------------------------------

--
-- Estrutura para tabela `tipo_consulta`
--

CREATE TABLE `tipo_consulta` (
  `codTipoConsulta` bigint(20) NOT NULL,
  `nome` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `tipo_consulta`
--

INSERT INTO `tipo_consulta` (`codTipoConsulta`, `nome`) VALUES
(1, 'ADMISSIONAL'),
(2, 'DEMISSIONAL'),
(3, 'PERIÓDICO'),
(4, 'RETORNO À ATIVIDADE'),
(5, 'MUDANÇA DE FUNÇÃO');

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
  ADD KEY `codPaciente` (`codPaciente`),
  ADD KEY `codTipoConsulta` (`codTipoConsulta`),
  ADD KEY `codEmpresa` (`codEmpresa`);

--
-- Índices de tabela `consulta_exame_medico`
--
ALTER TABLE `consulta_exame_medico`
  ADD PRIMARY KEY (`codConsulta`,`codExame`),
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
-- Índices de tabela `exame_especialidade`
--
ALTER TABLE `exame_especialidade`
  ADD KEY `codExame` (`codExame`,`codEspecialidade`),
  ADD KEY `codEspecialidade` (`codEspecialidade`);

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
-- Índices de tabela `tipo_consulta`
--
ALTER TABLE `tipo_consulta`
  ADD PRIMARY KEY (`codTipoConsulta`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `atividade`
--
ALTER TABLE `atividade`
  MODIFY `codAtividade` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT de tabela `consulta`
--
ALTER TABLE `consulta`
  MODIFY `codConsulta` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de tabela `empresa`
--
ALTER TABLE `empresa`
  MODIFY `codEmpresa` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
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
  MODIFY `codMedico` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT de tabela `paciente`
--
ALTER TABLE `paciente`
  MODIFY `codPaciente` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de tabela `subgrupo`
--
ALTER TABLE `subgrupo`
  MODIFY `codSubgrupo` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de tabela `tipoEstado`
--
ALTER TABLE `tipoEstado`
  MODIFY `codTipo` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de tabela `tipo_consulta`
--
ALTER TABLE `tipo_consulta`
  MODIFY `codTipoConsulta` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
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
  ADD CONSTRAINT `consulta_ibfk_1` FOREIGN KEY (`codPaciente`) REFERENCES `paciente` (`codPaciente`),
  ADD CONSTRAINT `consulta_ibfk_2` FOREIGN KEY (`codTipoConsulta`) REFERENCES `tipo_consulta` (`codTipoConsulta`),
  ADD CONSTRAINT `consulta_ibfk_3` FOREIGN KEY (`codEmpresa`) REFERENCES `empresa` (`codEmpresa`);

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
-- Restrições para tabelas `exame_especialidade`
--
ALTER TABLE `exame_especialidade`
  ADD CONSTRAINT `exame_especialidade_ibfk_1` FOREIGN KEY (`codExame`) REFERENCES `exame` (`codExame`),
  ADD CONSTRAINT `exame_especialidade_ibfk_2` FOREIGN KEY (`codEspecialidade`) REFERENCES `especialidade` (`codEspecialidade`);

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
