const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const port = 8050
const connectionString = "mongodb+srv://admin:admin123@dbjogos.q0cgdup.mongodb.net/"
const Jogo = require('./models/jogo')

app.use(express.json())
app.use(cors())

app.get("/listar-jogos", async (req,res) => {
    try {
        let jogos = await Jogo.find()
        return res.status(200).json(jogos)
    } catch (error) {
        return res.status(500).json(error)
    }
})

app.post('/adicionar-jogo', async (req, res) => {
    let { titulo, editora, numDeJogadores, tempoDeJogo, indicacaoFaixaEtaria, imagem } = req.body

    let jogo = {
        titulo,
        editora,
        numDeJogadores,
        tempoDeJogo,
        indicacaoFaixaEtaria,
        imagem
    }
    try {
        await Jogo.create(jogo)
        return res.status(201).json({ message: "Jogo cadastrado com sucesso!"})
    } catch (error) {
            return res.status(500).json({ message: error.message })
    }
    })


mongoose.connect(connectionString, {
    dbName: "Dbjogos"
}).then(() => {
    console.log("MongoDb UP!")
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})
