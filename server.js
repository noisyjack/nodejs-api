require('dotenv').config();

const express = require('express');
const { Db } = require('mongodb');
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', (error) => console.log('Connected to dB'));

app.use(express.json());

const subsribersRouter = require('./routes/subscribers');
app.use('/subscribers', subsribersRouter)


app.listen(3000, () => console.log('Server Started'));