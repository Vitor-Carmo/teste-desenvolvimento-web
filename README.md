

<div align="center" >
    <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQEHHYJW7nQBWg/company-logo_200_200/0?e=1609372800&v=beta&t=Cxw_LhyP0Cstj50FeXl_AvGO_Ng9ErXpjtFNjzSUjR8"/>
</div>



# Desafio Pokemon
A missão é criar um sistema para substituir este excel, pois queremos expandir e acrescentar funcionalidades. Queremos manter o básico, mas principalmente queremos uma forma prática e agradável de buscar os dados, com listagem, filtros, paginação e detalhes sobre cada Pokémon.

A missão é criar um sistema para substituir este excel, pois queremos expandir e acrescentar funcionalidades. Queremos manter o básico, mas principalmente queremos uma forma prática e agradável de buscar os dados, com listagem, filtros, paginação e detalhes sobre cada Pokémon.

## Funcionalidades


* ### Frontend
    * Tela Principal que lista todos os pokémons

    * Tela que mostra os dados de um pokémon específico

    * Tela para cadastrar um novo pokémon

    * Deletar um pokémon 

    * Tela para mudar os dados de um pokémon

    * Funcionalidade de pesquisar um pokémon pelo nome

* ### Backend 
    * `list` : Rota feita para listar todos os dados dos Pokémons
    * `show` : Rota feita para detalhar informações de um Pokémon.
    * `create` : Rota feita para cadastrar novos Pokémons.
    * `update` : Rota feita para atualização de informações dos Pokémons.
    
    * `delete` : Rota feita para deletar Pokémons.

    * `searchFilterByName` : Rota Feita para Filtrar os pokémons pelo nome



## Como executar o Projeto

### Banco de dados 
Primeiro, Você precisa importar o Banco de dados para o **MySql**. Para tal só utlizar o arquivo `PokemonDatabase.sql`. Nele estão todos os dados do banco de dados.


### Backend
O backend dessa aplicação foi feita com NodeJs

Para instalar as depêndencias do projeto excecute o seguinte comando:

```
npm install
```

Após executar esse comando, execute `npm start` para rodar localmente o projeto

Ele estará rodando na porta `3001`

### Frontend
O Frontend da aplicação foi feita com o framework ReactJs, Html e Css

Para instalar as depêndencias só usar o seguinte comando:
```
yarn install
```

Após executar esse comando, execute `yarn start` para rodar localmente o projeto

Ele estará rodando na porta `3000`
___