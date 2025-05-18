import { Routes } from '@angular/router';
import { InfoComponent } from './shared/components/info/info.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { DefaultComponent } from './shared/components/default/default.component';
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
                type: 'manifest',
                remoteName: 'mf-a',
                exposedModule: './Component',
            }).then(m => m.AppComponent),
    },
    {
        path: 'mf-b',
        loadComponent: () =>
            loadRemoteModule({
                type: 'manifest',
                remoteName: 'mf-b',
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
