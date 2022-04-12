import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/classes/Post';
import { PostagemModel } from 'src/app/model/PostagemModel';
import { UsuarioModel } from 'src/app/model/UsuarioModel';
import { AtualizarPostsService } from 'src/app/service/atualizar-posts.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() content: PostagemModel;
  @Input() loader: string;
  @Input() tipoDeFeed: string;
  mostrarBotoes: boolean = false;
  showPost: boolean = true;
  tipoUsuario = environment.tipo;

  constructor(
    private postagemService: PostagemService,
    private atualizarPostsService: AtualizarPostsService
  ) {}

  ngOnInit(): void {
    this.isValidPost();
    if (this.content.usuario.id === environment.id) {
      this.mostrarBotoes = true;
    }
  }

  isValidPost() {
    if (this.tipoDeFeed !== 'usuario') {
      if (
        this.tipoDeFeed !== 'home' &&
        this.content.tema.nome !== this.tipoDeFeed
      ) {
        this.showPost = false;
      }
    } else if (this.content.usuario.id !== environment.id) {
      this.showPost = false;
    }
  }

  editarPost() {
    Swal.fire({
      title: 'Editar postagem',
    });
  }

  enviarEdicao() {
    this.postagemService
      .putPostagem(this.content)
      .subscribe((resp: PostagemModel) => {
        this.content = resp;
      });
  }

  swalOptionsEdit: SweetAlertOptions = {
    title: 'Atualizar Postagem',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    cancelButtonColor: '#d9534f',
    confirmButtonText: 'Editar',
    imageUrl:
      'https://assets.website-files.com/5d5e2ff58f10c53dcffd8683/5d9d126de6b3b43d496aea9d_laying.svg',
    imageHeight: 200,
    imageWidth: 400,
    preConfirm: () => {
      Swal.showLoading();
      this.content.tema.id = Number(this.content.tema.id);
      this.content.usuario.id = environment.id;
      this.postagemService.putPostagem(this.content).subscribe(
        (resp: PostagemModel) => {
          this.content = resp;
          Swal.fire({
            title: 'Postagem atualizada!',
          });
        },
        (error) => {
          Swal.showValidationMessage(
            `Atualização falhou! Motivo: ${error.status}`
          );
        }
      );
    },
  };

  swalOptionsDelete: SweetAlertOptions = {
    title: 'Excluir Postagem',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    cancelButtonColor: '#5bc0de',
    confirmButtonColor: '#d9534f',
    confirmButtonText: 'Deletar',
    imageUrl:
      'https://assets.website-files.com/5d5e2ff58f10c53dcffd8683/5d9d126de6b3b43d496aea9d_laying.svg',
    imageHeight: 200,
    imageWidth: 400,
    preConfirm: () => {
      Swal.showLoading();
      this.postagemService.deletePostagem(this.content.id).subscribe(
        () => {
          Swal.fire({
            title: 'Postagem deletada!',
          });
          this.atualizarPostsService.atualizarPagina();
          environment.totalPosts -= 1;
        },
        (error) => {
          Swal.showValidationMessage(
            `Exclusão falhou! Motivo: ${error.status}`
          );
        }
      );
    },
  };
}
