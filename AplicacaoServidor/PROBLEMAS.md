# Aplicação Servidor

## Empresas

### Problemas

* [ ] Editar Empresa → Dropdown edição não retém tipo de pagamento na janela de
  visualização.
* [x] Cadastrar nova empresa → campo telefone 1 não restringe texto (letras)
* [x] Cadastrar nova empresa → campo telefone 2 não restringe texto (letras)
* [x] Cadastrar nova empresa → campo CEP não restringe texto (letras)
* [x] Cadastrar nova empresa → cadastro funciona mas **RETORNA ERRO**.
* [x] Exclusão de empresa **não funciona (as vezes)**, mas **não apresenta
  mensagem de erro**. Qual o motivo?
* [x] Exclusão de empresa **funciona** (as vezes), mas **apresenta erro**.

### Observações

* [ ] Cadastrar nova empresa → campo número limite 9999 (OK?)
* [ ] Número de items por página é pequeno. Aumentar?
* [ ] Cadastro de empresa considera um único espaço em branco (" ") como texto
  válido para os campos.

-------------------------------------------------------------------------------

## Funções

### Problemas

* [ ] Editar Função → Botão limpar do campo "Exames dessa função:" limpa dados
  da função ao invés de exames da função.
* [ ] Visualizar Função → Botão limpar do campo "Exames dessa função:" limpa
  dados da função ao invés de exames da função.
* [ ] Visualizar Função → Botão concluir do campo "Exames dessa função:" limpa
  dados da função ao invés de aplicar exames se acessado por modo "Visualizar
  Função".
* [ ] Editar Função → Ao entrar no modo de edição da função e editar os exames
  no campo "Exames dessa função:", após se clicar em concluir aparece uma
  mensagem "Atualização Efetuada!", porém os exames **NÃO são aplicados**.
* [ ] Exclusão de função **não funciona** (as vezes), mas **não apresenta
  mensagem de erro**. Qual o motivo?
* [ ] Exclusão de função **funciona** (as vezes), mas **apresenta erro**.
* [ ] Cadastrar nova função → cadastro funciona mas **RETORNA ERRO**.

### Observações

* [ ] Número de items por página é pequeno. Aumentar?
* [ ] Cadastro de função considera um único espaço em branco (" ") como texto
  válido para os campos.

-------------------------------------------------------------------------------

## Atividades

### Problemas

* [ ] Visualizar atividade → Botão limpar do campo "Exames dessa atividade:"
  limpa dados da atividade ao invés de exames da atividade.
* [ ] Editar atividade → Botão limpar do campo "Exames dessa atividade:" limpa
  dados da atividade ao invés de exames da atividade.
* [ ] Visualizar atividade → Botão concluir do campo "Exames dessa atividade:"
  limpa dados da atividade ao invés de aplicar exames se acessado por modo
  "Visualizar Atividade".
* [ ] Editar atividade → Ao entrar no modo de edição da atividade e editar os
  exames no campo "Exames dessa atividade:", após se clicar em concluir aparece
  uma mensagem "Atualização Efetuada!", porém os exames **NÃO** são aplicados.
* [ ] Exclusão de atividade **funciona**, mas **apresenta erro**.
* [ ] Cadastrar nova atividade → cadastro funciona mas **RETORNA ERRO**.

### Observações

* [ ] Número de items por página é pequeno. Aumentar?
* [ ] Cadastro de atividade considera um único espaço em branco (" ") como
  texto válido para os campos.

-------------------------------------------------------------------------------

## Consultas

### Problemas

* [x] Dialog modal para qualquer funcionalidade está quebrado. Apenas um
  retângulo branco aparece na esquerda da tela.
* [ ] Ao entrar no modo de edição da consulta e editar os campos "Categoria de
  risco" e "Status", após se clicar em concluir os exames **NÃO** são
  aplicados.
* [ ] Exclusão de consulta **funciona**, mas **não apresenta confirmação**.

### Observações

* [ ] Aplicação servidor não pode criar consultas. Adicionar funcionalidade?
* [ ] Número de items por página é pequeno. Aumentar?
* [ ] Cadastro de consulta considera um único espaço em branco (" ") como texto
  válido para os campos.

-------------------------------------------------------------------------------

## Subgrupos

### Problemas

* [ ] Botão limpar do campo "Atividades do subgrupo:" limpa dados do subgrupo
  ao invés de atividades do subgrupo.
* [ ] Botão concluir do campo "Atividades do subgrupo:" limpa dados do subgrupo
  ao invés de aplicar atividades se acessado por modo "Visualizar Atividade".
* [ ] Ao entrar no modo de edição do subgrupo e editar os exames no campo
  "Atividades do subgrupo:", após se clicar em concluir aparece uma mensagem
  "Atualização Efetuada!", porém as atividades **NÃO são aplicadas**.
* [ ] Exclusão de função **não funciona** (as vezes), mas **não apresenta
  mensagem de erro**. Qual o motivo?
* [ ] Cadastrar novo subgrupo → cadastro funciona mas apresenta **ERRO**.

### Observações

* [ ] Não há barra de rolagem na seleção de função de um novo subgrupo.
* [ ] Seleção de função para subgrupo apresenta nome das funções mas ao ser
  selecionado apresenta apenas número (ID).
* [ ] Número de items por página é pequeno. Aumentar?
* [ ] Cadastro de subgrupo considera um único espaço em branco (" ") como texto
  válido para os campos.

-------------------------------------------------------------------------------

## Pacientes

### Problemas

* [ ] Colunas na lista de pacientes não correspondem aos dados na tela
  "Visualizar Paciente".
* [ ] Visualizar Paciente → Campo data não possui rótulo. Adicionar rótulo
  ("Data de Nascimento").
* [ ] Visualizar Paciente → Campo data aceita dia, mês e ano, porém, a primeira
  vista, aparenta apenas aceitar dia e mês.
* [ ] Visualizar Paciente → Campo "descrição" deve ser renomeado para "RG".
* [ ] Visualizar Paciente → Campo "Select an option" deve ser renomeado para
  "Sexo".
* [ ] Visualizar Paciente → Edição de dados não é salva e não apresenta
  mensagem de erro ao se clicar em "Concluir".
* [ ] Cadastrar Novo Paciente → Tela de cadastro de novo paciente apresenta
  título incorreto "Cadastrar Novo Exame". Renomear para "Cadastrar Novo
  Paciente".
* [ ] Cadastrar Novo Paciente → cadastro **NÃO** funciona e apresenta **ERRO**
* [ ] Cadastrar Novo Paciente → Campo data não possui rótulo. Adicionar rótulo
  ("Data de Nascimento").
* [ ] Cadastrar Novo Paciente → Campo "descrição" deve ser renomeado para "RG".
* [ ] Cadastrar Novo Paciente → Campo "Select an option" deve ser renomeado
  para "Sexo".

### Observações

* [ ] Campo "preço" na tela "Visualizar Paciente". Erro?
* [ ] Número de items por página é pequeno. Aumentar?
* [ ] Cadastro de paciente considera um único espaço em branco (" ") como texto
  válido para os campos.

-------------------------------------------------------------------------------

## Profissional

### Problemas

* [ ] Título da seção retém título da última seção visitada. Ex: Se "Subgrupos"
  foi visitado antes de "Professional" título de Profissional será "Subgrupos".
* [ ] Modal "Visualizar Profissional" está em branco.
* [ ] Modal "Editar Profissional" está em branco.
* [ ] Exclusão de profissional **NÃO FUNCIONA** (as vezes) e **NÃO APRESENTA
  ERRO**
* [ ] Exclusão de profissional **FUNCIONA** (as vezes) e **NÃO APRESENTA
  CONFIRMAÇÃO**
* [ ] Cadastrar Novo Profissional → título inconsistente. Renomear de  
  "Médicos > Novo Médico" para "Profissional > Novo Profissional"
* [ ] Cadastrar Novo Profissional → campo CPF não impede entrada de texto.
* [ ] Cadastrar Novo Profissional → campo CPF não limita quantidade de dígitos
* [ ] Cadastrar Novo Profissional → cadastro do CPF requer entrada manual de
  pontos e traços.
* [ ] Cadastrar Novo Profissional → campo "identificacao" possui grafia
  incorreta, renomear para "Identificação".
* [ ] Cadastrar Novo Profissional → campo Identificação não impede entrada de
  texto.
* [ ] Cadastrar Novo Profissional → campo Identificação não limita a quantidade
  de dígitos.
* [ ] Cadastrar Novo Profissional → campo Identificação requer entrada manual
  de pontos e traços.

### Observações

* [ ] Número de items por página é pequeno. Aumentar?
* [ ] Cadastro de profissional considera um único espaço em branco (" ") como
  texto válido para os campos.

-------------------------------------------------------------------------------

## Exames

### Problemas

* [ ] Exclusão de exame **NÃO FUNCIONA** (as vezes) e **NÃO APRESENTA ERRO**.
* [ ] Exclusão de exame **FUNCIONA** (as vezes), mas **APRESENTA MENSAGEM DE
  ERRO**.
* [ ] Cadastrar Novo Exame → campo "Código" não impede a entrada de texto.
* [ ] Cadastro de exame **FUNCIONA** mas **APRESENTA ERRO**

### Observações

* [ ] Número de items por página é pequeno. Aumentar?
* Cadastro de exame considera um único espaço em branco (" ") como texto
  válido para os campos.

-------------------------------------------------------------------------------

## Risco

### Problemas

* [ ] Visualizar Risco → Campos "Nome" e "Descrição" estão vazios.
* [ ] Visualizar Risco → Campo "Categoria de Risco" é editável em modo de
  visualização.
* [ ] Editar Risco → Campo "Nome" e "Descrição" estão vazios.
* [ ] Editar Risco → ao se editar um risco, após a conclusão da edição o mesmo
  é salvo, mas **NÃO HÁ CONFIRMAÇÃO**.
* [ ] Editar Risco → ao se editar um risco, após a conclusão da edição o mesmo
  é salvo, porém passa a aparecer na lista **fora de ordem**.
* [ ] Ao entrar no modo de edição do risco e editar as categorias no campo
  "Categorias do risco:", após se clicar em concluir aparece uma mensagem
  "Atualização Efetuada!", porém as atividades **NÃO são aplicadas**.
* [ ] Deleção de item **FUNCIONA**, mas **NÃO HÁ CONFIRMAÇÃO**.
* [ ] Cadastrar Novo Risco → título ausente. Renomear de "Risco"  
  para "Risco > Novo Risco".

### Observações

* [ ] Número de items por página é pequeno. Aumentar?
* [ ] Cadastro de risco considera um único espaço em branco (" ") como texto
  válido para os campos.
* [ ] Cadastro de risco silenciosamente rejeita cadastro se item de "categoria"
  não for selecionado. Realçar se em branco?

-------------------------------------------------------------------------------

## Sala

### Problemas

* [ ] Título da seção está pluralizado. Renomear de "Salas" para "Sala".
* [ ] Visualizar Sala → Campo "Exames dessa Sala" é editável em modo de
  visualização.
* [ ] Visualizar Sala → Campo "Exames dessa Sala" não exibe exames da sala.
* [ ] Editar Sala → Salvamento de alterações falha silenciosamente caso pelo
  menos um item de "Exames dessa Sala" não seja selecionado.
* [ ] Editar Sala → Salvamento exibe indicador de progresso eternamente. Ao se
  clicar em fechar as mudanças já foram aplicadas.
* [ ] Editar Sala → Salvamento aparentemente não grava exames da sala,
  verificar no banco de dados.
* [ ] Editar Sala → Limite de caracteres para descrição muito pequeno (50
  caracteres).
* [ ] Exclusão de sala **FUNCIONA**, mas **NÃO HÁ CONFIRMAÇÃO**
* [ ] Cadastrar Nova Sala → título ausente. Renomear de "Salas"  
  para "Sala > Nova Sala".

### Observações

* [ ] Durante duração do indicador de atividade, impedir fechamento do dialog
  modal.
* [ ] Número de items por página é pequeno. Aumentar?
* [ ] Cadastro de risco considera um único espaço em branco (" ") como texto
  válido para os campos.

-------------------------------------------------------------------------------

## Parecer

### Problemas

* [ ] Editar Parecer → Edição de parecer **FUNCIONA**, mas **NÃO HÁ
  CONFIRMAÇÃO**.
* [ ] Exclusão de parecer **FUNCIONA**, mas **NÃO HÁ CONFIRMAÇÃO**
* [ ] Editar Parecer → Limite de caracteres para descrição muito pequeno (50
  caracteres).
* [ ] Cadastrar Novo Parecer → título inconsistente. Renomear de  
  "Novo parecer" para "Parecer > Novo Parecer".

### Observações

* [ ] Número de items por página é pequeno. Aumentar?
* [ ] Cadastro de parecer considera um único espaço em branco (" ") como texto
  válido para os campos.
