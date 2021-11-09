/* aula 1 - estruturas básicas de criação de api *https://www.youtube.com/watch?v=hAAj27hgPFg&list=PLWgD0gfm500EMEDPyb3Orb28i7HK5_DkR&index=13 */
/*Após dar o comando npm init e preencher o package json com as informações
Criando a pasta node_modules: Instalar o express, digitar no term: npm install --save (--save irá incluir a instalaçao no nosso arquivo package.json, ou seja todo pacote que for instalarmos localmente, colocamos o --save)
*/ 

const http = require('http'); /*A constante http irá fazer a requisão http para funcionar nossa api*/ 
const port = process.env.PORT || 3000; /** a const port irá acessar  pela porta  process.env.PORT ou pela porta localhost:3000 */
const app = require('./app'); /**Importando o app do app.js */
const server = http.createServer(app); /* criando o server, usando a biblioteca de http o server irá ficar escutando todo o conteúdo que tiver dentro de app.js*/ 
server.listen(port); /**O server irá ficar escutando na nossa port */

/**Após fazer isso, testar o server digitando o comando node server.js no cmd e acessar a página da porta: http://localhost:3000/teste ou podemos testar no postman  com um get e colocando esse endereço tbm */

/**aula 2 - rotas https://www.youtube.com/watch?v=TGbiY6015Wg&list=PLWgD0gfm500EMEDPyb3Orb28i7HK5_DkR&index=3 */

/** aula 3 - Melhorando e tratando erros https://www.youtube.com/watch?v=1ww5okv2DE0&list=PLWgD0gfm500EMEDPyb3Orb28i7HK5_DkR&index=4 */

/*Iremos fazer a instalação do nodemon, o nodemon é uma dependência que  agiliza nosso serviço,  exemplo: Quando fazemos alteração no nosso código sem o nodemon, temos que reiniciar o servidor da nossa api
pelo terminal, com o nodemon instalado, toda vez que o projeto sofre alteração, ele automaticamente  atualiza o  servidor sem que precisamos ficar fazendo isso manualmente.


Como instalar o nodemon e fazer os procedimentos (nodemon é uma biblioteca que reinicia o nosso servidor automaticamente a cada alteração que fizermos no código)?

1 - digite no  terminal: npm install --save-dev nodemon (--save-dev, irá salvar nas nossas dependências de desenvolvedor, lembrando que quando utilizamos --save-dev essa instalação
    fica válida somente nesse arquivo, se quisermos instalar o nodemon na  máquina, precisamos inserir a seguinte istalação: "npm install -g nodemon" o -g  é de global, ou seja, instalação global do nodemon == instalar o nodemon na máquina)

    2 - Após a instalação, precisamos ir na pasta de package.json e ativar a funcionalidade do nodemon na área de scripts. iremos inserir o seguinte código:
"start": "nodemon server.js"

3 - Para rodarmos o servidor agora com o nodemon, precisamos colocar, "npm start" ao invés de node "server.js"

4 - Agora podemos testar, qualquer atualização que salvarmos no código o servidor irá reiniciar automaticamente*/


/*Como instalar o morgan e para que ele serve?
O morgan é uma biblioteca para informar os status de cada teste que fizermos na nossa API
Se dermos um get, ele irá retornar esse get e o status do que foi solicitado da nossa API

1 - Escreva no terminal:  "npm install --save morgan" (O save irá salvar em todos os ambientes do nosso projeto)

2 - Após instalado,  temos que fazer a requisação da biblioteca no nosso arquivo "app.js", const morgan = require('morgan');

3 -  Agora que já criamos a const morgan requisitando a biblioteca, precisamos colocar ela para funcionar.
No arquivo app.js, acima das nossas rotas, iremos  inserir : "app.use(morgan('dev'));"
Isso  mostrará o status para nós  a cada rota que for  solicitada.
No log irá retornar: O tipo de solicitação,  get, post, etc...
O endereço de solicitação, se foi em um /produtos ou /pedidos etc...
O tempo em milisegundos que demorou para fazer essa soliticação
E o tamanho de caracteres que foi retornado para pessoa que acessou, no caso o tamanho do texto de por exemplo: "mensagem": "Usando o POST dentro da rota de produtos"*/


/**Tratamento de erros de rotas, Como fazer e o que fazer?
 * 
 * Para tratarmos um erro de uma rota que não leva em lugar algum precisamos fazer uma rota sem destino
 *  e com uma mensagem de erro e com status informando o que aconteceu.
 * 
 * 1 - Ir no nosso app.js, e criar uma rota para tratar o ocorrido descrito acima
 */


API com Node JS - Passo 4 - Definindo o Body e tratando CORS (Atualizado)

https://www.youtube.com/watch?v=VNkSH5ENSlQ&list=PLWgD0gfm500EMEDPyb3Orb28i7HK5_DkR&index=34 7:31 CORS : é  uma propriedade que permite um site acessar outro site para consultar informações dependendo de algumas restrições O que é cors e para que ele serve? https://www.youtube.com/watch?v=GZV-FUdeVwE


Conectando o banco de dados com o código https://www.youtube.com/watch?v=642J5YzLXDk&list=PLWgD0gfm500EMEDPyb3Orb28i7HK5_DkR&index=38&t=7s

