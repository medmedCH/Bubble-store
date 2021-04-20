import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { ROUTING} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SidemenuComponent } from './components/layout/sidemenu/sidemenu.component';
import { RoomsComponent } from './components/site/rooms/rooms.component';
import { ChatComponent } from './components/site/chat/chat.component';
import {StoreModule} from './components/store/store.module';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidemenuComponent,
    RoomsComponent,
    ChatComponent,
  ],
  imports: [
    ROUTING,
    RouterModule,
    BrowserModule,
    StoreModule,
    HttpClientModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
