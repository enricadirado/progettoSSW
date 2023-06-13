import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ArchivioService } from '../archivio.service';
import { Libro } from '../libro';

import { AjaxResponse } from 'rxjs/ajax';
import { Archivio } from '../archivio';
import { RimozioneComponent } from './rimozione/rimozione.component';


@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
  standalone:true,
  imports:[CommonModule, RimozioneComponent]  //per ora non ci sono prestito e rimozione
})
export class RicercaComponent implements OnInit {
  @Input() selezione: string;
  @Output() ricercaLibroEvent = new EventEmitter<string>();
  
  constructor(private as: ArchivioService) { }
  
  ricercaLibro(){
    this.as.getData().subscribe({
      next: (x: AjaxResponse<any>) =>{
        let input: HTMLInputElement = document.getElementById("res") as HTMLInputElement;
        let y = input.value;

        console.log(JSON.parse(x.response));
        let archivio1: Archivio = new Archivio(JSON.parse(x.response));
        console.log(archivio1);

        /*var archivio2: Array<Libro> = JSON.parse(x.response);
        console.log(archivio2, '2 type:', typeof(archivio2));*/

/*
        const archivio_filtrato= archivio2.filter((el) =>
        (el.titolo + el.autore).toLowerCase().includes(y));
        console.log(archivio_filtrato, "3 type: ", typeof(archivio_filtrato));

        if(y!=""){
          if (archivio_filtrato.length===1){
            this.libroTrovato = archivio_filtrato[0];
            console.log('LT', this.libroTrovato, "4 type: ", typeof(this.libroTrovato));
            this.numeroLibri= archivio_filtrato.length;
            this.titolo= this.libroTrovato.titolo;
            this.autore= this.libroTrovato.autore;
            this.posizione= this.libroTrovato.posizione;
            this.nominativo= this.libroTrovato.nominativo;
          } else {
            this.numeroLibri= archivio_filtrato.length;
            console.log(this.numeroLibri);
          } 
        } else {
          console.log("ex", y)
          this.libroTrovato = undefined;
          this.numeroLibri=-1;
        }*/
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }
  numeroLibri: number;
  libroTrovato: Libro;
  archivio1: Archivio;

  titolo: string;
  autore:string;
  posizione:string;
  nominativo:string;

  archivio2: Array<Libro>;
  
  ngOnInit() {
  }
}

/*
console.log(x.response, '1 type:', typeof(x.response));
console.log(JSON.parse(x.response), '1 type:', typeof(JSON.parse(x.response)));
 var archivio: Archivio = new Archivio(JSON.parse(x.response));
        console.log(archivio, '1 type:', typeof(archivio));
*/