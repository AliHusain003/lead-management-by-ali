import express from 'express';
const app = express();
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Pool } from 'pg';
import cors from 'cors';

app.use(express.json());
app.use(cors())

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

app.listen(process.env.BACKENDPORT, () => {
    console.log(`your server is running at the port ${process.env.BACKENDPORT}`)
});

app.post('/signup', async (req, res) => {

    console.log(req.body)

    const { userName, email, password } = req.body;

    if (!userName && !email && !password) {
        return res.status(401).json({
            error: "Missing Credentials"
        });
    }

    const saltRound = 10;
    const hashPassword = await bcrypt.hash(password, saltRound)

    const result = await pool.query(`INSERT INTO users(username, email, password) VALUES($1,$2,$3)`, [userName, email, hashPassword])

    console.log(result)

    res.status(201).json({
        message: "User Created Successfully",
        data: {
            userName, 
            email
        }
    });

})