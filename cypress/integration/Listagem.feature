#language: pt
Funcionalidade: Listagem

    Como usuário, desejo acessar a Listagem
    Para que possa visualizar meus dados de cadastro

Cenario: Listagem sem registros
    Dado que o site não possui registros
    Quando acessar a listagem
    Entao devo visualizar a listagem vazia

Cenario: Listagem com um registro
    Dado que o site possui apenas um registro
    Quando acessar a listagem
    Entao devo visualizar apenas um registro

   # Given / Dado que // contexto
   # When / Quando // ação executada
   # Then / Entao // resultado esperado
   # And / E // continuidade do passo anterior