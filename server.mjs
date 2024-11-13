import express from "express";

const app =express()
const port =3000;

app.get('/', (req, res) =>{
    res.send('Welcome To My Server')
})

app.listen(port, () => {
    console.log(`Server is Runing on Port ${port}`);
    console.log(`http://localhost:${port}`);
});