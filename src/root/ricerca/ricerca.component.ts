import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ArchivioService } from '../archivio.service';
import { Libro } from '../libro';

import { AjaxResponse } from 'rxjs/ajax';
import { Archivio } from '../archivio';

import { RisultatoComponent } from './risultato/risultato.component';
import { RisultatoLibriComponent } from './risultato-libri/risultato-libri.component';
import { RisultatoNulloComponent } from './risultato-nullo/risultato-nullo.component';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
  standalone: true,
  imports: [CommonModule, RisultatoComponent, RisultatoLibriComponent, RisultatoNulloComponent], 
})
export class RicercaComponent implements OnInit {
  @Input() selezione: string;
  @Output() ricercaLibroEvent = new EventEmitter<string>();
  numeroLibri: number;
  archivioFinal: Array<Libro> = [];
  archivioStart: Archivio;
  libroTrovato: Libro;
  titolo: string;
  autore: string;
  posizione: string;
  nominativo: string;

  mostra: string;

  constructor(private as: ArchivioService) {}

  ricercaLibro() {
    this.as.getData().subscribe({
      next: (x: AjaxResponse<any>) => {
        let input: HTMLInputElement = document.getElementById(
          'res'
        ) as HTMLInputElement;
        let y = input.value;

        let archivioStart: Archivio = new Archivio(JSON.parse(x.response));

        this.archivioFinal = archivioStart.archivio.filter((el) =>
          (el.titolo + el.autore).toLowerCase().includes(y)
        );

        console.log(archivioStart, '2 type:', typeof archivioStart);
        console.log(this.archivioFinal,'final type:',typeof this.archivioFinal);

        if (y != '') {
          if (this.archivioFinal.length === 1) {
            this.libroTrovato = this.archivioFinal[0];
            console.log('LT',this.libroTrovato,'4 type: ',typeof this.libroTrovato );
            this.numeroLibri = this.archivioFinal.length;
            this.titolo = this.libroTrovato.titolo;
            this.autore = this.libroTrovato.autore;
            this.posizione = this.libroTrovato.posizione;
            this.nominativo = this.libroTrovato.nominativo;
            this.mostra="result";
          } else {
            this.numeroLibri = this.archivioFinal.length;
            console.log(this.numeroLibri);
            this.mostra="result1";
          }
        } else {
          this.libroTrovato = undefined;
          this.numeroLibri = -1;
          this.mostra="result2";
        }
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }
  ngOnInit() {}
}

/*
console.log(x.response, '1 type:', typeof(x.response));
console.log(JSON.parse(x.response), '1 type:', typeof(JSON.parse(x.response)));
 var archivio: Archivio = new Archivio(JSON.parse(x.response));
        console.log(archivio, '1 type:', typeof(archivio));
*/
