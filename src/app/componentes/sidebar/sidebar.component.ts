import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  SwalPortalTarget,
  SwalPortalTargets,
} from '@sweetalert2/ngx-sweetalert2';
import { PostagemModel } from 'src/app/model/PostagemModel';
import { TemaModel } from 'src/app/model/TemaModel';
import { PostagemService } from 'src/app/service/postagem.service';
import { ReloaderService } from 'src/app/service/reloader.service';
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
  totalPosts: number = environment.totalPosts;
  postagem = new PostagemModel();
  target: SwalPortalTarget;

  linkClicado = '';

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    public readonly swalTargets: SwalPortalTargets,
    private reloaderService: ReloaderService
  ) {}

  ngOnInit() {}
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
        },
        (error) => {
          Swal.showValidationMessage(
            `Postagem falhou! Motivo: ${error.status}`
          );
        }
      );
    },
  };

  changeFeed(modo: string) {
    this.reloaderService.changeFeed(modo);
  }

  mudar(rota: string) {
    this.router.navigate([rota]);
  }
}
