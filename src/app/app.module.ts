<<<<<<< HEAD
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> dev
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { FeedComponent } from './pages/feed/feed.component';
import { LoginComponent } from './pages/login/login.component';
<<<<<<< HEAD
import { SobreComponent } from './pages/sobre/sobre.component';
import { HomeDesktopComponent } from './pages/home-desktop/home-desktop.component';
import { MenuHomeComponent } from './componentes/menu-home/menu-home.component';
import { MenuFeedComponent } from './componentes/menu-feed/menu-feed.component';
=======
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
>>>>>>> dev

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
<<<<<<< HEAD
    SobreComponent,
    HomeDesktopComponent,
    MenuHomeComponent,
    MenuFeedComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
=======
    CarouselComponent,
    CardComponent,
    MenuNaoLogadoComponent,
    TemaComponent,
    TemaEditComponent,
    PostEditComponent,
    TemaDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule


  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  }],
  bootstrap: [AppComponent],
})

export class AppModule {}
>>>>>>> dev
