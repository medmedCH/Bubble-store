import {KeycloakProfile} from 'keycloak-js';


export interface CustomerInfo extends KeycloakProfile {
  isLoggedIn?: boolean | false;
  isAdministrator?: boolean | false;
}
