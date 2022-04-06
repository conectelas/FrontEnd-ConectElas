import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [

  //{path: '', redirectTo: 'login',pathMatch: 'full'},

  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},

  {path: 'sobre', component: SobreComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
