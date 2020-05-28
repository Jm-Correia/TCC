import express from 'express'

let app = express.application

app.get('/', (req, res)=>{
    return res.send('Hello world')
});

app.listen(3001);
