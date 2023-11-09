import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import { check, validationResult } from 'express-validator';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

app.set('viewEngine', 'ejs');

app.use('./public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index.ejs');
});


app.listen(port, () => {
    console.log(`Server running on Port ${port}`);
});