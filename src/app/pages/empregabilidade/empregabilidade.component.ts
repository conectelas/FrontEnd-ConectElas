import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { FeedComponent } from '../feed/feed.component';

@Component({
  selector: 'app-empregabilidade',
  templateUrl: './empregabilidade.component.html',
  styleUrls: ['./empregabilidade.component.css'],
})
export class EmpregabilidadeComponent implements OnInit {
  ngOnInit(): void {}

  carregar() {
    return 'Empregabilidade';
  }
}
