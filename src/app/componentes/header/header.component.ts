import { Component, OnInit } from '@angular/core';
import { PostagemModel } from 'src/app/model/PostagemModel';
import { PostagemService } from 'src/app/service/postagem.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  termo: string = '';

  constructor(private postagemService: PostagemService) {}

  ngOnInit(): void {}

  // procurar() {
  //   if (this.termo === '') {
  //   } else {
  //     this.postagemService
  //       .getByTituloPostagem(this.termo)
  //       .subscribe((resp: PostagemModel[]) => {

  //       });
  //   }
  // }
}
