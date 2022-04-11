import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { PostagemModel } from 'src/app/model/PostagemModel';
import { UsuarioModel } from 'src/app/model/UsuarioModel';
import { AuthService } from 'src/app/service/auth.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { ReloaderService } from 'src/app/service/reloader.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  posts: PostagemModel[];
  currentFeed: string;
  @Input() tipoDeFeed: any = 'all';

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    if (environment.token == '') {
      alert('Sua sessão expirou!');
      this.router.navigate(['/login']);
    }
    this.postagemService
      .getAllPostagens()
      .subscribe((resp: PostagemModel[]) => {
        this.posts = resp;
        console.log(this.posts);
      });

    // this.reloaderService.currentFeedMessage.subscribe((message) => {
    //   this.currentFeed = message;
    //   this.authService
    //     .getByIdUsuario(environment.id)
    //     .subscribe((resp: UsuarioModel) => {
    //       this.posts = resp.postagem;
    //       console.log(this.posts);
    //     });
    // });
    // if (this.tipoDeFeed === 'usuario') {
    //   this.authService
    //     .getByIdUsuario(environment.id)
    //     .subscribe((resp: UsuarioModel) => {
    //       this.posts = resp.postagem;
    //       console.log(this.posts);
    //     });
    // }
  }
}
