import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogin } from 'src/app/model/UsuarioLogin';
import { UsuarioModel } from 'src/app/model/UsuarioModel';
import { AlertaService } from 'src/app/service/alerta.service';

import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  usuarioModel: UsuarioModel = new UsuarioModel();
  usuarioLogin: UsuarioLogin = new UsuarioLogin();
  confirmarSenha: string;
  tipoUsuario: string;
  nomeUsuario: string = environment.nome;
  fotoUsuario: string = environment.foto;
  constructor(
    private authService: AuthService,
    private router: Router,
    private alerta: AlertaService
  ) {}
  ngOnInit() {
    window.scroll(0, 0);
    if (environment.token === '') {
      alert('Sua sessão expirou!');
      this.router.navigate(['login']);
    }
    this.usuarioModel.nome = environment.nome;
    this.usuarioModel.foto = environment.foto;
  }

  confirmaSenha(event: any) {
    this.confirmarSenha = event.target.value;
  }

  atualizar() {
    this.usuarioModel.tipo = this.tipoUsuario;
    if (this.usuarioModel.senha != this.confirmarSenha) {
      /* alerta ao usuario  */
      Swal.fire({
        title: 'Senhas não coincidem!',
        showConfirmButton: false,
        timer: 3000,
        icon: 'info',
        width: 600,
        padding: '3em',
        color: '#f34534',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://c.tenor.com/dNtJSujn-lYAAAAj/run-pikachu.gif")
          left top
          no-repeat
        `,
      });
    } else {
      // subscribe vai sobrecrever a senha em formato json para o backend receber
      this.usuarioModel.id = environment.id;
      this.authService
        .atualizar(this.usuarioModel)
        .subscribe((resp: UsuarioModel) => {
          this.usuarioModel = resp;

          Swal.fire({
            title: 'Usuário cadastrado com sucesso!',
            showConfirmButton: false,
            timer: 3000,
            icon: 'success',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            backdrop: `
            rgba(0,0,123,0.4)
            url("https://c.tenor.com/dNtJSujn-lYAAAAj/run-pikachu.gif")
            left top
            no-repeat
          `,
          });
          environment.nome = resp.nome;
          environment.foto = resp.foto;
          this.router.navigate(['/feed']);
        });
    }
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value;
  }
}
