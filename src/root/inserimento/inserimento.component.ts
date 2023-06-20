import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchivioService } from '../archivio.service';
import { Libro } from '../libro';
import { AjaxResponse } from 'rxjs/ajax';
import { Archivio } from '../archivio';
import { NotificaComponent } from './notifica/notifica.component';

@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.css'],
  standalone: true,
  imports: [CommonModule, NotificaComponent],
})
export class InserimentoComponent implements OnInit {
  @Input() selezione: string;
  @Output() newViewEvent = new EventEmitter<string>();
  notifica: string;

  constructor(private as: ArchivioService) {}
  ngOnInit() {}
  cambioView(name: string) {
    this.selezione = name;
    this.newViewEvent.emit(this.selezione);
    this.notifica='false';
  }

  inserisciDoc() {
    var inputTitolo: HTMLInputElement = document.getElementById('titolo') as HTMLInputElement;
    var titolo = inputTitolo.value;
    var inputAutore: HTMLInputElement = document.getElementById('autore') as HTMLInputElement;
    var autore = inputAutore.value;
    var inputPosizione: HTMLInputElement = document.getElementById('posizione') as HTMLInputElement;
    var posizione = inputPosizione.value;
    let libro: Libro = new Libro(autore, titolo, posizione, 'undefined');

    this.as.getData().subscribe({
      next: (x: AjaxResponse<any>) => {
        var archivio1: Archivio = new Archivio(JSON.parse(x.response));
        console.log(archivio1);
        archivio1.aggiuntaLibro(libro);
        var archivio2 = JSON.stringify(archivio1.archivio);
        console.log(archivio2);
        this.as.setData(archivio2).subscribe({
          next: (x: AjaxResponse<any>) => {
            console.log(x.response);
            this.notifica='true';
          },
          error: (err) =>
            console.error('Observer got an error: ' + JSON.stringify(err)),
        });
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
    inputTitolo.value = '';
    inputAutore.value = '';
    inputPosizione.value = '';
  }
}
