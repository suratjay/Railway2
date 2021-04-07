import { Routes, RouterModule } from '@angular/router';
import { AuthURL } from './authentication.url';
import { ContractComponent } from './components/contract/contract.component';
import { DownloadComponent } from './components/download/download.component';
import { FactorContractComponent } from './components/factor-survey/factor-contract/factor-contract.component';
import { HomeComponent } from './components/home/home.component';
import { ReportChangwatComponent } from './components/report/report-changwat/report-changwat.component';
import { ReportContractComponent } from './components/report/report-contract/report-contract.component';
import { ReportNonCoreComponent } from './components/report/report-non-core/report-non-core.component';
import { ReportStationComponent } from './components/report/report-station/report-station.component';

const RouterLists: Routes = [
    { path: '', redirectTo: AuthURL.home, pathMatch: 'full' },
    { path: AuthURL.home, component: HomeComponent },
    { path: AuthURL.contract, component: ContractComponent },
    { path: AuthURL.factorContract, component: FactorContractComponent },
    { path: AuthURL.reportContract, component: ReportContractComponent },
    { path: AuthURL.reportNonCore, component: ReportNonCoreComponent },
    { path: AuthURL.reportStation, component: ReportStationComponent },
    { path: AuthURL.reportChangwat, component: ReportChangwatComponent },
    { path: AuthURL.download, component: DownloadComponent },
]
export const Authentication = RouterModule.forChild(RouterLists);