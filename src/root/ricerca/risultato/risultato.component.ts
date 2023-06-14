import { CommonModule } from '@angular/common';
import { Component, OnInit , Input} from '@angular/core';
import { Libro } from '../../libro';
import { Archivio } from '../../archivio';
import { RimozioneComponent } from './rimozione/rimozione.component';
import { PrestitoComponent } from './prestito/prestito.component';

@Component({
  selector: 'app-risultato',
  templateUrl: './risultato.component.html',
  styleUrls: ['./risultato.component.css'],
  standalone:true,
  imports: [CommonModule, RimozioneComponent, PrestitoComponent]
})
export class RisultatoComponent implements OnInit {
  @Input() numeroLibri: number;
  @Input() libroTrovato: Libro;
  
  constructor() { }
  
  ngOnInit() {
  }

}