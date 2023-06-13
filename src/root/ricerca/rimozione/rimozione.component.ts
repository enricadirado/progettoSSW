import { CommonModule } from '@angular/common';
import { Component, OnInit, Input} from '@angular/core';
import { Libro } from '../../libro';
import { ArchivioService } from '../../archivio.service';

@Component({
  selector: 'app-rimozione',
  templateUrl: './rimozione.component.html',
  styleUrls: ['./rimozione.component.css'],
  standalone:true,
  imports: [CommonModule]
})
export class RimozioneComponent implements OnInit {
  @Input() archivio2: object;

  constructor(as: ArchivioService) { }
  rimuoviLibro(){
    console.log('rimozione:', this.archivio2);
  }
  ngOnInit() {
  }

}