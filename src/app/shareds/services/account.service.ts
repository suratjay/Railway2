import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ILogin } from '../../components/login/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private httpService: HttpService
  ) { }


  // store user login ไว้
  public UserLogin: IAccount = {} as any;
  public setUserLogin(userLogin: IAccount) {
    this.UserLogin.USER_SEQ = userLogin.USER_SEQ;
    this.UserLogin.USER_NAME = userLogin.USER_NAME;
    this.UserLogin.USER_PASSWORD = userLogin.USER_PASSWORD;
    this.UserLogin.USER_TITLE = userLogin.USER_TITLE;
    this.UserLogin.FIRST_NAME = userLogin.FIRST_NAME;
    this.UserLogin.LAST_NAME = userLogin.LAST_NAME;
    this.UserLogin.TEL = userLogin.TEL;
    this.UserLogin.LOGIN_STATUS = userLogin.LOGIN_STATUS;
    this.UserLogin.EMAIL = userLogin.EMAIL;
    this.UserLogin.URL_IMG = userLogin.URL_IMG;
    this.UserLogin.LAST_LOGIN = userLogin.LAST_LOGIN;
    // this.UserLogin.ROLE = userLogin.ROLE;
    return this.UserLogin;
  }

  onLogin(model: ILogin) {
    return this.httpService
      .requestPost('/api/login', model)
      .toPromise() as Promise<any>;
  }

  // ดึงข้อมูลผู้ที่เข้าสู่ระบบจาก Token
  getUserLogin() {
    return (this.httpService
      .requestGet('/api/profile')
      .toPromise() as Promise<IAccount>)
      .then(userLogin => this.setUserLogin(userLogin));
  }

  onLogout() {
    return (this.httpService
      .requestPost('/api/logout',null)
      .toPromise() as Promise<any>)
  }


}

export interface IAccount {
  USER_SEQ: string;
  USER_NAME: string;
  USER_PASSWORD: string;
  USER_TITLE: string;
  FIRST_NAME: string;
  LAST_NAME: string;
  TEL: string;
  LOGIN_STATUS: string;
  EMAIL: string;
  URL_IMG: string;
  LAST_LOGIN: string;
  // ROLE: IRoleAccount;
}

export enum IRoleAccount {
  Admin = 1,
  CHK
}
