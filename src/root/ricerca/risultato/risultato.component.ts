import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Libro } from '../../libro';
import { Archivio } from '../../archivio';
import { RimozioneComponent } from './rimozione/rimozione.component';
import { PrestitoComponent } from './prestito/prestito.component';

@Component({
  selector: 'app-risultato',
  templateUrl: './risultato.component.html',
  styleUrls: ['./risultato.component.css'],
  standalone: true,
  imports: [CommonModule, RimozioneComponent, PrestitoComponent],
})
export class RisultatoComponent implements OnInit {
  @Input() numeroLibri: number;
  @Input() libroTrovato: Libro;
  @Input() y: string;
  @Output() removeDocEvent = new EventEmitter<string>();
  x: string;
  @Output() removeResEvent = new EventEmitter<string>();
  

  constructor() {}
  removeDoc(x: string) {
    this.removeDocEvent.emit(this.x);
    
  }
  removeRes(y: string) {
    this.y = '';
    this.removeResEvent.emit(this.y);
  }
  ngOnInit() {}
}
