import { Component, OnInit } from '@angular/core';
import { PrestitoComponent } from './prestito/prestito.component';
import { RimozioneComponent } from './rimozione/rimozione.component';

@Component({
  selector: 'app-risultato',
  templateUrl: './risultato.component.html',
  styleUrls: ['./risultato.component.css'],
  standalone:true,
  imports: [RimozioneComponent, PrestitoComponent]
})
export class RisultatoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}