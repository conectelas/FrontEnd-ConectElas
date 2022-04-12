import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { PostagemModel } from '../model/PostagemModel';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-feed-marketplace',
  templateUrl: './feed-marketplace.component.html',
  styleUrls: ['./feed-marketplace.component.css']
})
export class FeedMarketplaceComponent implements OnInit {

  posts: PostagemModel[];

  constructor(
    private router: Router,
    private postagemService: PostagemService
  ) { }

  ngOnInit(){
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
