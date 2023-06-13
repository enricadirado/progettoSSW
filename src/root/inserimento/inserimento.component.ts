import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchivioService } from '../archivio.service';
import { Libro } from '../libro';
import { AjaxResponse } from 'rxjs/ajax';
import { Archivio } from '../archivio';

@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class InserimentoComponent implements OnInit {
  @Input() selezione: string;
  @Output() newViewEvent = new EventEmitter<string>();


  constructor(private as: ArchivioService) {}
  ngOnInit() {}
  cambioView(name: string) {
    this.selezione = name;
    this.newViewEvent.emit(this.selezione);
  }

  inserisciDoc() {
    let titolo: string = (document.getElementById('titolo') as HTMLInputElement)
      .value;
    let autore: string = (document.getElementById('autore') as HTMLInputElement)
      .value;
    let posizione: string = (
      document.getElementById('posizione') as HTMLInputElement
    ).value;
    let libro: Libro = new Libro(autore, titolo, posizione, 'undefined');

    this.as.getData().subscribe({
      next: (x: AjaxResponse<any>) =>{
        var archivio1: Archivio = new Archivio(JSON.parse(x.response));
        console.log(archivio1);
        archivio1.aggiuntaLibro(libro);
        var archivio2 = JSON.stringify(archivio1);
        console.log(archivio2);
        this.as.setData(archivio2).subscribe({
          next: (x: AjaxResponse<any>) =>{
            console.log(x.response);
          },
          error: (err) =>
            console.error('Observer got an error: ' + JSON.stringify(err)),
        });
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });

  }
}

/*
view: string= 'home';
  seleziona(name: string) {
    this.selezione = name;
  }




this.ws.getData().subscribe({
      next: (x: AjaxResponse<any>) =>
        (x.response),
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  */
