import dotenv from 'dotenv';
dotenv.config({ silent: true });

import express from 'express';
import { connectDB } from './db/connectDB.js';
import {join} from 'path'
import web from './route/web.js'

const database_URL = process.env.database_URL || "mongodb://127.0.0.1:27017";

const app = express()
const port = process.env.PORT || 8000;

// Creating Connection
connectDB(database_URL)

app.use(express.urlencoded({extended:false}))

// using static files
app.use(express.static(join(process.cwd(),'public')))
app.use('/edit',express.static(join(process.cwd(),'public')))
app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.use('/',web);


app.listen(port, ()=>console.log(`App listing at http://localhost:${port} and you must have installed MongoDB in your local system or create an env file and put a variable named "database_URL" with a corresponding value to test this project.`));
