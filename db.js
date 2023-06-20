import mysql from 'mysql2'

export const pool = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    user: 'root',
    database: 'node_sql',
    password: 'root'
});