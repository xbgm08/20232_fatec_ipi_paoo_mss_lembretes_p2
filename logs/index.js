require('dotenv').config()
const express = require('express')
const moment = require('moment')
require('moment/locale/pt-br')
const app = express();
app.use(express.json())

let i = 1
let array = {}

app.get('/logs', (req, res)=>{
    res.json(array).status(200).end()
})

app.post('/eventos', (req, res) => {
    try {
        const type = req.body.type        
        let date = `${moment().format('ll')} ${moment().format('LTS')}`

        let historico = { type, date }
        array[i] = historico
        i++
    }
    catch (e) { }
    res.status(200).end()
})

app.listen(
    process.env.PORT,
    () => console.log(`Lembretes: ${process.env.PORT}`)
)