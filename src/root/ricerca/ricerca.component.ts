import { Component, OnInit } from '@angular/core';
import { PrestitoComponent } from './prestito/prestito.component';
import { RimozioneComponent } from './rimozione/rimozione.component';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
  standalone:true,
  imports:[RimozioneComponent, PrestitoComponent]
})
export class RicercaComponent implements OnInit {

  view: string = 'research';

  constructor() { }

  ngOnInit() {
  }

}