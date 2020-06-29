# Aplicação Servidor

> Problemas e Observações a serem resolvidos/implementados

## Dificuldade dos Problemas

O uso destes ícones visa garantir uma maior eficiência na resolução de
problemas, dando prioridade a problemas mais importantes.

| Ícone | Importância    |
| :---: | :------------- |
|  🟢  |  Baixa         |
|  🟡  |  Média         |
|  🔴  |  Alta          |
|  🔵  |  Indeterminada |

## Estatísticas

### Quantidade de Problemas por Seção em Ordem de Importância

| Seção                |   🔴   |  🟡  |  🟢 |   =   | **TOTAL** |
| -------------------- | :-----: | :--: | :--: | :---: | --------: |
| Profissional         |  **7**  |   1  |   5  |   =   |        13 |
| Empresas             |  **6**  |   1  |   1  |   =   |         8 |
| Relatórios → Faturas |  **5**  |   -  |   1  |   =   |         6 |
| Funções              |  **4**  |   4  |   -  |   =   |         8 |
| Risco                |  **4**  |   3  |   1  |   =   |         8 |
| Subgrupos            |  **4**  |   3  |   -  |   =   |         7 |
| Sala                 |  **4**  |   2  |   3  |   =   |         9 |
| Atividades           |  **3**  |   4  |   -  |   =   |         7 |
| Pacientes            |  **2**  |   7  |   6  |   =   |        15 |
| Exames               |  **2**  |   2  |   -  |   =   |         4 |
| Consultas            |  **2**  |   1  |   -  |   =   |         3 |
| Relatórios → ASO     |  **2**  |   -  |   1  |   =   |         3 |
| Parecer              |  **-**  |   2  |   2  |   =   |         4 |
|                      |    =    |   =  |   =  |   =   |         = |
| **TOTAL**            | **45**  |  30  |  20  |   =   |  ***95*** |

### Quantidade de Observações por Seção em Ordem de Importância

| Seção                |  🔴  |  🟡  |  🟢 |  🔵 |   =   | **TOTAL** |
| -------------------- | :---: | :--: | :--: | :--: | :---: | --------: |
| Sala                 | **1** |   -  |   2  |   -  |   =   |        3  |
| Subgrupos            | **-** |   1  |   3  |   -  |   =   |        4  |
| Empresas             | **-** |   -  |   3  |   1  |   =   |        4  |
| Risco                | **-** |   -  |   3  |   -  |   =   |        3  |
| Pacientes            | **-** |   -  |   2  |   1  |   =   |        3  |
| Consultas            | **-** |   -  |   2  |   1  |   =   |        3  |
| Profissional         | **-** |   -  |   2  |   -  |   =   |        2  |
| Funções              | **-** |   -  |   2  |   -  |   =   |        2  |
| Atividades           | **-** |   -  |   2  |   -  |   =   |        2  |
| Exames               | **-** |   -  |   2  |   -  |   =   |        2  |
| Parecer              | **-** |   -  |   2  |   -  |   =   |        2  |
| Relatórios → Faturas | **-** |   -  |   -  |   1  |   =   |        1  |
| Relatórios → ASO     | **-** |   -  |   -  |   1  |   =   |        1  |
|                      |   =   |   =  |   =  |   =  |   =   |        =  |
| **TOTAL**            | **1** |   1  |  25  |   5  |   =   |  ***32*** |

-----------------------------------------------------------------------------------------------------------------------

## Empresas

### Problemas

* [x] 🔴 Cadastrar nova empresa → campo telefone 1 não restringe texto (letras)
* [x] 🔴 Cadastrar nova empresa → campo telefone 2 não restringe texto (letras)
* [x] 🔴 Cadastrar nova empresa → campo CEP não restringe texto (letras)
* [x] 🔴 Cadastrar nova empresa → cadastro funciona mas **RETORNA ERRO**.
* [x] 🔴 Exclusão de empresa **não funciona (as vezes)**, mas **não apresenta mensagem de erro**. Qual o motivo?
* [x] 🔴 Exclusão de empresa **funciona** (as vezes), mas **apresenta erro**.
* [ ] 🟡 Editar Empresa → Dropdown edição não retém tipo de pagamento na janela de visualização.
* [ ] 🟢 CEP aceita 10 caracteres. Alterar para 9 (5 dígitos, traço, 3 dígitos).

### Observações

* [ ] 🟢 Número de items por página é pequeno. Aumentar?
* [ ] 🟢 Cadastro de empresa considera um único espaço em branco (" ") como texto válido para os campos.
* [ ] 🟢 CEP necessita de traço.
* [ ] 🔵 Cadastrar nova empresa → campo número limite 9999 (OK?)

-----------------------------------------------------------------------------------------------------------------------

## Funções

### Problemas

* [x] 🔴 Visualizar Função → items do campo "Exames dessa função:" são editáveis no modo de visualização.
* [x] 🔴 Visualizar Função → Botão concluir do campo "Exames dessa função:" limpa dados da função ao invés de aplicar
  função.
* [x] 🔴 Editar Função → Ao entrar no modo de edição da função e editar os exames no campo "Exames dessa função:", após
  exames se acessado por modo "Visualizar Função".
* [x] 🔴 Exclusão de função **não funciona** (as vezes), mas **não apresenta mensagem de erro**. Qual o motivo?
* [x] 🟡 Editar Função → Botão limpar do campo "Exames dessa função:" limpa dados da função ao invés de exames da
  função.
* [x] 🟡 Visualizar Função → Botão limpar do campo "Exames dessa função:" limpa dados da função ao invés de exames da
  se clicar em concluir aparece uma mensagem "Atualização Efetuada!", porém os exames **NÃO são aplicados**.
* [x] 🟡 Exclusão de função **funciona** (as vezes), mas **apresenta erro**.
* [x] 🟡 Cadastrar nova função → cadastro funciona mas **RETORNA ERRO**.

### Observações

* [ ] 🟢 Número de items por página é pequeno. Aumentar?
* [ ] 🟢 Cadastro de função considera um único espaço em branco (" ") como texto válido para os campos.

-----------------------------------------------------------------------------------------------------------------------

## Atividades

### Problemas

* [x] 🔴 Visualizar atividade → Botão concluir do campo "Exames dessa atividade:" limpa dados da atividade ao invés de
  aplicar exames se acessado por modo "Visualizar Atividade".
* [x] 🔴 Visualizar Atividade → items do campo "Exames dessa atividade:" são editáveis no modo de visualização.
* [x] 🔴 Editar atividade → Ao entrar no modo de edição da atividade e editar os exames no campo "Exames dessa
  atividade:", após se clicar em concluir aparece uma mensagem "Atualização Efetuada!", porém os exames **NÃO são
  aplicados**.
* [x] 🟡 Visualizar atividade → Botão limpar do campo "Exames dessa atividade:" limpa dados da atividade ao invés de
  exames da atividade.
* [x] 🟡 Editar atividade → Botão limpar do campo "Exames dessa atividade:" limpa dados da atividade ao invés de exames
  da atividade.
* [x] 🟡 Exclusão de atividade **funciona**, mas **apresenta erro**.
* [x] 🟡 Cadastrar nova atividade → cadastro funciona mas **RETORNA ERRO**.

### Observações

* [ ] 🟢 Número de items por página é pequeno. Aumentar?
* [ ] 🟢 Cadastro de atividade considera um único espaço em branco (" ") como texto válido para os campos.

-----------------------------------------------------------------------------------------------------------------------

## Consultas

### Problemas

* [x] 🔴 Dialog modal para qualquer funcionalidade está quebrado. Apenas um retângulo branco aparece na esquerda da
  tela.
* [ ] 🔴 Ao entrar no modo de edição da consulta e editar os campos "Categoria de risco" e "Status", após se clicar em
  concluir os exames **NÃO** são aplicados.
* [ ] 🟡 Exclusão de consulta **funciona**, mas **não apresenta confirmação**.

### Observações

* [ ] 🟢 Número de items por página é pequeno. Aumentar?
* [ ] 🟢 Cadastro de consulta considera um único espaço em branco (" ") como texto válido para os campos.
* [ ] 🔵 Aplicação servidor não pode criar consultas. Adicionar funcionalidade?

-----------------------------------------------------------------------------------------------------------------------

## Subgrupos

### Problemas

* [ ] 🔴 Visualizar Subgrupo → items do campo "Atividades do subgrupo" são editáveis no modo de visualização.
* [ ] 🔴 Visualizar Subgrupo → Botão concluir do campo "Atividades do subgrupo:" limpa dados do subgrupo ao invés de
  aplicar atividades se acessado por modo "Visualizar Atividade".
* [ ] 🔴 Editar Subgrupo → Ao entrar no modo de edição do subgrupo e editar os exames no campo "Atividades do
  subgrupo:", após se clicar em concluir aparece uma mensagem "Atualização Efetuada!", porém as atividades **NÃO são
  aplicadas**.
* [ ] 🔴 Exclusão de função **não funciona** (as vezes), mas **não apresenta mensagem de erro**. Qual o motivo?
* [ ] 🟡 Visualizar Subgrupo → Botão limpar do campo "Atividades do subgrupo:" limpa dados do subgrupo ao invés de
  atividades do subgrupo.
* [ ] 🟡 Editar Subgrupo → Botão limpar do campo "Atividades do subgrupo:" limpa dados do subgrupo ao invés de
  atividades do subgrupo.
* [ ] 🟡 Cadastrar novo subgrupo → cadastro funciona mas apresenta **ERRO**.

### Observações

* [ ] 🟡 Não há barra de rolagem na seleção de função de um novo subgrupo.
* [ ] 🟢 Seleção de função para subgrupo apresenta nome das funções mas ao ser selecionado apresenta apenas número
  (ID).
* [ ] 🟢 Número de items por página é pequeno. Aumentar?
* [ ] 🟢 Cadastro de subgrupo considera um único espaço em branco (" ") como texto válido para os campos.

-----------------------------------------------------------------------------------------------------------------------

## Pacientes

### Problemas

* [ ] 🔴 Editar Paciente → Edição de dados **não é salva** e **não apresenta mensagem de erro** ao se clicar em
  "Concluir".
* [ ] 🔴 Cadastrar Novo Paciente → cadastro **NÃO** funciona e apresenta **ERRO**
* [ ] 🟡 Visualizar Paciente → Campo "descrição" deve ser renomeado para "RG".
* [ ] 🟡 Visualizar Paciente → Campo "Select an option" deve ser renomeado para "Sexo".
* [ ] 🟡 Editar Paciente → Campo "descrição" deve ser renomeado para "RG".
* [ ] 🟡 Editar Paciente → Campo "Select an option" deve ser renomeado para "Sexo".
* [ ] 🟡 Cadastrar Novo Paciente → Campo data não possui rótulo. Adicionar rótulo ("Data de Nascimento").
* [ ] 🟡 Cadastrar Novo Paciente → Campo "descrição" deve ser renomeado para "RG".
* [ ] 🟡 Cadastrar Novo Paciente → Campo "Select an option" deve ser renomeado para "Sexo".
* [ ] 🟢 Colunas na lista de pacientes não correspondem aos dados na tela "Visualizar Paciente".
* [ ] 🟢 Visualizar Paciente → Campo data não possui rótulo. Adicionar rótulo ("Data de Nascimento").
* [ ] 🟢 Visualizar Paciente → Campo data aceita dia, mês e ano, porém, a primeira vista, aparenta apenas aceitar dia e
  mês.
* [ ] 🟢 Editar Paciente → Campo data não possui rótulo. Adicionar rótulo ("Data de Nascimento").
* [ ] 🟢 Editar Paciente → Campo data aceita dia, mês e ano, porém, a primeira vista, aparenta apenas aceitar dia e
  mês.
* [ ] 🟢 Cadastrar Novo Paciente → Tela de cadastro de novo paciente apresenta título incorreto "Cadastrar Novo Exame".
  Renomear para "Cadastrar Novo Paciente".

### Observações

* [ ] 🟢 Número de items por página é pequeno. Aumentar?
* [ ] 🟢 Cadastro de paciente considera um único espaço em branco (" ") como texto válido para os campos.
* [ ] 🔵 Campo "preço" na tela "Visualizar Paciente". Erro?

-----------------------------------------------------------------------------------------------------------------------

## Profissional

### Problemas

* [ ] 🔴 Modal "Visualizar Profissional" está em branco.
* [ ] 🔴 Modal "Editar Profissional" está em branco.
* [ ] 🔴 Exclusão de profissional **NÃO FUNCIONA** (as vezes) e **NÃO APRESENTA ERRO**
* [ ] 🔴 Cadastrar Novo Profissional → campo CPF não impede entrada de texto.
* [ ] 🔴 Cadastrar Novo Profissional → campo CPF não limita quantidade de dígitos
* [ ] 🔴 Cadastrar Novo Profissional → campo Identificação não impede entrada de texto.
* [ ] 🔴 Cadastrar Novo Profissional → campo Identificação não limita a quantidade de dígitos.
* [ ] 🟡 Exclusão de profissional **FUNCIONA** (as vezes) e **NÃO APRESENTA CONFIRMAÇÃO**
* [ ] 🟢 Título da seção retém título da última seção visitada. Ex: Se "Subgrupos" foi visitado antes de "Professional"
  título de Profissional será "Subgrupos".
* [ ] 🟢 Cadastrar Novo Profissional → título inconsistente. Renomear de  
  "Médicos > Novo Médico" para "Profissional > Novo Profissional"
* [ ] 🟢 Cadastrar Novo Profissional → cadastro do CPF requer entrada manual de pontos e traços.
* [ ] 🟢 Cadastrar Novo Profissional → campo "identificacao" possui grafia incorreta, renomear para "Identificação".
* [ ] 🟢 Cadastrar Novo Profissional → campo Identificação requer entrada manual de pontos e traços.

### Observações

* [ ] 🟢 Número de items por página é pequeno. Aumentar?
* [ ] 🟢 Cadastro de profissional considera um único espaço em branco (" ") como texto válido para os campos.

-----------------------------------------------------------------------------------------------------------------------

## Exames

### Problemas

* [ ] 🔴 Exclusão de exame **NÃO FUNCIONA** (as vezes) e **NÃO APRESENTA ERRO**.
* [ ] 🔴 Cadastrar Novo Exame → campo "Código" não impede a entrada de texto.
* [ ] 🟡 Exclusão de exame **FUNCIONA** (as vezes), mas **APRESENTA MENSAGEM DE ERRO**.
* [ ] 🟡 Cadastro de exame **FUNCIONA** mas **APRESENTA ERRO**

### Observações

* [ ] 🟢 Número de items por página é pequeno. Aumentar?
* [ ] 🟢 Cadastro de exame considera um único espaço em branco (" ") como texto válido para os campos.

-----------------------------------------------------------------------------------------------------------------------

## Risco

### Problemas

* [ ] 🔴 Visualizar Risco → Campos "Nome" e "Descrição" estão vazios.
* [ ] 🔴 Visualizar Risco → Campo "Categoria de Risco" é editável em modo de visualização.
* [ ] 🔴 Editar Risco → Campo "Nome" e "Descrição" estão vazios.
* [ ] 🔴 Ao entrar no modo de edição do risco e editar as categorias no campo "Categorias do risco:", após se clicar em
  concluir aparece uma mensagem "Atualização Efetuada!", porém as atividades **NÃO são aplicadas**.
* [ ] 🟡 Editar Risco → ao se editar um risco, após a conclusão da edição o mesmo é salvo, mas **NÃO HÁ CONFIRMAÇÃO**.
* [ ] 🟡 Editar Risco → ao se editar um risco, após a conclusão da edição o mesmo é salvo, porém passa a aparecer na
  lista **fora de ordem**.
* [ ] 🟡 Deleção de item **FUNCIONA**, mas **NÃO HÁ CONFIRMAÇÃO**.
* [ ] 🟢 Cadastrar Novo Risco → título ausente. Renomear de "Risco" para "Risco > Novo Risco".

### Observações

* [ ] 🟢 Número de items por página é pequeno. Aumentar?
* [ ] 🟢 Cadastro de risco considera um único espaço em branco (" ") como texto válido para os campos.
* [ ] 🟢 Cadastro de risco silenciosamente rejeita cadastro se item de "categoria" não for selecionado. Realçar se não
  selecionado?

-----------------------------------------------------------------------------------------------------------------------

## Sala

### Problemas

* [ ] 🔴 Visualizar Sala → Campo "Exames dessa Sala" é editável em modo de visualização.
* [ ] 🔴 Visualizar Sala → Campo "Exames dessa Sala" não exibe exames da sala.
* [ ] 🔴 Editar Sala → Salvamento de alterações falha silenciosamente caso pelo menos um item de "Exames dessa Sala"
  não seja selecionado.
* [ ] 🔴 Editar Sala → Salvamento aparentemente não grava exames da sala, verificar no banco de dados.
* [ ] 🟡 Editar Sala → Salvamento exibe indicador de progresso eternamente. Ao se clicar em fechar as mudanças já foram
  aplicadas.
* [ ] 🟡 Exclusão de sala **FUNCIONA**, mas **NÃO HÁ CONFIRMAÇÃO**
* [ ] 🟢 Título da seção está pluralizado. Renomear de "Salas" para "Sala".
* [ ] 🟢 Editar Sala → Limite de caracteres para descrição muito pequeno (50 caracteres).
* [ ] 🟢 Cadastrar Nova Sala → título ausente. Renomear de "Salas"  
  para "Sala > Nova Sala".

### Observações

* [ ] 🔴 Durante duração do indicador de atividade, impedir fechamento do dialog modal.
* [ ] 🟢 Número de items por página é pequeno. Aumentar?
* [ ] 🟢 Cadastro de risco considera um único espaço em branco (" ") como texto válido para os campos.

-----------------------------------------------------------------------------------------------------------------------

## Parecer

### Problemas

* [ ] 🟡 Editar Parecer → Edição de parecer **FUNCIONA**, mas **NÃO HÁ CONFIRMAÇÃO**.
* [ ] 🟡 Exclusão de parecer **FUNCIONA**, mas **NÃO HÁ CONFIRMAÇÃO**
* [ ] 🟢 Editar Parecer → Limite de caracteres para descrição muito pequeno (50 caracteres).
* [ ] 🟢 Cadastrar Novo Parecer → título inconsistente. Renomear de "Novo parecer" para "Parecer > Novo Parecer".

### Observações

* [ ] 🟢 Número de items por página é pequeno. Aumentar?
* [ ] 🟢 Cadastro de parecer considera um único espaço em branco (" ") como texto válido para os campos.

-----------------------------------------------------------------------------------------------------------------------

## Relatórios → Faturas

### Problemas

* [ ] 🔴 Nova Fatura → Após seleção de consulta para uma dada empresa, caso se clique diretamente em "(3) Finalizar",
  ao invés de se utilizar o botão "Próximo", a opção "Concluir" permanece desativada.
* [ ] 🔴 Nova Fatura → Após clicar em "Reiniciar" na etapa "(3) Finalizar", o campo "insira o nome da empresa" para de
  funcionar corretamente.
* [ ] 🔴 Nova Fatura → É possível seguir para a etapa "(2) Seleção de Consultas" ao se inserir uma descrição e um nome
  de empresa não-existente.
* [ ] 🔴 Nova Fatura → Após clicar em "Reiniciar" na etapa "(3) Finalizar", ao se inserir uma descrição e o nome de uma
  empresa qualquer (existente ou não) na etapa "(1) Empresa e Descrição" é possível clicar diretamente em "(3)
  Finalizar", onde o valor da fatura da consulta anterior permanece.
* [ ] 🔴 Nova Fatura → Geração de fatura **NÃO FUNCIONA** e **APRESENTA ERRO**
* [ ] 🟢 Relatórios → Ao se clicar em "Acessar" no cartão "Faturas", renomear título de "Relatórios" para "Relatórios >
  Faturas".

### Observações

* [ ] 🔵 Nova Fatura → Seleção de empresa poderia ter um dropdown com uma listagem de todas as empresas, integrado com
  a barra de pesquisa.

-----------------------------------------------------------------------------------------------------------------------

## Relatórios → ASO

### Problemas

* [ ] 🔴 PDF gerado possui layout quebrado.
* [ ] 🔴 Após se gerar um PDF, quase todos os ícones das mais diversas seções da Aplicação Servidor se tornam
  quebrados.
* [ ] 🟢 Relatórios → Ao se clicar em "Acessar" no cartão "ASO", renomear título de "Relatórios" para  "Relatórios >
  ASO".

### Observações

* [ ] 🔵 PDF gerado é rasterizado. O ideal é a geração de um PDF com fontes e objetos vetoriais.
