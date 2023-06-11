import { Component, OnInit } from '@angular/core';
import { ArchivioService } from '../../archivio.service';

@Component({
  selector: 'app-rimozione',
  templateUrl: './rimozione.component.html',
  styleUrls: ['./rimozione.component.css'],
  standalone:true
})
export class RimozioneComponent implements OnInit {

  constructor(as: ArchivioService) { }

  ngOnInit() {
  }

}