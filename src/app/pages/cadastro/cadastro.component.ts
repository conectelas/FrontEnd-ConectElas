import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/model/UsuarioModel';

import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  usuarioModel: UsuarioModel = new UsuarioModel
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router,

  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  confirmaSenha(event: any){
    this.confirmaSenha = event.target.value
  }

  tipoUsuario1 (event: any){
    this.tipoUsuario = event.target.value
  }

  cadastrar(){
      this.usuarioModel.tipo = this.tipoUsuario

      if(this.usuarioModel.senha == this.confirmarSenha){
        alert('A senha estão incorretas.')
      }else{
        this.authService.cadastrar(this.usuarioModel).subscribe((resp: UsuarioModel)=> {
          this.usuarioModel = resp
          this.router.navigate(['/login'])
          alert("Usuário cadastrado com sucesso!")
        })
      }

  }

}
