import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-risultato-reset',
  templateUrl: './risultato-reset.component.html',
  styleUrls: ['./risultato-reset.component.css'],
  standalone:true,
  imports: [CommonModule]
})
export class RisultatoResetComponent implements OnInit {
  @Input() numeroLibri: number;
  /*@Output() removeDocEvent = new EventEmitter<string>();*/
  constructor() { }
  /*x:string='hide';
  removeDoc(x: string) {
    console.log('reset', x);
  }*/
  ngOnInit() {
  }

}