import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/classes/Post';
import { PostagemModel } from 'src/app/model/PostagemModel';
import { PostagemService } from 'src/app/service/postagem.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() content: PostagemModel;

  constructor() {}

  ngOnInit(): void {}
}
