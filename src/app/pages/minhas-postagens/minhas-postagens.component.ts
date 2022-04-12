import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostagemModel } from 'src/app/model/PostagemModel';
import { UsuarioModel } from 'src/app/model/UsuarioModel';
import { AuthService } from 'src/app/service/auth.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-minhas-postagens',
  templateUrl: './minhas-postagens.component.html',
  styleUrls: ['./minhas-postagens.component.css'],
})
export class MinhasPostagensComponent implements OnInit {
  posts: PostagemModel[];
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService
      .getByIdUsuario(environment.id)
      .subscribe((resp: UsuarioModel) => {
        this.posts = resp.postagem;
      });
  }
}
