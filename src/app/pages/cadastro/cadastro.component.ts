import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UsuarioLogin } from 'src/app/model/UsuarioLogin';
import { UsuarioModel } from 'src/app/model/UsuarioModel';
import { AlertaService } from 'src/app/service/alerta.service';

import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  usuarioModel: UsuarioModel = new UsuarioModel();
  usuarioLogin: UsuarioLogin = new UsuarioLogin();
  confirmarSenha: string;
  tipoUsuario: string;
  tokenAdm: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alerta: AlertaService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  confirmaSenha(event: any) {
    this.confirmarSenha = event.target.value;
  }

  cadastrar() {
    this.usuarioModel.tipo = this.tipoUsuario;
    if (this.usuarioModel.senha != this.confirmarSenha) {
      /* alerta ao usuario  */
      Swal.fire({
        title: 'Senhas não coincidem!',
        showConfirmButton: false,
        timer: 5000,
        icon: 'info',
        imageUrl :"https://i.pinimg.com/originals/c7/a1/d7/c7a1d7dbd17a7eac5f744a80a4359ece.gif",
        color: '#f34534',
        
      });
    } else if (
      this.tipoUsuario === 'ADM' &&
      this.tokenAdm !== environment.tokenADM
    ) {
      Swal.fire({
        title: 'Token invalido',
        timer: 5000,
        imageUrl: "https://i.pinimg.com/originals/31/65/06/31650631b14710d75ab00a32fc5dca15.gif",
        color: '#f34534',
      
      });
    } else {
      // subscribe vai sobrecrever a senha em formato json para o backend receber
      this.authService
        .cadastrar(this.usuarioModel)
        .subscribe((resp: UsuarioModel) => {
          this.usuarioModel = resp;
          this.router.navigate(['/login']);

          Swal.fire({
            title: 'Usuário cadastrado com sucesso!',
            showConfirmButton: false,
            timer: 3000,
            icon: 'success',
            imageUrl: "https://c.tenor.com/Tx1SfMNQtdAAAAAC/cute-kitten.gif",
            color: '#716add',
          });/*https://i.pinimg.com/originals/31/65/06/31650631b14710d75ab00a32fc5dca15.gif*/
        });
    }
  }
  tipoUser(event: any) {
    this.tipoUsuario = event.target.value;
  }
}
