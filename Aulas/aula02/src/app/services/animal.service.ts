import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Animal } from "../model/animal";
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  buscarAnimais() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  public getAnimal(): Observable<Animal[]> {
    return this.http.get<Animal[]>("http://localhost:8050/listar-animais");
  }

}



