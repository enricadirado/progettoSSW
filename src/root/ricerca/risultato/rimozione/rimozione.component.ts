import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Libro } from '../../../libro';
import { ArchivioService } from '../../../archivio.service';
import { Archivio } from '../../../archivio';
import { AjaxResponse } from 'rxjs/ajax';

@Component({
  selector: 'app-rimozione',
  templateUrl: './rimozione.component.html',
  styleUrls: ['./rimozione.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class RimozioneComponent implements OnInit {
  @Input() libroTrovato: Libro;
  archivioFinal: Array<Libro>=[];
  constructor(private as: ArchivioService) {}
  rimuoviDoc(){
    console.log('rimozione', this.libroTrovato);
    this.as.getData().subscribe({
      next: (x: AjaxResponse<any>) =>{
        let archivioStart: Archivio= new Archivio(JSON.parse(x.response));
        this.archivioFinal = archivioStart.archivio.filter((el) =>
        (el.titolo !== this.libroTrovato.titolo || el.autore !== this.libroTrovato.autore || el.posizione !== this.libroTrovato.posizione || el.nominativo !== this.libroTrovato.nominativo));
        console.log('final', this.archivioFinal);

        var archivio3= JSON.stringify(this.archivioFinal);
        console.log(archivio3);
        
        this.as.setData(archivio3).subscribe({
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
  ngOnInit() {}
}




