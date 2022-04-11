import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UsuarioLogin } from 'src/app/model/UsuarioLogin';
import { UsuarioModel } from 'src/app/model/UsuarioModel';
import { AlertaService } from 'src/app/service/alerta.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuarioLogin: UsuarioLogin = new UsuarioLogin();

  constructor(
    private authService: AuthService,
    private router: Router,
    private alerta: AlertaService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  entrar() {
    console.log('tentou entrar');
    console.log(this.usuarioLogin);
    this.authService.entrar(this.usuarioLogin).subscribe(
      (resp: UsuarioLogin) => {
        this.usuarioLogin = resp;
        environment.token = this.usuarioLogin.token;
        environment.nome = this.usuarioLogin.nome;
        environment.foto = this.usuarioLogin.foto;
        environment.id = this.usuarioLogin.id;
        environment.tipo = this.usuarioLogin.tipo;
        this.authService
          .getByIdUsuario(environment.id)
          .subscribe((resp: UsuarioModel) => {
            environment.totalPosts = resp.postagem.length;
            this.router.navigate(['/feed']);
          });
      },
      (error) => {
        if (error.status == 404 || error == 500) {
          Swal.fire({
            title: 'Usuário ou senha estão incorretos!',
            showConfirmButton: false,
            timer: 3000,
            icon: 'error',
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
        }
      }
    );
  }
}
