const express = require('express');
const app = express();         
const port = 3000; //porta padrão
const HOST = '0.0.0.0';
const mysql = require('mysql');

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);

//inicia o servidor
app.listen(PORT, HOST);
console.log('API funcionando!');


function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
        host     : 'mysql743.umbler.com',
        port     : 41890,
        user     : 'projeto_marcelo',
        password : 'Projeto2021',
        database : 'projeto_marcelo'
    });

    connection.query(sqlQry, function(error, results, fields){
        if(error) 
        res.json(error);
        else
        res.json(results);
        connection.end();
        console.log('executou!');
    });
}

router.get('/response', (req, res) =>{
    execSQLQuery('SELECT frase FROM `response` WHERE id = 1', res);
})
