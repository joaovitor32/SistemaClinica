/*
::::EMPRESAS:::::::::
    POST /empresa/new body{ "nome":"...", "cnpj":"...", "telefone":"...", "tipoPgto":"..." }
    GET /empresa/read header{ "_id":"..." }
    POST /empresa/delete header{ "_id":"..." }
    PUT /empresa/update body{ "_id":"...", "nome":"...", "cnpj":"...", "telefone":"...", "tipoPgto":"..." }

::::PACIENTES::::::::
    POST /paciente/new body{ "nome":"...", "cpf":"...", "codEmpresa":"...", "codFuncao":"...", "codSubgrupo":"..." }
    GET /paciente/read header{ "_id":"..." }
    POST /paciente/delete header{ "_id":"..." }
    PUT /paciente/update body{ "_id":"...", "nome":"...", "cpf":"...", "codEmpresa":"...", "codFuncao":"...", "codSubgrupo":"..." }

::::FUNÇÕES::::::::::
    POST /funcao/new body{ "nome":"...", "descricao":"...", "exames": ["...", "...", "...", ...] }
    GET /funcao/read header{ "_id":"..." }
    POST /funcao/delete header{ "_id":"..." }
    PUT /funcao/update body{ "_id":"...", "nome":"...", "descricao":"...", "exames": ["...", "...", "...", ...] }

::::ATIVIDADE::::::::
    POST /atividade/new body{ "nome":"...", "descricao":"..." }
    GET /atividade/read header{ "_id":"..." }
    POST /atividade/delete header{ "_id":"..." }
    PUT /atividade/update body{ "_id":"...", "nome":"...", "descricao":"..." }

::::SUBGRUPO:::::::::
    POST /subgrupo/new body{ "nome":"...", "codFuncao":"...", "atividades": ["...", "...", "...", ...] }
    GET /subgrupo/read header{ "_id":"..." }
    POST /subgrupo/delete header{ "_id":"..." }
    PUT /subgrupo/update body{ "_id":"...", "nome":"...", "codFuncao":"...", "atividades": ["...", "...", "...", ...] }

::::MÉDICO:::::::::::
    POST /especialidade/new body{ "nome":"...", "descricao":"..." }
    GET /especialidade/read header{ "_id":"..." }
    POST /especialidade/delete header{ "_id":"..." }
    PUT /especialidade/update body{ "_id":"...", "nome":"...", "descricao":"..." }

    POST /medico/new body{ "nome":"...", "cpf":"...", "crm":"...", "especialidades": ["...", "...", "...", ...] }
    GET /medico/read header{ "_id":"..." }
    POST /medico/delete header{ "_id":"..." }
    PUT /medico/update body{ "_id":"...", "nome":"...", "cpf":"...", "crm":"...", "especialidades": ["...", "...", "...", ...] }

::::EXAME::::::::::::
    POST /exame/new body{ "nome":"...", "descricao":"...", "preco":"..." }
    GET /exame/read header{ "_id":"..." }
    POST /exame/delete header{ "_id":"..." }
    PUT /exame/update body{ "_id":"...", "nome":"...", "descricao":"...", "preco":"..." }

*/