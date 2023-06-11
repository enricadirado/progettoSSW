import { CommonModule } from '@angular/common';
import { PrestitoComponent } from './prestito/prestito.component';
import { RimozioneComponent } from './rimozione/rimozione.component';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ArchivioService } from '../archivio.service';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
  standalone:true,
  imports:[RimozioneComponent, PrestitoComponent, CommonModule]
})
export class RicercaComponent implements OnInit {
  @Input() selezione: string;
  @Output() ricercaLibroEvent = new EventEmitter<string>();

  constructor(private as: ArchivioService) { }

  ricercaLibro(){
    let input: HTMLInputElement = document.getElementById("res") as HTMLInputElement;
    var newName = input.value;
    this.ricercaLibroEvent.emit(newName);
  }

  ngOnInit() {
  }
}

/*
var input: HTMLInputElement = document.getElementById("nuovo") as HTMLInputElement;
    var newName = input.value;
    this.newCityEvent.emit(newName);
    input.value='';
*/