#!/bin/bash
cd ./AplicacaoServidor
(php -S localhost:8080) & (node ./api/socket/listener.js) & (npm --prefix ./InterfaceServidor/ run electron-build)
