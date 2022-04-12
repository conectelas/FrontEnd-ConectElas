import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { PostagemModel } from '../model/PostagemModel';
import { PostagemService } from './postagem.service';

@Injectable({
  providedIn: 'root',
})
export class AtualizarPostsService {
  postagens: PostagemModel[];
  // private currentPosts = new BehaviorSubject<PostagemModel[]>(this.postagens);
  constructor(private router: Router) {}

  atualizarPagina() {
    const url = new URL(window.location.href);
    let pathArray = url.hash.split('');
    pathArray.shift();
    let path = pathArray.join('');
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.router.navigate([path]);
  }
}
