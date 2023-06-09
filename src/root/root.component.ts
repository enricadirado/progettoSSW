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
  title: string ="Gestione biblioteca - Home";
  view: string= 'home';
  seleziona(name: string) {
    this.selezionata = name;
  }
  
  selezionata: string|undefined;
  
  constructor() {}

  ngOnInit() {}
}


/*
quando clicco su button 
- si triggera il metodo "seleziona" (su root ts)
- "seleziona" prende view (su root ts)
- entra in root ts
- "seleziona" assegna alla var "selezionata" un nome: in input era view, ovvero home
- "selezionata" è su root html e viene mostrato
*/