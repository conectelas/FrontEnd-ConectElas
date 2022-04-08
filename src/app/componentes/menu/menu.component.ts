<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
>>>>>>> dev

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
<<<<<<< HEAD
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

=======

export class MenuComponent implements OnInit {
  @Input() conteudo: string[]
  nome = environment.nome
  foto = environment.foto
  

  constructor(
    private router: Router
  ) { }

  ngOnInit(){
  }

  sair(){
    this.router.navigate(['/login'])
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
  }
>>>>>>> dev
}
