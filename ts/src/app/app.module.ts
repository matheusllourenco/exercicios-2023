import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { headerComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConteudoComponent } from './components/conteudo/conteudo.component';
import { discussaoComponent } from './components/conteudo/discussao/discussao.component';
import { resumoComponent} from './components/conteudo/resumo/resumo.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    headerComponent,
    FooterComponent,
    ConteudoComponent,
    discussaoComponent,
    resumoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
