/*
::::EMPRESAS:::::::::
    /empresa/new body{ "nome":"...", "cnpj":"...", "telefone":"...", "tipoPgto":"..." }
    /empresa/read header{ "_id":"..." }
    /empresa/delete header{ "_id":"..." }
    /empresa/update body{ "_id":"...", "nome":"...", "cnpj":"...", "telefone":"...", "tipoPgto":"..." }

::::PACIENTES::::::::
    /paciente/new body{ "nome":"...", "cpf":"...", "codEmpresa":"...", "codFuncao":"...", "codSubgrupo":"..." }
    /paciente/read header{ "_id":"..." }
    /paciente/delete header{ "_id":"..." }
    /paciente/update body{ "_id":"...", "nome":"...", "cpf":"...", "codEmpresa":"...", "codFuncao":"...", "codSubgrupo":"..." }

::::FUNÇÕES::::::::::
    /funcao/new body{ "nome":"...", "descricao":"...", "exames": ["...", "...", "...", ...] }
    /funcao/read header{ "_id":"..." }
    /funcao/delete header{ "_id":"..." }
    /funcao/update body{ "_id":"...", "nome":"...", "descricao":"...", "exames": ["...", "...", "...", ...] }

::::ATIVIDADE::::::::
    /atividade/new body{ "nome":"...", "descricao":"..." }
    /atividade/read header{ "_id":"..." }
    /atividade/delete header{ "_id":"..." }
    /atividade/update body{ "_id":"...", "nome":"...", "descricao":"..." }

::::SUBGRUPO:::::::::
    /subgrupo/new body{ "nome":"...", "codFuncao":"...", "atividades": ["...", "...", "...", ...] }
    /subgrupo/read header{ "_id":"..." }
    /subgrupo/delete header{ "_id":"..." }
    /subgrupo/update body{ "_id":"...", "nome":"...", "codFuncao":"...", "atividades": ["...", "...", "...", ...] }

::::MÉDICO:::::::::::
    /especialidade/new body{ "nome":"...", "descricao":"..." }
    /especialidade/read header{ "_id":"..." }
    /especialidade/delete header{ "_id":"..." }
    /especialidade/update body{ "_id":"...", "nome":"...", "descricao":"..." }

    /medico/new body{ "nome":"...", "cpf":"...", "crm":"...", "especialidades": ["...", "...", "...", ...] }
    /medico/read header{ "_id":"..." }
    /medico/delete header{ "_id":"..." }
    /medico/update body{ "_id":"...", "nome":"...", "cpf":"...", "crm":"...", "especialidades": ["...", "...", "...", ...] }

::::EXAME::::::::::::
    /exame/new body{ "nome":"...", "descricao":"...", "preco":"..." }
    /exame/read header{ "_id":"..." }
    /exame/delete header{ "_id":"..." }
    /exame/update body{ "_id":"...", "nome":"...", "descricao":"...", "preco":"..." }

*/