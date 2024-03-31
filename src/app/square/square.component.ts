import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [NgIf, RouterOutlet],
  templateUrl: './square.component.html',
  styleUrl: './square.component.css'
})
export class SquareComponent {

  rando = Math.random();

  @Input()
  value: 'X' | 'O' = "X";

}
