import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.css'],
  standalone:true,
  
})
export class InserimentoComponent implements OnInit {
  @Output() newCityEvent = new EventEmitter<string>();
  window: string = "inserimento";
  constructor() { }

  ngOnInit() {
  }

}