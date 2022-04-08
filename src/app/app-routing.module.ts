import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeDesktopComponent } from './pages/home-desktop/home-desktop.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [

  {path: '', redirectTo: 'home-desktop',pathMatch: 'full'},

  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'home-desktop', component: HomeDesktopComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
