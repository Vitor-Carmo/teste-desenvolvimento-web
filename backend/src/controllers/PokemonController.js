const mysql = require('../database/mysql').pool


module.exports = {

    // listar pokémons
    list(req, res){
        mysql.getConnection((err, conn) => {
            if(err){ return res.status(500).send({ error: err }) }

            conn.query(
                'SELECT * from Pokemon',
                (err, response, fields) =>{
                    if(err){ return res.status(500).send({ error: err }) }
                    
                    return res.status(200).send( { data: response } )
                }
            )
        })
    },


    // mostra pokémon pelo id
    show(req, res) {
        mysql.getConnection((err, conn) => {
            if(err){ return res.status(500).send({ error : err }) }

            conn.query(
                'SELECT * FROM Pokemon WHERE id = ?',
                req.params.id,
                (err, response, field) => {
                    if(err){ return res.status(500).send({ error: err }) }
                    
                    return res.status(200).send( { data: response } )
                }                
            )
        })
    },


    // criar pokémon
    create(req, res){
        mysql.getConnection((err, conn) => {
            if(err){ return res.status(500).send({ error : err }) }

            conn.query(
                'INSERT INTO Pokemon SET ?',
                req.body,
                (err, response, fields) =>{
                    if(err){ return res.status(500).send({ error : err }) }
                    
                    return res.status(201).send( { menssage: 'Pokémon registrado com sucesso', data: response })
                }
            )
        })
        
    
    },

    // alterar dados do pokémon
    update(req, res){
        mysql.getConnection((err, conn) =>{
            if(err){ return res.status(500).send({ error : err }) }

            conn.query(
                'UPDATE Pokemon SET ? WHERE id = ?',
                [ req.body , req.params.id ],
                (err, response, fields) => {
                    if(err){ return res.status(500).send({ error : err }) }

                    return res.status(202).send( { message:'Pokémon alterado com sucesso', data: response })
                }  

            )
        })
    },

    // deletar pokémon
    delete(req, res){
        mysql.getConnection((err, conn) =>{
            if(err){ return res.status(500).send({ error : err }) }
            
            conn.query(
                'DELETE FROM Pokemon WHERE id = ?',
                [req.params.id],
                (err, response, fields) =>{
                    if(err){ return res.status(500).send({ error : err }) }

                    return res.status(202).send( { message:'Pokémon deletado com sucesso', data: response } )
                }
            )
        })
    }


}
