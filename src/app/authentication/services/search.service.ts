import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private httpService: HttpService
  ) { }

  getDivision() {
    return (
      this.httpService
        .requestGet('/api/division')
        .toPromise() as Promise<IDivision>
    )
  }


  getProvince(id) {
    return (
      this.httpService
        .requestGet(`/api/province?id=${id}`)
        .toPromise() as Promise<IProvince>
    )
  }

  getStation(id) {
    return (
      this.httpService
        .requestGet(`/api/station?id=${id}`)
        .toPromise() as Promise<IStation>
    )
  }

}


export interface IDivision {
  DIVISION_TABLE_SEQ: string;
  DIVISION_NAME: string;
}

export interface IProvince {
  CHANGWAT_TABLE_SEQ: string;
  STATION_CHANGWAT: string;
}

export interface IStation {
  STATION_CODE: string;
  STATION_DESC: string;
}