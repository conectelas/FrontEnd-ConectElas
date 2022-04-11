import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FeedComponent } from './pages/feed/feed.component';
import { PostEditComponent } from './pages/edit/post-edit/post-edit.component';
import { TemaEditComponent } from './pages/edit/tema-edit/tema-edit.component';
import { TemaComponent } from './pages/tema/tema.component';
import { HomeDesktopComponent } from './pages/home-desktop/home-desktop.component';
import { MinhasPostagensComponent } from './pages/minhas-postagens/minhas-postagens.component';
import { EmpregabilidadeComponent } from './pages/empregabilidade/empregabilidade.component';
import { FeedUsuarioComponent } from './pages/feed-usuario/feed-usuario.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { UserEditComponent } from './pages/edit/user-edit/user-edit.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home-desktop', pathMatch: 'full' },

  { path: 'home', component: HomeDesktopComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home-desktop', component: HomeDesktopComponent },
  { path: 'minhas-postagens', component: MinhasPostagensComponent },

  { path: 'feed', component: FeedComponent },
  { path: 'feed/usuario', component: FeedUsuarioComponent },
  { path: 'empregabilidade', component: EmpregabilidadeComponent },
  { path: 'marketplace', component: MarketplaceComponent },
  { path: 'tema', component: TemaComponent },
  { path: 'tema-edit/:id', component: TemaEditComponent },
  { path: 'postagem-edit/:id', component: PostEditComponent },
  { path: 'tema-edit/:id', component: TemaEditComponent },
  { path: 'postagem-edit/:id', component: PostEditComponent },
  { path: 'user-edit/:id', component: UserEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],

  exports: [RouterModule],
})
export class AppRoutingModule {}
