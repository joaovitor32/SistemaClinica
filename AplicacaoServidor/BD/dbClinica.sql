-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 06/02/2020 às 08:09
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
(1, 'Altura', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar tincidunt tellus. Integer vel nunc eu magna pellentesque cursus et eu odio. Duis sit amet arcu ac lacus sagittis interdum in finibus eros. Maecenas sit amet pellentesque mauris. Mauris dolor lectus, porttitor vitae urna quis, sollicitudin dignissim erat.'),
(2, 'Reciclagem', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar tincidunt tellus. Integer vel nunc eu magna pellentesque cursus et eu odio. Duis sit amet arcu ac lacus sagittis interdum in finibus eros. Maecenas sit amet pellentesque mauris. Mauris dolor lectus, porttitor vitae urna quis, sollicitudin dignissim erat.'),
(3, 'Ruído', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar tincidunt tellus. Integer vel nunc eu magna pellentesque cursus et eu odio. Duis sit amet arcu ac lacus sagittis interdum in finibus eros. Maecenas sit amet pellentesque mauris. Mauris dolor lectus, porttitor vitae urna quis, sollicitudin dignissim erat.'),
(4, 'Laticínios', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar tincidunt tellus. Integer vel nunc eu magna pellentesque cursus et eu odio. Duis sit amet arcu ac lacus sagittis interdum in finibus eros. Maecenas sit amet pellentesque mauris. Mauris dolor lectus, porttitor vitae urna quis, sollicitudin dignissim erat.'),
(5, 'Câmara fria', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar tincidunt tellus. Integer vel nunc eu magna pellentesque cursus et eu odio. Duis sit amet arcu ac lacus sagittis interdum in finibus eros. Maecenas sit amet pellentesque mauris. Mauris dolor lectus, porttitor vitae urna quis, sollicitudin dignissim erat.'),
(6, 'Salinas', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar tincidunt tellus. Integer vel nunc eu magna pellentesque cursus et eu odio. Duis sit amet arcu ac lacus sagittis interdum in finibus eros. Maecenas sit amet pellentesque mauris. Mauris dolor lectus, porttitor vitae urna quis, sollicitudin dignissim erat.'),
(7, 'Vinícolas', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar tincidunt tellus. Integer vel nunc eu magna pellentesque cursus et eu odio. Duis sit amet arcu ac lacus sagittis interdum in finibus eros. Maecenas sit amet pellentesque mauris. Mauris dolor lectus, porttitor vitae urna quis, sollicitudin dignissim erat.'),
(8, 'Cervejaria', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar tincidunt tellus. Integer vel nunc eu magna pellentesque cursus et eu odio. Duis sit amet arcu ac lacus sagittis interdum in finibus eros. Maecenas sit amet pellentesque mauris. Mauris dolor lectus, porttitor vitae urna quis, sollicitudin dignissim erat.'),
(9, 'Comércio', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar tincidunt tellus. Integer vel nunc eu magna pellentesque cursus et eu odio. Duis sit amet arcu ac lacus sagittis interdum in finibus eros. Maecenas sit amet pellentesque mauris. Mauris dolor lectus, porttitor vitae urna quis, sollicitudin dignissim erat.'),
(10, 'Mineração', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar tincidunt tellus. Integer vel nunc eu magna pellentesque cursus et eu odio. Duis sit amet arcu ac lacus sagittis interdum in finibus eros. Maecenas sit amet pellentesque mauris. Mauris dolor lectus, porttitor vitae urna quis, sollicitudin dignissim erat.');

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
(1, 2),
(1, 5),
(2, 2),
(2, 4),
(3, 1),
(3, 3),
(4, 2),
(4, 5),
(5, 1),
(5, 5),
(6, 2),
(6, 5),
(7, 4),
(7, 5),
(8, 3),
(8, 5),
(9, 2),
(9, 3),
(10, 1),
(10, 2);

-- --------------------------------------------------------

--
-- Estrutura para tabela `categoria_risco`
--

CREATE TABLE `categoria_risco` (
  `codCategoriaRisco` bigint(20) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `descricao` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `categoria_risco`
--

INSERT INTO `categoria_risco` (`codCategoriaRisco`, `nome`, `descricao`) VALUES
(1, 'Físicos', 'Riscos físicos são formas de energia a que os indivíduos podem estar expostos, como por exemplo: Ruído. Temperaturas Extremas (frio excessivo e calor intenso) Umidade.'),
(2, 'Químicos', 'Risco químico é a probabilidade da exposição ocupacional a agentes químicos. São riscos ambientais assim como os riscos biológicos e físicos. Agentes químicos são substâncias, misturas ou produtos que podem entrar no organismo do trabalhador, nas formas de vapor, poeira, gases, fumos, neblinas, névoas...'),
(3, 'Biológicos', 'Risco biológico é a probabilidade da exposição ocupacional a agentes biológicos. São riscos ambientais assim como os riscos químicos e os riscos físicos.'),
(4, 'Ergonômicos', 'Risco ergonômico é todo fator que possa interferir nas características psicofislológicas do trabalhador, causando desconforto ou afetando sua saúde. São exemplos de risco ergonômicos levantamento de peso, ritmo excessivo de trabalho, monotonia, repetitividade, postura inadequada de trabalho.');

-- --------------------------------------------------------

--
-- Estrutura para tabela `consulta`
--

CREATE TABLE `consulta` (
  `codConsulta` bigint(20) NOT NULL,
  `codTipoConsulta` bigint(20) NOT NULL,
  `codPaciente` bigint(20) NOT NULL,
  `codEmpresa` bigint(20) NOT NULL,
  `dataHora` datetime NOT NULL,
  `inicio` datetime DEFAULT NULL,
  `termino` datetime DEFAULT NULL,
  `validade` int(11) DEFAULT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `consulta`
--

INSERT INTO `consulta` (`codConsulta`, `codTipoConsulta`, `codPaciente`, `codEmpresa`, `dataHora`, `inicio`, `termino`, `validade`, `status`) VALUES
(1, 1, 1, 1, '2020-01-08 08:00:00', '2020-01-08 08:27:00', '2020-01-08 10:30:00', 12, 1),
(2, 2, 2, 2, '2020-02-18 08:00:00', NULL, NULL, 12, 1),
(3, 3, 3, 3, '2020-02-08 08:00:00', NULL, NULL, 6, 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `consulta_exame_profissional`
--

CREATE TABLE `consulta_exame_profissional` (
  `codConsulta` bigint(20) NOT NULL,
  `codExame` bigint(20) NOT NULL,
  `codProfissional` bigint(20) DEFAULT NULL,
  `inicio` datetime DEFAULT NULL,
  `termino` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `consulta_exame_profissional`
--

INSERT INTO `consulta_exame_profissional` (`codConsulta`, `codExame`, `codProfissional`, `inicio`, `termino`) VALUES
(1, 1, 1, '2020-01-08 09:13:00', '2020-01-08 09:30:00'),
(2, 2, 1, '2020-01-08 09:35:00', '2020-01-08 10:00:00'),
(3, 3, 3, '2020-01-08 10:03:00', '2020-01-08 10:30:00');

-- --------------------------------------------------------

--
-- Estrutura para tabela `consulta_fatura`
--

CREATE TABLE `consulta_fatura` (
  `codFatura` bigint(20) NOT NULL,
  `codConsulta` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `consulta_fatura`
--

INSERT INTO `consulta_fatura` (`codFatura`, `codConsulta`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `consulta_parecer`
--

CREATE TABLE `consulta_parecer` (
  `codConsulta` bigint(20) NOT NULL,
  `codParecer` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `consulta_parecer`
--

INSERT INTO `consulta_parecer` (`codConsulta`, `codParecer`) VALUES
(1, 2),
(1, 3),
(1, 8);

-- --------------------------------------------------------

--
-- Estrutura para tabela `empresa`
--

CREATE TABLE `empresa` (
  `codEmpresa` bigint(20) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `cnpj` varchar(18) DEFAULT NULL,
  `telefone1` varchar(15) DEFAULT NULL,
  `telefone2` varchar(15) DEFAULT NULL,
  `tipoPgto` tinyint(1) DEFAULT NULL,
  `rua` varchar(80) DEFAULT NULL,
  `numero` int(11) DEFAULT NULL,
  `bairro` varchar(50) DEFAULT NULL,
  `cidade` varchar(50) DEFAULT NULL,
  `estado` varchar(2) DEFAULT NULL,
  `cep` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `empresa`
--

INSERT INTO `empresa` (`codEmpresa`, `nome`, `cnpj`, `telefone1`, `telefone2`, `tipoPgto`, `rua`, `numero`, `bairro`, `cidade`, `estado`, `cep`) VALUES
(1, 'busyUP', '04.977.468/0001-91', '(22) 2531-1234', NULL, 1, 'Rua Isidro Rocha', 503, 'Barbara', 'Itaboraí', 'RJ', '27273-605'),
(2, 'DATACLEAR', '28.048.859/0001-90', '(22) 2531-4321', '(21) 2833-2935', 0, 'Rua Sedopiro Freire Ribeiro', 105, 'Parque Guandu', 'Itaboraí', 'RJ', '23845-090'),
(3, 'AllSafe', '68.942.727/0001-21', '(22) 2531-2341', NULL, 1, 'Rua Miguel Duarte Pinto', 289, 'Parque Guandu', 'Itaboraí', 'RJ', '23845-090'),
(4, 'RotaPasso', '80.122.046/0001-12', '(22) 2531-2314', '(24) 3722-2484', 0, 'Rua Esmeraldina', 111, 'Parque Guandu', 'Itaboraí', 'RJ', '23845-090'),
(5, 'Versix', '51.226.257/0001-05', '(22) 2531-3124', NULL, 1, 'Avenida Beira-Rio', 123, 'Guaxindiba', 'Duque de Caxias', 'RJ', '26413-250'),
(6, 'Sincronex', '54.863.005/0001-77', '(22) 2531-3142', NULL, 0, 'Rua Neves', 321, 'Guaxindiba', 'Duque de Caxias', 'RJ', '26413-250'),
(7, 'SuperVisa Ti', '40.377.905/0001-08', '(22) 2531-4123', '(21) 3574-6344', 1, 'Rua Neves', 43, 'Guaxindiba', 'Duque de Caxias', 'RJ', '28895-202'),
(8, 'CLÍNICA SORRIR', '07.344.759/0001-30', '(22) 2531-4312', '(21) 3716-1905', 0, 'Rua Neves', 546, 'Cerâmica', 'Macaé', 'RJ', '28895-202'),
(9, 'SorrisoVital', '33.724.508/0001-91', '(22) 2531-3234', NULL, 0, 'Rua Neves', 423, 'Cerâmica', 'Nova Friburgo', 'RJ', '25922-244'),
(10, 'UniSalut', '03.646.515/0001-51', '(22) 2531-1111', '(21) 3750-5648', 1, 'Rua Manoel Antunes de Figueiredo', 6535, 'Cerâmica', 'Nova Friburgo', 'RJ', '25922-244'),
(11, 'Tandarts', '29.705.873/0001-81', '(22) 2531-2222', NULL, 0, 'Rua Manoel Antunes de Figueiredo', 1231, 'Cerâmica', 'Nova Friburgo', 'RJ', '25922-244'),
(12, 'Vivere', '99.559.940/0001-82', '(22) 2531-3333', NULL, 0, 'Rua Manoel Antunes de Figueiredo', 3145, 'São Geraldo', 'Nova Friburgo', 'RJ', '25922-244'),
(13, 'Imponenthis', '45.194.959/0001-43', '(22) 2531-4444', NULL, 1, 'Rua Manoel Antunes de Figueiredo', 9, 'Itaim Paulista', 'São Paulo', 'SP', '25922-244');

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
(1, 1, 1, NULL, NULL, NULL),
(2, 2, 2, NULL, NULL, NULL),
(3, 3, 3, NULL, NULL, NULL),
(4, 4, 4, NULL, NULL, NULL),
(5, 5, 5, NULL, NULL, NULL),
(6, 6, 6, 1, NULL, NULL),
(7, 7, 7, 2, NULL, NULL),
(8, 8, 8, 3, NULL, NULL),
(9, 9, 9, 4, NULL, NULL),
(10, 10, 10, 5, NULL, NULL),
(10, 14, 18, NULL, NULL, NULL),
(10, 15, 19, NULL, NULL, NULL),
(11, 11, 15, 6, NULL, NULL),
(12, 12, 16, NULL, NULL, NULL),
(13, 13, 17, NULL, NULL, NULL);

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
(1, 'Clínico Geral', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.'),
(2, 'Cardiologista', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.'),
(3, 'Neurologista', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.');

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

--
-- Fazendo dump de dados para tabela `estado`
--

INSERT INTO `estado` (`codEstado`, `codTipo`, `codConsulta`, `inicio`, `termino`, `ativo`) VALUES
(1, 1, 1, '2020-01-05 12:00:00', '2020-01-08 08:27:00', 0),
(2, 4, 1, '2020-01-08 08:00:00', '2020-01-08 08:27:00', 0),
(3, 3, 1, '2020-01-08 08:27:00', '2020-01-08 09:13:00', 0),
(4, 5, 1, '2020-01-08 09:13:00', '2020-01-08 09:30:00', 0),
(5, 3, 1, '2020-01-08 09:30:00', '2020-01-08 09:35:00', 0),
(6, 5, 1, '2020-01-08 09:35:00', '2020-01-08 10:00:00', 0),
(7, 3, 1, '2020-01-08 10:00:00', '2020-01-08 10:03:00', 0),
(8, 5, 1, '2020-01-08 10:03:00', '2020-01-08 10:30:00', 0),
(9, 6, 1, '2020-01-08 10:30:00', '2020-01-08 10:30:00', 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `exame`
--

CREATE TABLE `exame` (
  `codExame` bigint(20) NOT NULL,
  `codigo` varchar(20) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `descricao` text,
  `preco` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `exame`
--

INSERT INTO `exame` (`codExame`, `codigo`, `nome`, `descricao`, `preco`) VALUES
(1, '10101136', 'Exame Clínico - ASO', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 200),
(2, '40302040', 'Glicose', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 499.99),
(3, '40313158', 'Fenol', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 300),
(4, '40304361', 'Hemograma Completo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 199.55),
(5, '40101010', 'ECG', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 99.85);

-- --------------------------------------------------------

--
-- Estrutura para tabela `exame_especialidade`
--

CREATE TABLE `exame_especialidade` (
  `codExame` bigint(20) NOT NULL,
  `codEspecialidade` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `exame_especialidade`
--

INSERT INTO `exame_especialidade` (`codExame`, `codEspecialidade`) VALUES
(1, 1),
(1, 3),
(2, 1),
(3, 1),
(3, 2),
(4, 2),
(4, 3),
(5, 3);

-- --------------------------------------------------------

--
-- Estrutura para tabela `fatura`
--

CREATE TABLE `fatura` (
  `codFatura` bigint(20) NOT NULL,
  `codEmpresa` bigint(20) NOT NULL,
  `dataHora` datetime DEFAULT NULL,
  `descricao` text,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `fatura`
--

INSERT INTO `fatura` (`codFatura`, `codEmpresa`, `dataHora`, `descricao`, `status`) VALUES
(1, 1, '2020-01-15 10:30:00', 'Fatura da empresa pela consulta em 08/01/2020.', 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `funcao`
--

CREATE TABLE `funcao` (
  `codFuncao` bigint(20) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `setor` varchar(50) NOT NULL,
  `descricao` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `funcao`
--

INSERT INTO `funcao` (`codFuncao`, `nome`, `setor`, `descricao`) VALUES
(1, 'Abastecedor de caldeira', 'Veículos', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar tincidunt tellus. Integer vel nunc eu magna pellentesque cursus et eu odio. Duis sit amet arcu ac lacus sagittis interdum in finibus eros. Maecenas sit amet pellentesque mauris. Mauris dolor lectus, porttitor vitae urna quis, sollicitudin dignissim erat.'),
(2, 'Abelheiro', 'Comércio', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar tincidunt tellus. Integer vel nunc eu magna pellentesque cursus et eu odio. Duis sit amet arcu ac lacus sagittis interdum in finibus eros. Maecenas sit amet pellentesque mauris. Mauris dolor lectus, porttitor vitae urna quis, sollicitudin dignissim erat.'),
(3, 'Acupuntor', 'Comércio', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar tincidunt tellus. Integer vel nunc eu magna pellentesque cursus et eu odio. Duis sit amet arcu ac lacus sagittis interdum in finibus eros. Maecenas sit amet pellentesque mauris. Mauris dolor lectus, porttitor vitae urna quis, sollicitudin dignissim erat.'),
(4, 'Advogado', 'Indústria', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar tincidunt tellus. Integer vel nunc eu magna pellentesque cursus et eu odio. Duis sit amet arcu ac lacus sagittis interdum in finibus eros. Maecenas sit amet pellentesque mauris. Mauris dolor lectus, porttitor vitae urna quis, sollicitudin dignissim erat.'),
(5, 'Afiador manual', 'Comércio', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar tincidunt tellus. Integer vel nunc eu magna pellentesque cursus et eu odio. Duis sit amet arcu ac lacus sagittis interdum in finibus eros. Maecenas sit amet pellentesque mauris. Mauris dolor lectus, porttitor vitae urna quis, sollicitudin dignissim erat.'),
(6, 'Torneiro Mecânico', 'Indústria', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar tincidunt tellus. Integer vel nunc eu magna pellentesque cursus et eu odio. Duis sit amet arcu ac lacus sagittis interdum in finibus eros. Maecenas sit amet pellentesque mauris. Mauris dolor lectus, porttitor vitae urna quis, sollicitudin dignissim erat.'),
(7, 'Lanterneiro', 'Veículos', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar tincidunt tellus. Integer vel nunc eu magna pellentesque cursus et eu odio. Duis sit amet arcu ac lacus sagittis interdum in finibus eros. Maecenas sit amet pellentesque mauris. Mauris dolor lectus, porttitor vitae urna quis, sollicitudin dignissim erat.'),
(8, 'Catador', 'Veículos', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar tincidunt tellus. Integer vel nunc eu magna pellentesque cursus et eu odio. Duis sit amet arcu ac lacus sagittis interdum in finibus eros. Maecenas sit amet pellentesque mauris. Mauris dolor lectus, porttitor vitae urna quis, sollicitudin dignissim erat.'),
(9, 'Médico', 'Científico', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar tincidunt tellus. Integer vel nunc eu magna pellentesque cursus et eu odio. Duis sit amet arcu ac lacus sagittis interdum in finibus eros. Maecenas sit amet pellentesque mauris. Mauris dolor lectus, porttitor vitae urna quis, sollicitudin dignissim erat.'),
(10, 'Enfermeiro', 'Científico', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar tincidunt tellus. Integer vel nunc eu magna pellentesque cursus et eu odio. Duis sit amet arcu ac lacus sagittis interdum in finibus eros. Maecenas sit amet pellentesque mauris. Mauris dolor lectus, porttitor vitae urna quis, sollicitudin dignissim erat.'),
(11, 'Vigia', 'Comércio', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar tincidunt tellus. Integer vel nunc eu magna pellentesque cursus et eu odio. Duis sit amet arcu ac lacus sagittis interdum in finibus eros. Maecenas sit amet pellentesque mauris. Mauris dolor lectus, porttitor vitae urna quis, sollicitudin dignissim erat.'),
(12, 'Auxiliar de Serviços Gerais', 'Comércio', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar tincidunt tellus. Integer vel nunc eu magna pellentesque cursus et eu odio. Duis sit amet arcu ac lacus sagittis interdum in finibus eros. Maecenas sit amet pellentesque mauris. Mauris dolor lectus, porttitor vitae urna quis, sollicitudin dignissim erat.'),
(13, 'Agenciador', 'Comércio', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar tincidunt tellus. Integer vel nunc eu magna pellentesque cursus et eu odio. Duis sit amet arcu ac lacus sagittis interdum in finibus eros. Maecenas sit amet pellentesque mauris. Mauris dolor lectus, porttitor vitae urna quis, sollicitudin dignissim erat.'),
(14, 'Motorista', 'Veículos', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar tincidunt tellus. Integer vel nunc eu magna pellentesque cursus et eu odio. Duis sit amet arcu ac lacus sagittis interdum in finibus eros. Maecenas sit amet pellentesque mauris. Mauris dolor lectus, porttitor vitae urna quis, sollicitudin dignissim erat.'),
(15, 'Costureiro', 'Indústria', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar tincidunt tellus. Integer vel nunc eu magna pellentesque cursus et eu odio. Duis sit amet arcu ac lacus sagittis interdum in finibus eros. Maecenas sit amet pellentesque mauris. Mauris dolor lectus, porttitor vitae urna quis, sollicitudin dignissim erat.'),
(16, 'Pesquisador', 'Veículos', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar tincidunt tellus. Integer vel nunc eu magna pellentesque cursus et eu odio. Duis sit amet arcu ac lacus sagittis interdum in finibus eros. Maecenas sit amet pellentesque mauris. Mauris dolor lectus, porttitor vitae urna quis, sollicitudin dignissim erat.'),
(17, 'Degustador', 'Comércio', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar tincidunt tellus. Integer vel nunc eu magna pellentesque cursus et eu odio. Duis sit amet arcu ac lacus sagittis interdum in finibus eros. Maecenas sit amet pellentesque mauris. Mauris dolor lectus, porttitor vitae urna quis, sollicitudin dignissim erat.'),
(18, 'Técnico em Química', 'Científico', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar tincidunt tellus. Integer vel nunc eu magna pellentesque cursus et eu odio. Duis sit amet arcu ac lacus sagittis interdum in finibus eros. Maecenas sit amet pellentesque mauris. Mauris dolor lectus, porttitor vitae urna quis, sollicitudin dignissim erat.'),
(19, 'Físico', 'Científico', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar tincidunt tellus. Integer vel nunc eu magna pellentesque cursus et eu odio. Duis sit amet arcu ac lacus sagittis interdum in finibus eros. Maecenas sit amet pellentesque mauris. Mauris dolor lectus, porttitor vitae urna quis, sollicitudin dignissim erat.'),
(20, 'Feirante', 'Comércio', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar tincidunt tellus. Integer vel nunc eu magna pellentesque cursus et eu odio. Duis sit amet arcu ac lacus sagittis interdum in finibus eros. Maecenas sit amet pellentesque mauris. Mauris dolor lectus, porttitor vitae urna quis, sollicitudin dignissim erat.');

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
(6, 1),
(7, 2),
(8, 3),
(9, 4),
(10, 5),
(11, 1),
(12, 2),
(13, 3),
(14, 4),
(15, 5),
(16, 1),
(17, 2),
(18, 3),
(19, 4),
(20, 5);

-- --------------------------------------------------------

--
-- Estrutura para tabela `paciente`
--

CREATE TABLE `paciente` (
  `codPaciente` bigint(20) NOT NULL,
  `nome` varchar(70) NOT NULL,
  `cpf` varchar(14) DEFAULT NULL,
  `rg` varchar(20) DEFAULT NULL,
  `sexo` varchar(1) DEFAULT NULL,
  `nascimento` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `paciente`
--

INSERT INTO `paciente` (`codPaciente`, `nome`, `cpf`, `rg`, `sexo`, `nascimento`) VALUES
(1, 'Augusto Caleb Peixoto', '391.484.309-86', '37.695.089-4', 'M', '1990-02-01'),
(2, 'Nelson Heitor Severino Alves', '387.329.281-57', '25.515.562-1', 'M', '1990-02-02'),
(3, 'Tânia Adriana Maya Peixoto', '196.424.538-00', '11.486.946-3', 'M', '1990-02-03'),
(4, 'Luciana Elza Silveira', '296.523.538-00', '21.386.946-3', 'F', '1990-02-04'),
(5, 'Allana Alana Ribeiro', '396.622.538-00', '31.286.946-3', 'F', '1990-02-05'),
(6, 'Allana Nair Jesus', '496.421.538-00', '41.186.946-3', 'F', '1990-02-06'),
(7, 'Kevin Edson Silva', '411.216.101-03', '21.234.242-6', 'M', '1990-02-07'),
(8, 'Henry Davi Gustavo dos Santos', '423.186.151-03', '22.238.242-6', 'M', '1990-02-08'),
(9, 'Manoel Márcio Arthur Farias', '434.281.181-03', '23.228.242-6', 'M', '1990-02-09'),
(10, 'Stella Sophie Galvão', '441.236.151-03', '24.218.242-6', 'F', '1990-02-10'),
(11, 'Sabrina Heloisa Pinto', '112.145.242-82', '15.952.577-2', 'F', '1990-02-11'),
(12, 'Thiago Arthur Sebastião Castro', '234.245.242-82', '65.941.577-2', 'M', '1990-02-12'),
(13, 'Caio Francisco Davi Aragão', '656.345.242-82', '65.932.577-2', 'M', '1990-02-13'),
(14, 'Priscila Luzia Rayssa Caldeira', '178.445.242-82', '65.925.577-2', 'F', '1990-02-14'),
(15, 'Bruno Enzo da Conceição', '123.545.242-32', '75.912.577-2', 'M', '1990-02-15');

-- --------------------------------------------------------

--
-- Estrutura para tabela `parecer`
--

CREATE TABLE `parecer` (
  `codParecer` bigint(20) NOT NULL,
  `nome` varchar(75) NOT NULL,
  `descricao` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `parecer`
--

INSERT INTO `parecer` (`codParecer`, `nome`, `descricao`) VALUES
(1, 'Apto para função', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.'),
(2, 'Apto NR 10', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.'),
(3, 'Apto NR 33', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.'),
(4, 'Apto NR 35', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.'),
(5, 'Inapto para função', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.'),
(6, 'Inapto NR 10', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.'),
(7, 'Inapto NR 33', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.'),
(8, 'Inapto NR 35', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.'),
(9, 'Apto para função com restrição', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.'),
(10, 'Apto para função com restrição NR 10', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.'),
(11, 'Apto para função com restrição NR 33', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.'),
(12, 'Apto para função com restrição NR 35', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.');

-- --------------------------------------------------------

--
-- Estrutura para tabela `profissional`
--

CREATE TABLE `profissional` (
  `codProfissional` bigint(20) NOT NULL,
  `nome` varchar(70) NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `identificacao` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `profissional`
--

INSERT INTO `profissional` (`codProfissional`, `nome`, `cpf`, `identificacao`) VALUES
(1, 'Bruno Enzo da Conceição', '197.013.233-78', '27.133.948-2'),
(2, 'Bruno Jorge Teixeira', '233.393.460-38', '23.019.922-7'),
(3, 'Jaqueline Luana da Mata', '792.623.301-38', '20.074.244-9'),
(4, 'Filipe André Silveira', '441.045.321-02', '13.953.645-1'),
(5, 'Amanda Nair Eduarda Souza', '123.045.689-02', '88.312.906-7'),
(6, 'Ana Francisca Gonçalves', '111.123.677-02', '45.543.906-5');

-- --------------------------------------------------------

--
-- Estrutura para tabela `profissional_especialidade`
--

CREATE TABLE `profissional_especialidade` (
  `codProfissional` bigint(20) NOT NULL,
  `codEspecialidade` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `profissional_especialidade`
--

INSERT INTO `profissional_especialidade` (`codProfissional`, `codEspecialidade`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 1),
(5, 2),
(6, 3);

-- --------------------------------------------------------

--
-- Estrutura para tabela `risco`
--

CREATE TABLE `risco` (
  `codRisco` bigint(20) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `descricao` text NOT NULL,
  `codCategoriaRisco` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `risco`
--

INSERT INTO `risco` (`codRisco`, `nome`, `descricao`, `codCategoriaRisco`) VALUES
(1, 'Ruídos', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 1),
(2, 'Pressão Anormal', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 1),
(3, 'Temperatura Extrema', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 1),
(4, 'Ultra-som', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 1),
(5, 'Infra-vermelho', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 1),
(6, 'Radiações Ionizantes', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 1),
(7, 'Gases', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 2),
(8, 'Poeiras', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 2),
(9, 'Fumos', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 2),
(10, 'Vapores', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 2),
(11, 'Neblinas', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 2),
(12, 'Névoas', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 2),
(13, 'Vírus', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 3),
(14, 'Protozoários', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 3),
(15, 'Bacilos', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 3),
(16, 'Parasitas', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 3),
(17, 'Bactérias', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 3),
(18, 'Fungos', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 3),
(19, 'Esforço Físico Intenso', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 4),
(20, 'Jornada de Trabalho Intensa', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 4),
(21, 'Controle Rígido de Produtivida', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 4),
(22, 'Imposição de Ritmos Excessivos', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 4),
(23, 'Monotonia e Repetitividade', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 4),
(24, 'Levantamento e Transporte Manu', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 4),
(25, 'Trabalho Noturno', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 4),
(26, 'Outros', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.', 4);

-- --------------------------------------------------------

--
-- Estrutura para tabela `risco_exame`
--

CREATE TABLE `risco_exame` (
  `codRisco` bigint(20) NOT NULL,
  `codExame` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `risco_exame`
--

INSERT INTO `risco_exame` (`codRisco`, `codExame`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 1),
(7, 2),
(8, 3),
(9, 4),
(10, 5),
(11, 1),
(12, 2),
(13, 3),
(14, 4),
(15, 5),
(16, 1),
(17, 2),
(18, 3),
(19, 4),
(20, 5),
(21, 1),
(22, 2),
(23, 3),
(24, 4),
(25, 5),
(26, 5);

-- --------------------------------------------------------

--
-- Estrutura para tabela `sala`
--

CREATE TABLE `sala` (
  `codSala` bigint(20) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `descricao` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `sala`
--

INSERT INTO `sala` (`codSala`, `nome`, `descricao`) VALUES
(1, 'Sala 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna.'),
(2, 'Sala 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna.'),
(3, 'Sala 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna.');

-- --------------------------------------------------------

--
-- Estrutura para tabela `sala_exame`
--

CREATE TABLE `sala_exame` (
  `codSala` bigint(20) NOT NULL,
  `codExame` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `sala_exame`
--

INSERT INTO `sala_exame` (`codSala`, `codExame`) VALUES
(1, 1),
(1, 4),
(2, 2),
(2, 5),
(3, 3);

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
(1, 'A', 6),
(2, 'B', 7),
(3, 'C', 8),
(4, 'A', 9),
(5, 'B', 10),
(6, 'A', 15);

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
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(6, 5),
(7, 6);

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

-- --------------------------------------------------------

--
-- Estrutura para tabela `tipo_estado`
--

CREATE TABLE `tipo_estado` (
  `codTipo` bigint(20) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `descricao` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Fazendo dump de dados para tabela `tipo_estado`
--

INSERT INTO `tipo_estado` (`codTipo`, `nome`, `descricao`) VALUES
(1, 'Agendado', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.'),
(2, 'Cancelado', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.'),
(3, 'Em espera', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.'),
(4, 'Atrasado', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.'),
(5, 'Em consulta', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.'),
(6, 'Encerrado', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed odio urna. Phasellus faucibus diam at dignissim sollicitudin. Nunc nisl neque, luctus vel erat in, pulvinar.');

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
-- Índices de tabela `categoria_risco`
--
ALTER TABLE `categoria_risco`
  ADD PRIMARY KEY (`codCategoriaRisco`);

--
-- Índices de tabela `consulta`
--
ALTER TABLE `consulta`
  ADD PRIMARY KEY (`codConsulta`),
  ADD KEY `codPaciente` (`codPaciente`),
  ADD KEY `codEmpresa` (`codEmpresa`),
  ADD KEY `codTipoConsulta` (`codTipoConsulta`);

--
-- Índices de tabela `consulta_exame_profissional`
--
ALTER TABLE `consulta_exame_profissional`
  ADD PRIMARY KEY (`codConsulta`,`codExame`),
  ADD KEY `codExame` (`codExame`),
  ADD KEY `codProfissional` (`codProfissional`);

--
-- Índices de tabela `consulta_fatura`
--
ALTER TABLE `consulta_fatura`
  ADD PRIMARY KEY (`codFatura`,`codConsulta`),
  ADD KEY `codConsulta` (`codConsulta`);

--
-- Índices de tabela `consulta_parecer`
--
ALTER TABLE `consulta_parecer`
  ADD PRIMARY KEY (`codConsulta`,`codParecer`),
  ADD KEY `codParecer` (`codParecer`);

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
  ADD PRIMARY KEY (`codExame`,`codEspecialidade`),
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
-- Índices de tabela `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`codPaciente`);

--
-- Índices de tabela `parecer`
--
ALTER TABLE `parecer`
  ADD PRIMARY KEY (`codParecer`);

--
-- Índices de tabela `profissional`
--
ALTER TABLE `profissional`
  ADD PRIMARY KEY (`codProfissional`);

--
-- Índices de tabela `profissional_especialidade`
--
ALTER TABLE `profissional_especialidade`
  ADD PRIMARY KEY (`codProfissional`,`codEspecialidade`),
  ADD KEY `codEspecialidade` (`codEspecialidade`);

--
-- Índices de tabela `risco`
--
ALTER TABLE `risco`
  ADD PRIMARY KEY (`codRisco`),
  ADD KEY `codCategoriaRisco` (`codCategoriaRisco`);

--
-- Índices de tabela `risco_exame`
--
ALTER TABLE `risco_exame`
  ADD PRIMARY KEY (`codRisco`,`codExame`),
  ADD KEY `codExame` (`codExame`);

--
-- Índices de tabela `sala`
--
ALTER TABLE `sala`
  ADD PRIMARY KEY (`codSala`);

--
-- Índices de tabela `sala_exame`
--
ALTER TABLE `sala_exame`
  ADD PRIMARY KEY (`codSala`,`codExame`),
  ADD KEY `codExame` (`codExame`);

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
-- Índices de tabela `tipo_consulta`
--
ALTER TABLE `tipo_consulta`
  ADD PRIMARY KEY (`codTipoConsulta`);

--
-- Índices de tabela `tipo_estado`
--
ALTER TABLE `tipo_estado`
  ADD PRIMARY KEY (`codTipo`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `atividade`
--
ALTER TABLE `atividade`
  MODIFY `codAtividade` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT de tabela `categoria_risco`
--
ALTER TABLE `categoria_risco`
  MODIFY `codCategoriaRisco` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de tabela `consulta`
--
ALTER TABLE `consulta`
  MODIFY `codConsulta` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de tabela `empresa`
--
ALTER TABLE `empresa`
  MODIFY `codEmpresa` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT de tabela `especialidade`
--
ALTER TABLE `especialidade`
  MODIFY `codEspecialidade` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de tabela `estado`
--
ALTER TABLE `estado`
  MODIFY `codEstado` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT de tabela `exame`
--
ALTER TABLE `exame`
  MODIFY `codExame` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de tabela `fatura`
--
ALTER TABLE `fatura`
  MODIFY `codFatura` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de tabela `funcao`
--
ALTER TABLE `funcao`
  MODIFY `codFuncao` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT de tabela `paciente`
--
ALTER TABLE `paciente`
  MODIFY `codPaciente` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT de tabela `parecer`
--
ALTER TABLE `parecer`
  MODIFY `codParecer` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT de tabela `profissional`
--
ALTER TABLE `profissional`
  MODIFY `codProfissional` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de tabela `risco`
--
ALTER TABLE `risco`
  MODIFY `codRisco` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT de tabela `sala`
--
ALTER TABLE `sala`
  MODIFY `codSala` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de tabela `subgrupo`
--
ALTER TABLE `subgrupo`
  MODIFY `codSubgrupo` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de tabela `tipo_consulta`
--
ALTER TABLE `tipo_consulta`
  MODIFY `codTipoConsulta` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de tabela `tipo_estado`
--
ALTER TABLE `tipo_estado`
  MODIFY `codTipo` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `atividade_exame`
--
ALTER TABLE `atividade_exame`
  ADD CONSTRAINT `atividade_exame_ibfk_1` FOREIGN KEY (`codAtividade`) REFERENCES `atividade` (`codAtividade`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `atividade_exame_ibfk_2` FOREIGN KEY (`codExame`) REFERENCES `exame` (`codExame`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restrições para tabelas `consulta`
--
ALTER TABLE `consulta`
  ADD CONSTRAINT `consulta_ibfk_1` FOREIGN KEY (`codPaciente`) REFERENCES `paciente` (`codPaciente`) ON UPDATE CASCADE,
  ADD CONSTRAINT `consulta_ibfk_2` FOREIGN KEY (`codEmpresa`) REFERENCES `empresa` (`codEmpresa`) ON UPDATE CASCADE,
  ADD CONSTRAINT `consulta_ibfk_3` FOREIGN KEY (`codTipoConsulta`) REFERENCES `tipo_consulta` (`codTipoConsulta`) ON UPDATE CASCADE;

--
-- Restrições para tabelas `consulta_exame_profissional`
--
ALTER TABLE `consulta_exame_profissional`
  ADD CONSTRAINT `consulta_exame_profissional_ibfk_1` FOREIGN KEY (`codConsulta`) REFERENCES `consulta` (`codConsulta`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `consulta_exame_profissional_ibfk_2` FOREIGN KEY (`codExame`) REFERENCES `exame` (`codExame`) ON UPDATE CASCADE,
  ADD CONSTRAINT `consulta_exame_profissional_ibfk_3` FOREIGN KEY (`codProfissional`) REFERENCES `profissional` (`codProfissional`) ON UPDATE CASCADE;

--
-- Restrições para tabelas `consulta_fatura`
--
ALTER TABLE `consulta_fatura`
  ADD CONSTRAINT `consulta_fatura_ibfk_1` FOREIGN KEY (`codFatura`) REFERENCES `fatura` (`codFatura`) ON UPDATE CASCADE,
  ADD CONSTRAINT `consulta_fatura_ibfk_2` FOREIGN KEY (`codConsulta`) REFERENCES `consulta` (`codConsulta`) ON UPDATE CASCADE;

--
-- Restrições para tabelas `consulta_parecer`
--
ALTER TABLE `consulta_parecer`
  ADD CONSTRAINT `consulta_parecer_ibfk_1` FOREIGN KEY (`codConsulta`) REFERENCES `consulta` (`codConsulta`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `consulta_parecer_ibfk_2` FOREIGN KEY (`codParecer`) REFERENCES `parecer` (`codParecer`) ON UPDATE CASCADE;

--
-- Restrições para tabelas `empresa_paciente_funcao`
--
ALTER TABLE `empresa_paciente_funcao`
  ADD CONSTRAINT `empresa_paciente_funcao_ibfk_1` FOREIGN KEY (`codEmpresa`) REFERENCES `empresa` (`codEmpresa`) ON UPDATE CASCADE,
  ADD CONSTRAINT `empresa_paciente_funcao_ibfk_2` FOREIGN KEY (`codPaciente`) REFERENCES `paciente` (`codPaciente`) ON UPDATE CASCADE,
  ADD CONSTRAINT `empresa_paciente_funcao_ibfk_3` FOREIGN KEY (`codFuncao`) REFERENCES `funcao` (`codFuncao`) ON UPDATE CASCADE,
  ADD CONSTRAINT `empresa_paciente_funcao_ibfk_4` FOREIGN KEY (`codSubgrupo`) REFERENCES `subgrupo` (`codSubgrupo`) ON UPDATE CASCADE;

--
-- Restrições para tabelas `estado`
--
ALTER TABLE `estado`
  ADD CONSTRAINT `estado_ibfk_1` FOREIGN KEY (`codConsulta`) REFERENCES `consulta` (`codConsulta`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `estado_ibfk_2` FOREIGN KEY (`codTipo`) REFERENCES `tipo_estado` (`codTipo`) ON UPDATE CASCADE;

--
-- Restrições para tabelas `exame_especialidade`
--
ALTER TABLE `exame_especialidade`
  ADD CONSTRAINT `exame_especialidade_ibfk_1` FOREIGN KEY (`codExame`) REFERENCES `exame` (`codExame`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `exame_especialidade_ibfk_2` FOREIGN KEY (`codEspecialidade`) REFERENCES `especialidade` (`codEspecialidade`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restrições para tabelas `fatura`
--
ALTER TABLE `fatura`
  ADD CONSTRAINT `fatura_ibfk_1` FOREIGN KEY (`codEmpresa`) REFERENCES `empresa` (`codEmpresa`) ON UPDATE CASCADE;

--
-- Restrições para tabelas `funcao_exame`
--
ALTER TABLE `funcao_exame`
  ADD CONSTRAINT `funcao_exame_ibfk_1` FOREIGN KEY (`codFuncao`) REFERENCES `funcao` (`codFuncao`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `funcao_exame_ibfk_2` FOREIGN KEY (`codExame`) REFERENCES `exame` (`codExame`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restrições para tabelas `profissional_especialidade`
--
ALTER TABLE `profissional_especialidade`
  ADD CONSTRAINT `profissional_especialidade_ibfk_1` FOREIGN KEY (`codProfissional`) REFERENCES `profissional` (`codProfissional`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `profissional_especialidade_ibfk_2` FOREIGN KEY (`codEspecialidade`) REFERENCES `especialidade` (`codEspecialidade`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restrições para tabelas `risco`
--
ALTER TABLE `risco`
  ADD CONSTRAINT `risco_ibfk_1` FOREIGN KEY (`codCategoriaRisco`) REFERENCES `categoria_risco` (`codCategoriaRisco`) ON UPDATE CASCADE;

--
-- Restrições para tabelas `risco_exame`
--
ALTER TABLE `risco_exame`
  ADD CONSTRAINT `risco_exame_ibfk_1` FOREIGN KEY (`codRisco`) REFERENCES `risco` (`codRisco`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `risco_exame_ibfk_2` FOREIGN KEY (`codExame`) REFERENCES `exame` (`codExame`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restrições para tabelas `sala_exame`
--
ALTER TABLE `sala_exame`
  ADD CONSTRAINT `sala_exame_ibfk_1` FOREIGN KEY (`codSala`) REFERENCES `sala` (`codSala`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sala_exame_ibfk_2` FOREIGN KEY (`codExame`) REFERENCES `exame` (`codExame`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restrições para tabelas `subgrupo`
--
ALTER TABLE `subgrupo`
  ADD CONSTRAINT `subgrupo_ibfk_1` FOREIGN KEY (`codFuncao`) REFERENCES `funcao` (`codFuncao`) ON UPDATE CASCADE;

--
-- Restrições para tabelas `subgrupo_atividade`
--
ALTER TABLE `subgrupo_atividade`
  ADD CONSTRAINT `subgrupo_atividade_ibfk_1` FOREIGN KEY (`codAtividade`) REFERENCES `atividade` (`codAtividade`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `subgrupo_atividade_ibfk_2` FOREIGN KEY (`codSubgrupo`) REFERENCES `subgrupo` (`codSubgrupo`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
