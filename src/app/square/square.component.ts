import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NbLayoutModule, NbThemeModule } from '@nebular/theme';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [NgIf, RouterOutlet, NbLayoutModule,  NbThemeModule],
  templateUrl: './square.component.html',
  styleUrl: './square.component.css',

  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent {

  rando = Math.random();

  @Input()
  value: 'X' | 'O' = "X";

}
