const mongoose = require('mongoose')

const jogoSchema = mongoose.Schema({
    titulo: { type: String, required: true },
    editora: { type: String, required: true },
    numDeJogadores: { type: String, required: true },
    tempoDeJogo: { type: String, required: true },
    indicacaoFaixaEtaria: { type: String, required: false },
    imagem: { type: String, required: true}
})

const jogo = mongoose.model('Jogos', jogoSchema)

module.exports = jogo
