import { JogoService } from './../../../services/jogo.service';
import { Component, OnInit } from '@angular/core';
import { Jogo } from './../../../models/jogo'

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  constructor(private jogoService: JogoService) { }

  public jogos!: Jogo[]

  ngOnInit(): void {
    this.jogoService.getJogos().subscribe((response: Jogo[]) => {
      this.jogos = response
      console.log(this.jogos)
    });

  }

}




