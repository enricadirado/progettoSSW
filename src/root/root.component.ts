import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InserimentoComponent } from './inserimento/inserimento.component';
import { RicercaComponent } from './ricerca/ricerca.component';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  standalone: true,
  imports: [InserimentoComponent, RicercaComponent, CommonModule],
})
export class RootComponent implements OnInit {

  window:string= 'home';

  changeWindow(wind:string){
    this.window= wind;
  }
  
  constructor() {}

  ngOnInit() {}
}


/*
addCity(newCity: string) {
    this.cities.push(newCity);
  }
*/