const express = require('express'); /**Chamando o express que instalamos para esse arquivo produtos.js */
const router = express.Router();
const mysql = require('../mysql').pool;


//Retorna todos os produtos
   
router.get('/', (req, res, next) => {
    //res.status(200).send({
      //  mensagem: 'mostra todos os produtos'
    //});
    mysql.getConnection((error,conn)=>{
        if(error) {return res.status(500).send({error: error})}
        conn.query(
            'SELECT * FROM produtos;',
            (error, resultado, fields) =>{
                if(error){return res.status(500).send({error: error})}
                return res.status(200).send({response:resultado})
            }
        )
    })
});

//Insere um produto
router.post('/', (req, res, next) => {
    const produto = {
        nome_produto: req.body.nome, /**Pegar o valor de nome do corpo do json  */
        preco_produto: req.body.preco /** Pegar o valor de preço do corpo json */
    };
    /**Fazendo o insert no banco de dados  */
    mysql.getConnection((error, conn)=>{
        if(error){ return res.status(500).send({error: error})}
        conn.query(
            'INSERT INTO produtos (nome, preco) VALUES (?,?)', 
            [req.body.nome, req.body.preco],
            /**CALLBACK */
            (error, resultado, field) =>{
                conn.release(); /** Liberando a conexão para tratar erros, isso é obrigatório, pois senão tiver a  api fica travada */
                
                if(error){ return res.status(500).send({error: error})}

                res.status(201).send({
                    mensagem:'Produto inserido com sucesso',
                    id_produto: resultado.insertId
                });

            }
        )
    })
});

//Retornar os dados específico de 1 produto

router.get('/:id_produto', (req,res,next) =>{
    mysql.getConnection((error,conn)=>{
        if(error) {return res.status(500).send({error: error})}
        conn.query(
            'SELECT * FROM produtos WHERE id_produto =?;',
            [req.params.id_produto],
            (error, resultado, fields) =>{
                if(error){return res.status(500).send({error: error})}
                return res.status(200).send({response:resultado})
            }
        )
    })
});
//ALTERA UM PRODUTO
router.patch('/',(req, res, next) => {
    mysql.getConnection((error, conn)=>{
        if(error){ return res.status(500).send({error: error})}
        conn.query(
            `UPDATE produtos 
            SET nome = ?,
            preco = ?
            WHERE id_produto = ?`,
            [req.body.nome,
            req.body.preco, 
            req.body.id_produto],
            /**CALLBACK */
            (error, resultado, field) =>{
                conn.release(); /** Liberando a conexão para tratar erros, isso é obrigatório, pois senão tiver a  api fica travada */
                
                if(error){ return res.status(500).send({error: error})}

                res.status(202).send({
                    mensagem:'Produto alterado com sucesso'
                });

            }
        )
    })
});

//EXCLUI 1 PRODUTO
router.delete('/',(req,res,next)=> {
    mysql.getConnection((error, conn)=>{
        if(error){ return res.status(500).send({error: error})}
        conn.query(
            `DELETE  FROM produtos WHERE id_produto = ?`,
            [req.body.id_produto],
            /**CALLBACK */
            (error, resultado, field) =>{
                conn.release(); /** Liberando a conexão para tratar erros, isso é obrigatório, pois senão tiver a  api fica travada */
                
                if(error){ return res.status(500).send({error: error})}

                res.status(202).send({
                    mensagem:'Produto excluído com sucesso'
                });

            }
        )
    })
});

module.exports = router; 