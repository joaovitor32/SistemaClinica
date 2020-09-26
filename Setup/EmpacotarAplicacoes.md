Empacotamento das Aplicações
============================

Para criar um pacote executável Electron das aplicações com o electron-builder,
siga os passos abaixo:

1. Clone o repositório com o comando `git clone https://github.com/MarcoAraujoNeves/SistemaClinica`
2. Acesse o diretório de uma das aplicações e execute o comando `npm install`
   para baixar os pacotes do projeto.
3. Caso as aplicações tenham sido modificadas...
    - Edite o arquivo `package.json` e incremente o número de versão; salve o
      arquivo. Por exemplo: `1.0.0` → `1.1.0`
4. Execute em um terminal o comando `npm run electron-build` para atualizar os
   arquivos compilados no diretório `dist\`.
5. Após a conclusão da complicação, feche a aplicação e execute o comando
   `npm run dist` em uma plataforma Windows 64-bits. Caso esteja executando
   Linux, consulte as instruções em:
   https://www.electron.build/multi-platform-build#to-build-app-for-windows-on-linux
6. Após a conclusão, o instalador da aplicação (`.exe`) se encontrará no
   diretório `dist\`. Basta executá-lo na máquina de destino para instalar a
   aplicação.
