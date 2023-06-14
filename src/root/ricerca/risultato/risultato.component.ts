import { CommonModule } from '@angular/common';
import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-risultato',
  templateUrl: './risultato.component.html',
  styleUrls: ['./risultato.component.css'],
  standalone:true,
  imports: [CommonModule]
})
export class RisultatoComponent implements OnInit {
  @Input() mostra: string;
  constructor() { }

  ngOnInit() {
  }

}