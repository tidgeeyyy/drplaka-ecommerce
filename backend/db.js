import dotenv from 'dotenv';
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'TestDB',
    password: 'admin',
    port: 5432,
});

export default pool;
