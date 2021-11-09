/**https://www.youtube.com/watch?v=hAAj27hgPFg&list=PLWgD0gfm500EMEDPyb3Orb28i7HK5_DkR&index=13 */
const express = require('express'); /**Depois de instalar o express pelo npm, vamos importar ele aqui com esta constante */
const app = express();
const morgan = require('morgan'); /*Após instalar o morgan, fazemos a requisão dele aqui*/ 
const bodyParser = require('body-parser') /**Após fazer o npm install --save body-parser, fazemos a requisão aqui*/


const rotaProdutos = require('./routes/produtos'); /*Importando o arquivo produtos da pasta routes*/

const rotaPedidos = require('./routes/pedidos'); /** criando a rota para pedidos */



/**  estamos fazendo uma requisão: req, resposta e next, no caso o que estiver   dentro da função */
/**Se tudo ocorrer bem na requisição irá aparecer essa mensagem, pois status 200 é quando deu tudo certo na requisição */

app.use(morgan('dev'));     /**Chamando o morgan antes das nossas rotas para  retornar o status de qualquer solicitação feita na nossa api, para  mostrar no terminal */

app.use(bodyParser.urlencoded({extended: false})) /**Chamando o body e setando dados simples */

app.use(bodyParser.json()) /**Aceitar somente requsisões com o formato de json */

/**Configurando as permissões de acesso e o cabeçalho */


app.use((req,res,next) =>{
    res.header('Acess-Control-Allow-Origin', '*'); /**Permissão de controle de acesso '*' asterisco significa todos, se fosse um servidor específico informariamos por exemplo: http://servidorespecifico.com.br/ */
    res.header('Acess-Control-Allow-Header',
    'Origin, X-Requested-With, Content-Type, Accept,Authorization'); /**Permissões de  Headers, isso nós vemos no postman na parte headers */

    if(req.method === 'OPTIONS'){
        res.header('Acess-Control-Allow-Methods', 'PUT', 'POST','PATCH', 'DELETE', 'GET');
        return res.status(200).send({});
    }
    next();
});

app.use('/produtos', rotaProdutos); /**Chamando a rota de produtos */

app.use('/pedidos', rotaPedidos); /**CHamando a rota de pedidos */

/**Tratamento de erro, se acontecer de nenhum dos caminhos acima forem acessados, automaticamente irá cair no caminho de baixo
 * e esse caminho de baixo  é simplesmente quando o caminho solicitado não é encontrado
 * então, quando isso acontecer, informaremos o erro com essa mensagem para o usuário com o status (404) que é o status de rota não encontrada
 */

app.use((req, res, next) =>{
    const erro = new Error('Requisição não encontrada. Tente novamente ou verique o caminho inserido')
    erro.status = 404;
    next(erro);
}); 

/**Tratamento de erro de resposta do servidor */

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        error:{
            mensagem: error.message
        }
    });
});

module.exports = app; /** criando uma exportação para importamos o app no server.js */