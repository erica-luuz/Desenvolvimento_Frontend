import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Jogo } from '../models/jogo';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  constructor(private http: HttpClient) { }

  public getJogos(): Observable<Jogo[]>{
    return this.http.get<Jogo[]>("http://localhost:8050/listar-jogos")
  }
}


