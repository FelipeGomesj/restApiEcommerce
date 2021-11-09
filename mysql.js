const mysql = require('mysql');

var pool = mysql.createPool({
    "user":process.env.MYSQL_USER, /** O  certo é definir uma variável   de ambite após o user: procss.env.MYSQL_USER */
    "password":process.env.MYSQL_PASSWORD, /** O  certo é definir uma variável   de ambite após o user: procss.env.MYSQL_USER. Isto é feito para nao ficar uma falha de segurança e acessarem a senha e login */
    "database":process.env.MYSQL_DATABASE,
    "host":process.env.MYSQL_HOST,
    "port":process.env.MYSQL_PORT
});

exports.pool = pool;