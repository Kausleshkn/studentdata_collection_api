import express from 'express';
import { connectDB } from './db/connectDB.js';
import {join} from 'path'
import web from './route/web.js'

const database_URL = process.env.database_URL || "mongodb+srv://kausleshjst:WgnVZPccTnkRM5Zp@cluster0.tv7xeav.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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


app.listen(port, ()=>console.log(`App listing at http://localhost:${port}`))
