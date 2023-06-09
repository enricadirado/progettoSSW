import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.css'],
  standalone:true,
  imports: [CommonModule]
})
export class InserimentoComponent implements OnInit {
  @Output() windowEvent = new EventEmitter<string>();
  window_str: string = "inserimento";
  constructor() { }
  ngOnInit() {}
  window(){
    this.windowEvent.emit(this.window_str);
  }
}
