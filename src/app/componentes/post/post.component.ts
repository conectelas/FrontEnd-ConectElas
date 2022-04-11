import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/classes/Post';
import { PostagemModel } from 'src/app/model/PostagemModel';
import { UsuarioModel } from 'src/app/model/UsuarioModel';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() content: PostagemModel;
  @Input() loader: string;
  @Input() tipoDeFeed: string;
  showPost: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.isValidPost();
  }

  isValidPost() {
    console.log(this.tipoDeFeed, this.content.tema.nome);
    if (this.tipoDeFeed !== 'usuario') {
      if (
        this.tipoDeFeed !== 'all' &&
        this.content.tema.nome !== this.tipoDeFeed
      ) {
        this.showPost = false;
      }
    } else if (this.content.usuario.id !== environment.id) {
      this.showPost = false;
    }
  }
}
