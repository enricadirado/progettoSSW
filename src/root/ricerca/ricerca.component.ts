import { CommonModule } from '@angular/common';
import { PrestitoComponent } from './prestito/prestito.component';
import { RimozioneComponent } from './rimozione/rimozione.component';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
  standalone:true,
  imports:[RimozioneComponent, PrestitoComponent, CommonModule]
})
export class RicercaComponent implements OnInit {
  @Input() selezione: string;
  constructor() { }

  ngOnInit() {
  }

}