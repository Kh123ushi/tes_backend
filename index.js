require('dotenv').config();
const express  = require('express');
const app = express();
const port =3000

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/about',(req,res)=>{
    res.send('pls login')
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${port}`)
}) 