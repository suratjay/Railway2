import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from 'src/app/authentication/authentication.url';
import { AccountService, IAccount, IRoleAccount } from '../../services/account.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-auth-navbar',
  templateUrl: './auth-navbar.component.html',
  styleUrls: ['./auth-navbar.component.css']
})
export class AuthNavbarComponent implements OnInit {

  AppURL = AppURL;
  AuthURL = AuthURL;
  UserLogin: IAccount;
  Role = IRoleAccount;

  constructor(
    private router: Router,
    private account: AccountService,
    private alert: AlertService
  ) {
    this.initialLaodUserLogin();
  }

  ngOnInit(): void {
  }

  // ออกจากระบบ
  onLogout() {
    this.account
      .onLogout()
      .then(result => {
        this.alert.notify('ออกจากระบบสำเร็จ', 'info');
        this.router.navigate(['/', AppURL.Login]);
      })
  }

  // โหลดข้อมูล User ที่เข้าสู่ระบบ 
  private initialLaodUserLogin() {
    this.UserLogin = this.account.UserLogin;
    // if (this.UserLogin.USER_SEQ) return setTimeout(() => App.initialLoadPage(), 100)  // ฟังก์ชั่น คลิก เปิด ปิด เมนู

    this.account
      .getUserLogin()
      .then(userLogin => {
        this.UserLogin = userLogin;
        // console.log(userLogin);
      })
      .catch(err => {
        this.router.navigate(['/', AppURL.Login]);
      })
  }
}
