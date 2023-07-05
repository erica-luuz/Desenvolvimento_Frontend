export class Jogo {
  _id: string;
  titulo: string;
  editora: string;
  numDeJogadores: string;
  tempoDeJogo: string;
  indicacaoFaixaEtaria: string;
  imagem: string

  constructor(_id: string,
              titulo: string,
              editora: string,
              numDeJogadores: string,
              tempoDeJogo: string,
              indicacaoFaixaEtaria: string,
              imagem: string )
  {
    this._id = _id;
    this.titulo = titulo;
    this.editora = editora;
    this.numDeJogadores = numDeJogadores;
    this.tempoDeJogo = tempoDeJogo;
    this.indicacaoFaixaEtaria = indicacaoFaixaEtaria;
    this.imagem = imagem

  }

}
