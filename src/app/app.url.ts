import { environment } from '../environments/environment';

export const AppURL = {
    Login: 'login',
    Register: 'Register',
    Authen: 'authentication',
}

export const backendURL: string = environment.production ?
    'http://122.155.174.9:80/backend' : 
    '/backend';