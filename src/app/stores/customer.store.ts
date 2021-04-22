import {Injectable} from '@angular/core';
import {Store} from './store';
import {CustomerInfo} from '../models/user.info';
import {KeycloakService} from 'keycloak-angular';
import {from} from 'rxjs';
import {map, tap} from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class CustomerStore extends Store<CustomerInfo> {
  constructor(
    private keycloakService: KeycloakService) {
    super();
  }

  init = (): void => {
    if (this.getAll()) {
      return;
    }

    if (this.keycloakService.isLoggedIn()) {
      from(this.keycloakService.loadUserProfile()).pipe(
        tap(this.store),
        map(() => {
          this.getAll().isLoggedIn = true;
          this.getAll().isAdministrator = this.keycloakService.isUserInRole("admin");
        }),
      ).subscribe();
    }
  }

  logout = async (): Promise<void> => {
    await this.keycloakService.logout();
    this.store(undefined);
  }

 /* login(): void {
    this.keycloakService.login();
    this.init();
  }*/
}
