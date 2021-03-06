import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuHomeComponent } from './componentes/menu-home/menu-home.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { FeedComponent } from './pages/feed/feed.component';
import { LoginComponent } from './pages/login/login.component';

import { routes } from './app-routing.module';
import { RouterModule, RoutesRecognized } from '@angular/router';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { CardComponent } from './componentes/card/card.component';
import { MenuNaoLogadoComponent } from './componentes/menu-nao-logado/menu-nao-logado.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { OrderModule } from 'ngx-order-pipe';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TemaComponent } from './pages/tema/tema.component';
import { TemaEditComponent } from './pages/edit/tema-edit/tema-edit.component';
import { PostEditComponent } from './pages/edit/post-edit/post-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { HomeDesktopComponent } from './pages/home-desktop/home-desktop.component';
import { MenuFeedComponent } from './componentes/menu-feed/menu-feed.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { PostComponent } from './componentes/post/post.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { EmpregabilidadeComponent } from './pages/empregabilidade/empregabilidade.component';
import { HeaderComponent } from './componentes/header/header.component';
import { MinhasPostagensComponent } from './pages/minhas-postagens/minhas-postagens.component';
import { FeedHomeComponent } from './componentes/feed-home/feed-home.component';
import { FeedUsuarioComponent } from './pages/feed-usuario/feed-usuario.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { UserEditComponent } from './pages/edit/user-edit/user-edit.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { FaqComponent } from './pages/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    PerfilComponent,
    FeedComponent,
    MenuHomeComponent,
    CarouselComponent,
    CardComponent,
    MenuNaoLogadoComponent,
    TemaComponent,
    TemaEditComponent,
    PostEditComponent,
    TemaDeleteComponent,
    HomeDesktopComponent,
    MenuFeedComponent,
    SidebarComponent,
    PostComponent,
    CapitalizePipe,
    EmpregabilidadeComponent,
    HeaderComponent,
    MinhasPostagensComponent,
    FeedHomeComponent,
    FeedUsuarioComponent,
    MarketplaceComponent,
    UserEditComponent,
    SobreComponent,
    FaqComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
