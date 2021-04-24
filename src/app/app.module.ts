import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
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
import { StoreBackComponent } from './components/store-back/store-back.component';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {environment} from '../environments/environment';

export function kcInitializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await keycloak.init(environment.keycloakOptions);
        console.log('Keycloak is initialized');
        resolve(null);
      }
      catch (error) {
        console.log('Error thrown in init ' + error);
        reject(error);
      }
    });
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidemenuComponent,
    RoomsComponent,
    ChatComponent,
    StoreBackComponent,
  ],
  imports: [
    KeycloakAngularModule,
    ROUTING,
    RouterModule,
    BrowserModule,
    StoreModule,
    HttpClientModule,
    CommonModule

  ],
  providers: [

    { provide: APP_INITIALIZER, useFactory: kcInitializer, multi: true, deps: [KeycloakService] }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
