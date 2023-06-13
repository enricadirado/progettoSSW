import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Libro } from '../../libro';
import { ArchivioService } from '../../archivio.service';
import { Archivio } from '../../archivio';

@Component({
  selector: 'app-rimozione',
  templateUrl: './rimozione.component.html',
  styleUrls: ['./rimozione.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class RimozioneComponent implements OnInit {
  

  constructor(as: ArchivioService) {}
  
  ngOnInit() {}
}
