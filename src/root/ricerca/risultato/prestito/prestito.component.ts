import { Component, OnInit } from '@angular/core';
import { ArchivioService } from '../../../archivio.service';

@Component({
  selector: 'app-prestito',
  templateUrl: './prestito.component.html',
  styleUrls: ['./prestito.component.css'],
  standalone:true
})
export class PrestitoComponent implements OnInit {

  constructor(as: ArchivioService) { }

  ngOnInit() {
  }

}