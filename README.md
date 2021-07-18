# 09-criacao-de-apis-com-express

**Project overview:**

* O objetivo do projeto era desenvolver uma API com Express que retorne os códigos HTTP, utilizanddo como base a API http://httpstat.us/;
* O projeto utiliza da API em si para retornar os valores, ao invés de escrever um .get para cada retorno;
* O projeto retorna os diferentes tipos de status de uma api, retornando o código e sua descrição;
* A API criada tem como base a API http://httpstat.us/ para retorno dos códigos;
* 2 rotas foram criadas, uma /code e outra /sleep/code;
* É possível na rota /sleep inserir o tempo que quiser para o retorno da API;
* O projeto foi separado em 2 arquivos, server.js e routes.js, para fins de organização no código;
* Foi utilizado do axios para requisição da API;
* Foi utilizado o nodemon para facilitar a inicialização do server em node.js;
