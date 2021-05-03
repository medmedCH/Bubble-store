// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import {  KeycloakOptions } from 'keycloak-angular';
import {KeycloakConfig, KeycloakInitOptions} from 'keycloak-js';

// Add here your keycloak configuration information
const keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:9080/auth',
  realm: 'bubble',
  clientId: 'shop'
};

const keycloakInitOptions: KeycloakInitOptions = {
  onLoad: 'login-required',
  checkLoginIframe: false
};

const keycloakOptions: KeycloakOptions = {
  config: keycloakConfig,
  initOptions: keycloakInitOptions,
  enableBearerInterceptor: true,
  loadUserProfileAtStartUp: true,

};
const firebaseConfig = {
  apiKey: 'AIzaSyC72wctPh0h604j4uQ_6PFGcVIgcwvq7bA',
  authDomain: 'bubble-b3d30.firebaseapp.com',
  projectId: 'bubble-b3d30',
  storageBucket: 'bubble-b3d30.appspot.com',
  messagingSenderId: '540436869163',
  appId: '1:540436869163:web:3a06a18a5a8c6f4ecc7a6e',
}
export const environment = {
  production: false,
  keycloakOptions,
  firebaseConfig
};
