import { Component, Input, OnInit } from '@angular/core';
import Card from 'src/app/classes/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() content?: any;

  constructor() {}

  ngOnInit(): void {}
}
