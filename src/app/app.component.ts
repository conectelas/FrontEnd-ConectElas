<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
>>>>>>> dev

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
<<<<<<< HEAD
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConectElas';
=======
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  menuLogado: string[] = ['Inicio', 'Perfil', 'Feed', 'Quem somos', 'Sair'];

  menuNaoLogado: string[] = ['Inicio', 'Quem somos', 'Login', 'Cadastrar'];

  constructor(public auth: AuthService) {}

  resolution: number = window.innerWidth;

  title = 'ConectElas';

  ngOnInit() {
    // 320px - 900px -> menu mobile
    // 900px+ -> menu desktop
    window.addEventListener('resize', () => {
      this.resolution = window.innerWidth;
    });
  }
>>>>>>> dev
}
