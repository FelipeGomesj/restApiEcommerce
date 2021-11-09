/* aula 1 - estruturas básicas de criação de api *https://www.youtube.com/watch?v=hAAj27hgPFg&list=PLWgD0gfm500EMEDPyb3Orb28i7HK5_DkR&index=13 */
/*Após dar o comando npm init e preencher o package json com as informações
Criando a pasta node_modules: Instalar o express, digitar no term: npm install --save (--save irá incluir a instalaçao no nosso arquivo package.json, ou seja todo pacote que for instalarmos localmente, colocamos o --save)
*/ 

const http = require('http'); /*A constante http irá fazer a requisão http para funcionar nossa api*/ 
const port = process.env.PORT || 3000; /** a const port irá acessar  pela porta  process.env.PORT ou pela porta localhost:3000 */
const app = require('./app'); /**Importando o app do app.js */
const server = http.createServer(app); /* criando o server, usando a biblioteca de http o server irá ficar escutando todo o conteúdo que tiver dentro de app.js*/ 
server.listen(port); /**O server irá ficar escutando na nossa port */
