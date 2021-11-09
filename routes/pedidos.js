const express = require('express'); /**Chamando o express que instalamos para esse arquivo produtos.js */
const router = express.Router();


//Retorna todos os produtos

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'mostra todos os pedidos'
    });
});

//Insere um produto
router.post('/', (req, res, next) => {
    const pedido ={
        id_produto: req.body.id_produto, /**Irá pegar o Id do pedido criado */
        quantidade_produtos: req.body.quantidade_produtos /**Irá pegar a quantidade de pedidos criados */
    }
    res.status(201).send({
        mensagem: 'O pedido foi criado',
        pedido: pedido  /**Aqui irá mostrar exatamente o que foi solicitado e postado acima */
    });
});

//Retornar os dados específico de 1 produto

router.get('/:id_pedido', (req,res,next) =>{
    const id = req.params.id_pedido;
    res.status(201).send({
        mensagem:'mostra todos os pedidos'
    });


    
});

//EXCLUI 1 PRODUTO
router.delete('/',(req,res,next)=> {
    res.status(201).send({
        mensagem:'pedido cancelado'
    })
});

module.exports = router; 