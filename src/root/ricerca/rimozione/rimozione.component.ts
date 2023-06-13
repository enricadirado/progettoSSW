import { CommonModule } from '@angular/common';
import { ArchivioService } from '../../archivio.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Libro } from '../../libro';

@Component({
  selector: 'app-rimozione',
  templateUrl: './rimozione.component.html',
  styleUrls: ['./rimozione.component.css'],
  standalone:true,
  imports: [CommonModule]
})
export class RimozioneComponent implements OnInit {
  @Input() archivio2: Array<Libro>;
  @Input() libroTrovato: Libro;

  constructor(as: ArchivioService) {  }
  rimuoviLibro(){
    
  }
  ngOnInit() {
  }

}


/*
this.as.setData(archivio2).subscribe({
  next: (x: AjaxResponse<any>) =>{
    console.log(x.response);
  },
  error: (err) =>
    console.error('Observer got an error: ' + JSON.stringify(err)),
  });


const archivio_filtrato= archivio2.filter((el) => (el.titolo + el.autore).toLowerCase().includes(y));
console.log(archivio_filtrato, "3 type: ", typeof(archivio_filtrato));
*/