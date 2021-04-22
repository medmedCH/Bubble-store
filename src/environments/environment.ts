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
  enableBearerInterceptor: true
};

export const environment = {
  production: false,
  keycloakOptions
};
