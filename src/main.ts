import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { RootComponent } from './root/root.component';

//lancia applicazione che fa riferimento a tale classe
bootstrapApplication(RootComponent);
