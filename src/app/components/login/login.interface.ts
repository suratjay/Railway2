import { FormGroup } from '@angular/forms';

export interface ILoginComponent {
    Url: any;
    AuthURL: any;
    form: FormGroup;
    returnURL: string;
    onSubmit();
}

export interface ILogin {
    userName: string;
    userPassword: string;
}