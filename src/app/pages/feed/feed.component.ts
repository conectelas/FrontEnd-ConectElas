import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { PostagemModel } from 'src/app/model/PostagemModel';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  posts: PostagemModel[];

  constructor(
    private router: Router,
    private postagemService: PostagemService
  ) {}

  ngOnInit() {
    if (environment.token == '') {
      alert('Sua sessão expirou!');
      this.router.navigate(['/login']);
    }
    console.log(environment.token);
    this.postagemService
      .getAllPostagens()
      .subscribe((resp: PostagemModel[]) => {
        this.posts = resp;
        console.log(this.posts);
      });
  }
}
