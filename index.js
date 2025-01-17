require('dotenv').config();
const express  = require('express');
const app = express();
const port =3000

const githubData = {
    username: "khushi",
    repositories: ["repo1"]
};

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/about',(req,res)=>{
    res.send('pls login')
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${port}`)
}) 