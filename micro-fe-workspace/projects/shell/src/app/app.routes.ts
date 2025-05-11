import { Routes } from '@angular/router';
import { DefaultComponent } from './shared/components/default/default.component';
import { InfoComponent } from './shared/components/info/info.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
    {
        path: '',
        component: DefaultComponent,
        pathMatch: 'full'
    },
    {
        path: 'mf-a',
        loadComponent: () =>
            loadRemoteModule({
                type: 'module',
                remoteEntry: 'http://localhost:4201/remoteEntry.js',
                exposedModule: './Component',
            }).then(m => m.AppComponent),
    },
    {
        path: 'mf-b',
        loadComponent: () =>
            loadRemoteModule({
                type: 'module',
                remoteEntry: 'http://localhost:4202/remoteEntry.js',
                exposedModule: './Component',
            }).then(m => m.AppComponent),
    },
    {
        path: 'info',
        component: InfoComponent
    },
    {
        path: 'default',
        component: DefaultComponent
    },
    {
        path: '**',
        component: NotFoundComponent,
    },

];
