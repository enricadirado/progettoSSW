import { Component, Input, OnInit } from '@angular/core';
import { Libro } from '../../../libro';
import { ArchivioService } from '../../../archivio.service';
import { AjaxResponse } from 'rxjs/ajax';
import { Archivio } from '../../../archivio';

@Component({
  selector: 'app-prestito',
  templateUrl: './prestito.component.html',
  styleUrls: ['./prestito.component.css'],
  standalone:true
})
export class PrestitoComponent implements OnInit {
  @Input() libroTrovato: Libro;
  archivioFinal: Array<Libro>=[];
  constructor(private as: ArchivioService) { }
  
  newName(){
    /*prendo il nome*/
    var input: HTMLInputElement = document.getElementById("nominativoInput") as HTMLInputElement;
    var nome = input.value;
    console.log(nome);

    this.libroTrovato.nominativo=nome;
    console.log('nuovo nominativo:', this.libroTrovato.nominativo);

    /*prendo l'archivio*/
    this.as.getData().subscribe({
      next: (x: AjaxResponse<any>) => {
        let archivioStart: Archivio= new Archivio(JSON.parse(x.response));
        console.log('archivio start', archivioStart);
        /*elimino il libro*/
        this.archivioFinal = archivioStart.archivio.filter((el) =>
        (el.titolo !== this.libroTrovato.titolo || el.autore !== this.libroTrovato.autore || el.posizione !== this.libroTrovato.posizione || el.nominativo !== this.libroTrovato.nominativo));

        /*aggiungo il libro*/
        let libro: Libro = new Libro(this.libroTrovato.autore, this.libroTrovato.titolo, this.libroTrovato.posizione, nome);
        archivioStart.aggiuntaLibro(libro);

        var archivio2 = JSON.stringify(archivioStart.archivio);
        console.log(archivio2);
        var archivio3= JSON.stringify(archivio2);
        console.log('nuovo archivio', archivio3);
        /*setto nuovo valore*/

        this.as.setData(archivio3).subscribe({
          next: (x: AjaxResponse<any>) => {
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

  ngOnInit() {
  }

}
