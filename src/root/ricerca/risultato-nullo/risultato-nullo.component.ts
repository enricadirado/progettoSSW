import { CommonModule } from '@angular/common';
import { Component, OnInit , Input} from '@angular/core';
import { Libro } from '../../libro';
import { Archivio } from '../../archivio';

@Component({
  selector: 'app-risultato-nullo',
  templateUrl: './risultato-nullo.component.html',
  styleUrls: ['./risultato-nullo.component.css'],
  standalone:true,
  imports:[CommonModule]
})
export class RisultatoNulloComponent implements OnInit {
  @Input() numeroLibri: number;
  constructor() { }

  ngOnInit() {
  }

}