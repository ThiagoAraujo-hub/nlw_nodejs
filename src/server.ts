import express from 'express';
import "reflect-metadata";
import "@database/index";

const app = express();

app.get('/', (req, res) => {
    res.json({ message: "API NLW" })
})

app.post('/', (req, res) => {
    res.json({ message: "API NLW método POST" })
})

app.listen(3000, () => console.log('Server is running'))