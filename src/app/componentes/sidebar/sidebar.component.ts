import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  SwalPortalTarget,
  SwalPortalTargets,
} from '@sweetalert2/ngx-sweetalert2';
import { PostagemModel } from 'src/app/model/PostagemModel';
import { TemaModel } from 'src/app/model/TemaModel';
import { AtualizarPostsService } from 'src/app/service/atualizar-posts.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import swal, { SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @ViewChild('links') links: any;
  nome: string = environment.nome;
  foto: string = environment.foto;
  id: number = environment.id;
  totalPosts: number = environment.totalPosts;
  postagem = new PostagemModel();
  target: SwalPortalTarget;

  linkClicado = '';

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private atualizarPostsService: AtualizarPostsService,
    public readonly swalTargets: SwalPortalTargets,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // if (this.activatedRoute.snapshot.queryParams['update']) {
    // }
  }
  ngAfterViewInit() {
    // const li = this.links.nativeElement.children;
    // [...li].forEach((link) => {
    //   link.children[1].addEventListener('click', (e: any) => {
    //     this.linkClicado = e.textContent;
    //   });
    // });
  }

  swalOptions: SweetAlertOptions = {
    title: 'Nova Postagem',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    cancelButtonColor: '#d9534f',
    confirmButtonText: 'Postar',
    imageUrl:
      'https://assets.website-files.com/5d5e2ff58f10c53dcffd8683/5d9d126de6b3b43d496aea9d_laying.svg',
    imageHeight: 200,
    imageWidth: 400,
    preConfirm: () => {
      Swal.showLoading();
      this.postagem.tema.id = Number(this.postagem.tema.id);
      this.postagem.usuario.id = environment.id;
      console.log(this.postagem);
      this.postagemService.postPostagem(this.postagem).subscribe(
        (resp: PostagemModel) => {
          Swal.fire({
            title: 'Postagem feita!',
          });
          this.atualizarPostsService.atualizarPagina();
          environment.totalPosts += 1;
        },
        (error) => {
          Swal.showValidationMessage(
            `Postagem falhou! Motivo: ${error.status}`
          );
        }
      );
    },
  };

  mudar(rota: string) {
    this.router.navigate([rota]);
  }

  sair() {
    this.router.navigate(['/home-desktop']);
    environment.token = '';
  }
}
