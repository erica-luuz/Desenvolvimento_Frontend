import { Animal } from 'src/app/models/animal';
import { AnimalService } from './../../../services/animal.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private animalService: AnimalService) { }

  public animais!: Animal[];

  ngOnInit(): void {
    this.animalService.buscarAnimais().subscribe((response) => {
      this.animais = response
      console.log(response)
    })
  }

}
