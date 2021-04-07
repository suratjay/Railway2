import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from 'src/app/authentication/authentication.url';
import { ILoginComponent } from './login.interface';
import { AccountService } from '../../shareds/services/account.service';
import { AlertService } from '../../shareds/services/alert.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements ILoginComponent {

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private account: AccountService,
    private activateRoute: ActivatedRoute,
    private alert: AlertService
  ) {
    // เก็บค่า returnURL เพื่อ redirect หลังจาก login
    this.activateRoute.params.forEach(params => {
      // this.returnURL = params.['returnURL'] ได้ทั้งสองแบบ
      this.returnURL = params.returnURL || `/${AppURL.Authen}`;
      // console.log(this.returnURL);
    })
    this.initialCreateFormData();
  }

  Url = AppURL;
  AuthURL = AuthURL;
  form: FormGroup;
  returnURL: string;

  private initialCreateFormData() {
    this.form = this.builder.group({
      userName: ['', Validators.required],
      userPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.invalid)
      return this.alert.someting_wrong();
    this.account
      .onLogin(this.form.value)
      .then(res => {
        // เก็บ session
        // this.authen.setAuthenticated(res.accessToken);
        this.alert.notify('เข้าสู่ระบบสำเร็จ', 'info');
        // this.router.navigate(['/', AppURL.Authen, AuthURL.Dashboard]);
        this.router.navigateByUrl(this.returnURL);
      })
      .catch(err => this.alert.notify(err.Message));
  }

}
