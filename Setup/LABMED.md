Sistema de Gerenciamento LABMED
===============================
_criado por Serra Jr. Engenharia_

Este documento provê uma estrutura resumida do funcionamento do sistema de
gerencimento LABMED.

Estrutura
---------

O sistema consiste em 3 aplicações: Servidor, Atendente e Exame. As aplicações
são instaladas em suas respectivas máquinas e se comunicam segundo o seguinte
diagrama.

               ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐
               │ Exame │ │ Exame │ │ Exame │ │ Exame │ │ Exame │
               └──┬─┬──┘ └──┬─┬──┘ └──┬─┬──┘ └──┬─┬──┘ └──┬─┬──┘
                 ─┴─┴─     ─┴─┴─     ─┴─┴─     ─┴─┴─     ─┴─┴─ 
                   │         │         │         │         │
                   │         │         │         │         │
                   │         ╰───────╮ │ ╭───────╯         │
                   ╰───────────────╮ │ │ │ ╭───────────────╯
                                   │ │ │ │ │     
                                   │ │ │ │ │      ╲        ╱  
                                  ┌─────────┐    ┌─┴──────┴─┐
                                  │ Switch  │────│ Roteador │
                                  └─────────┘    └──────────┘
                                   │   │   │
                         ╭─────────╯   │   ╰─────────╮
                         │             │             │
                         │       ╔═══════════╗       │
                  ┌───────────┐  ║ Servidor  ║  ┌───────────┐
                  │ Atendente │  ║   (BD)    ║  │ Atendente │
                  └────┬─┬────┘  ╚═══╤═══╤═══╝  └────┬─┬────┘
                      ─┴─┴─         ─┴───┴─         ─┴─┴─

Nesta estrutura o roteador possui a funcionalidade de servidor DHCP. A aplicação
servidor hospeda o banco de dados, e permite o acesso de outras máquinas a este.

Funcionalidade
--------------

* Aplicação Servidor: Possui total e irrestrito acesso ao banco de dados.
* Aplicação Atendente: Permite o agendamento e acompanhamento de exames,
  cadastro de empresas, riscos, etc.
* Aplicação Exame: Permite a visualização e controle de exames agendados para
  uma determinada sala.

Tecnologia
----------

As aplicações são baseadas no framework Electron, sendo instaladas através de
arquivos executáveis (`.exe`).

O banco de dados utiliza o formato SQL. A comunicação entre o banco de dados e
as aplicações se dá através de uma API em PHP. Esta API é executada pelo Apache
Web Server e o banco de dados pelo MySQL. Ambas as aplicações são fornecidas
pelo pacote XAMPP.

Um script `listener.js` possibilita a atualização dinâmica dos dados entre as
aplicações, sendo este executado pelo ambiente de execução NodeJS.

Instalação
----------

1. As aplicações Atendente, Exame e Servidor são instaladas através de seus
   arquivos de instalação (`.exe`) em suas respectivas máquinas.
2. O pacote XAMPP é instalado no servidor, os aplicativos "Apache Web Server" e
   "MySQL" são configurados para inicialização automática ao se ligar o sistema.
3. A pasta `api` é copiada para o diretório `C:\xampp\htdocs\`.
4. Em um navegador, acessa-se o endereço `localhost/phpmyadmin/` e cria-se um
   banco de dados com o nome de `bdclinica`.
5. Importa-se um arquivo `bdclinca.sql` que contém a estrutura de tabelas para o
   funcionamento do sistema de gerencimento.
6. Em todas as máquinas, é instalado o framework NodeJS.
7. Copia-se o arquivo `listener.js` para o diretório `C:\`
8. Copia-se o arquivo `start_listener.vbs` para a pasta de inicialização
   automática do sistema, acessada através do caminho `shell:startup`.
9. Executa-se o arquivo `setup_node.bat` para a configuração final do listener.
10. Reinicie os computadores para garantir que as aplicações funcionem
    corretamente.

Observações
-----------

* Certifique-se de que os serviços Apache Web Server e MySQL, fornecidos pelo
  pacote XAMPP, estejam em execução antes de inicializar as aplicações do
  sistema de gerenciamento.
* Certifique-se de que o `listener.js` esteja em execução e possua acesso à
  porta 3000. Isto pode ser verificado através da presença do processo
  `node.exe` no gerenciador de tarefas e através do Firewall do Windows.
* Certifique-se que o endereço IP e senha do servidor estejam corretos. Caso
  contrário, as aplicações não exibirão nenhum dado.
  - O endereço IP do servidor pode ser obtido no campo "Endereço IPv4" com o
    comando `ipconfig` em um prompt de comando.

