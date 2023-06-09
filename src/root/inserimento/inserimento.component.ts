import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.css'],
  standalone:true,
  imports: [CommonModule]
})
export class InserimentoComponent implements OnInit {
  @Input() selezione: string|undefined;
  constructor() { }
  ngOnInit() {}
  clean() {
    this.selezione = undefined;
  }
}

