import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagintionPipe } from '../pipes/pagintion.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthNavbarComponent } from './components/auth-navbar/auth-navbar.component';
import { AuthContentComponent } from './components/auth-content/auth-content.component';
import { RouterModule } from '@angular/router';
import { ExcelService } from './services/excel.service';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { MapToKeysPipe } from '../pipes/map-to-keys.pipe';

@NgModule({
  declarations: [
    PagintionPipe
    , AuthNavbarComponent
    , AuthContentComponent
    // , MapToKeysPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PaginationModule.forRoot()
  ],
  exports: [
    PagintionPipe,
    FormsModule,
    ReactiveFormsModule,
    AuthNavbarComponent,
    AuthContentComponent,
    PaginationModule
  ],
  providers: [ExcelService],
})
export class SharedsModule { }
