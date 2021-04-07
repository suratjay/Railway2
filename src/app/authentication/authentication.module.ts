import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportContractComponent } from './components/report/report-contract/report-contract.component';
import { ReportStationComponent } from './components/report/report-station/report-station.component';
import { ReportNonCoreComponent } from './components/report/report-non-core/report-non-core.component';
import { Authentication } from './authentication.routing'
import { SharedsModule } from '../shareds/shareds.module';
import { HomeComponent } from './components/home/home.component';
import { DownloadComponent } from './components/download/download.component';
import { ContractComponent } from './components/contract/contract.component';
import { FactorContractComponent } from './components/factor-survey/factor-contract/factor-contract.component';
import { ReportChangwatComponent } from './components/report/report-changwat/report-changwat.component';
// import {MapToKeysPipe} from "./map-to-keys.pipe";
@NgModule({
  declarations: [
    ReportContractComponent,
    ReportStationComponent,
    ReportNonCoreComponent,
    HomeComponent,
    DownloadComponent,
    ContractComponent,
    FactorContractComponent,
    ReportChangwatComponent
    ],
  imports: [
    CommonModule,
    Authentication,
    SharedsModule
  ]
})
export class AuthenticationModule { }
