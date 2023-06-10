import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class InserimentoComponent implements OnInit {
  
  constructor() {}
  ngOnInit() {}
 
}

/*
view: string= 'home';
  seleziona(name: string) {
    this.selezione = name;
  }

  */
