import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FeedComponent } from './pages/feed/feed.component';
import { PostEditComponent } from './pages/edit/post-edit/post-edit.component';
import { TemaEditComponent } from './pages/edit/tema-edit/tema-edit.component';
import { TemaComponent } from './pages/tema/tema.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },

  { path: 'feed', component: FeedComponent},
  { path: 'tema', component: TemaComponent},

  { path: 'tema-edit/:id', component: TemaEditComponent},
  { path: 'postagem-edit/:id', component: PostEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
