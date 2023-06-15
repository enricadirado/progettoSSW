import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Libro } from '../../../libro';

@Component({
  selector: 'app-restituzione',
  templateUrl: './restituzione.component.html',
  styleUrls: ['./restituzione.component.css'],
  standalone:true,
  imports:[CommonModule]
})
export class RestituzioneComponent implements OnInit {
  
  constructor() {}
  

  ngOnInit() {}
}
