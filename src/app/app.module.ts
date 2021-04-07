import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRouting } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedsModule } from './shareds/shareds.module';
import { MapToKeysPipe } from './pipes/map-to-keys.pipe';
// import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MapToKeysPipe,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
    FormsModule,
    SharedsModule,
    // CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
