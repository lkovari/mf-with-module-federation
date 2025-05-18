import { initFederation } from '@angular-architects/module-federation';
import { environment } from './environments/environment';

const isDev = location.hostname === 'localhost'

const manifestUrl = isDev
  ? '/mf.manifest.dev.json'
  : '/mf-with-module-federation/mf.manifest.prod.json';

initFederation(manifestUrl)
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
