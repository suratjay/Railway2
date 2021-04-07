import { RouterModule, Routes } from '@angular/router';
import { AppURL } from './app.url';
import { LoginComponent } from './components/login/login.component';

const RouterLists: Routes = [
    { path: '', redirectTo: AppURL.Login, pathMatch: 'full' },
    { path: AppURL.Login, component: LoginComponent },
    // { path: AppURL.Register, component: RegisterComponent },
    {
        path: AppURL.Authen,
        loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
        // canActivate: [AuthenticationGuard]
    }

];

export const AppRouting = RouterModule.forRoot(RouterLists);