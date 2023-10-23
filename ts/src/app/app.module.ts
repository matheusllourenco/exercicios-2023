import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { headerComponent } from './components/header/header.component';
import { ConteudoComponent } from './components/conteudo/conteudo.component';
import { discussaoComponent } from './components/conteudo/discussao/discussao.component';
import { resumoComponent} from './components/conteudo/resumo/resumo.component';
import { CardComponent } from './components/conteudo/discussao/card/card.component';
import { FooterComponent } from './components/conteudo/footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    headerComponent,
    FooterComponent,
    ConteudoComponent,
    discussaoComponent,
    resumoComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
