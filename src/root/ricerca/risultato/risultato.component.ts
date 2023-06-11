import { CommonModule } from '@angular/common';
import { Component, OnInit , Input} from '@angular/core';

import { PrestitoComponent } from './prestito/prestito.component';
import { RimozioneComponent } from './rimozione/rimozione.component';

@Component({
  selector: 'app-risultato',
  templateUrl: './risultato.component.html',
  styleUrls: ['./risultato.component.css'],
  standalone:true,
  imports: [RimozioneComponent, PrestitoComponent, CommonModule]
})
export class RisultatoComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}