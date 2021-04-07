import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private httpService: HttpService
  ) { }

  getReportContract() {
    return (
      this.httpService
        .requestGet('/api/report-contract')
        .toPromise() as Promise<IReportContract[]>
    )
  }

  getReportNonCore() {
    return (
      this.httpService
        .requestGet('/api/report-non-core')
        .toPromise() as Promise<IReportNonCore[]>
    )
  }

  getReportStation() {
    return (
      this.httpService
        .requestGet('/api/report-station')
        .toPromise() as Promise<IReportStation[]>
    )
  }

  getReportChangwat(){
    return(
      this.httpService
      .requestGet('/api/report-changwat')
      .toPromise() as Promise<IReportChangwat[]>
    )
  }
}

export interface IReportContract {
  DIVISION: string;
  STATION_CODE: string;
  STATION_DESC: string;
  CONTRACT_CODE: string;
  CUS_NAME: string;
  SEQ_FECTOR: string;
  AREA: number;
  P_NO_INFRINGEMENT: number;
  AREA_INFRINGEMENT: number;
  OFFICIAL_PRICE: number;
  AREA_OFFICIAL_PRICE: number;
  LAND_USE_SPACE: string;
  CONSTRUCTION_COST: number;
  SUM_PRICE_OWNER: number;
  SUM_PRICE_NO_OWNER: number;
  SUM_PRICE: number;
}

export interface IReportNonCore {
  DIVISION_NAME: string;
  STATION_CODE: string;
  STATION_DESC: string;
  ENTITYID: string;
  LAND_USE: string;
  LAND_SHP: string;
  LAND_AREA: string;
  ROAD_NAME: string;
  TRAFFIC_TYPE: string;
  ENVIRONMENT: string;
  CITY_PLAN_T: string;
  CITY_PLAN_YEAR: string;
  CITY_PLAN_COLOR: string;
  CITY_PLAN_NUMBER: string;
  CITY_PLAN_TYPE: string;
  P_NO_INFRINGEMENT: string;
  SUM_PRICE: string;
  MARKET_PRICE: string;
  OFFICIAL_PRICE: string;
  SUM_MARKET_PRICE: string;
  SUM_OFFICIAL_PRICE: string;
}

export interface IReportStation {
  DIVISION_NAME: string;
  STATION_CODE: string;
  STATION_DESC: string;
  AREA: string;
  LAND_AREA: string;
  SELECT_FIN: string;
  // VAR_PER_WA: string;
  SUM_PRICE_OWNER: string;
  SUM_PRICE_NO_OWNER: string;
  SUMPRICE: string;
}

export interface IReportChangwat {
  DIVISION_NAME: string;
  STATION_CHANGWAT: string;
  STATION_CODE: string;
  STATION_DESC: string;
  AREA: string;
  LAND_AREA: string;
  ASSESS: string;
  SELECT_FIN: string;
  VAR_PER_WA: string;
  SUM_PRICE_OWNER: string;
  SUM_PRICE_NO_OWNER: string;
  SUMPRICE: string;
  SUM_PRICE: string;
  ASSESS_OUT: string;
}