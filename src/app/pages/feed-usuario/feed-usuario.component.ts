import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-usuario',
  templateUrl: './feed-usuario.component.html',
  styleUrls: ['./feed-usuario.component.css'],
})
export class FeedUsuarioComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  carregar() {
    return 'usuario';
  }
}
