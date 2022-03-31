import { Component, OnInit } from '@angular/core';
import Card from 'src/app/classes/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cards: Card[] = [
    new Card(
      'lorem',
      'assets/icons/Group.svg',
      'muito lorem muito lorem muito lorem muito lorem muito lorem muito lorem'
    ),
    new Card(
      'lorem',
      'assets/icons/Group.svg',
      'muito lorem muito lorem muito lorem muito lorem muito lorem muito lorem'
    ),
    new Card(
      'lorem',
      'assets/icons/Group.svg',
      'muito lorem muito lorem muito lorem muito lorem muito lorem muito lorem'
    ),
    new Card(
      'lorem',
      'assets/icons/Group.svg',
      'muito lorem muito lorem muito lorem muito lorem muito lorem muito lorem'
    ),
  ];
  status: string = '';

  constructor() {}

  ngOnInit() {}

  toggle(): void {
    this.status = this.status === 'open' ? '' : 'open';
  }
}
