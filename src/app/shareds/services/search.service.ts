import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpService: HttpService) { }

  onSearchByProvince(pro) {
    return (
      this.httpService
        .requestGet(`/api/search-by-province?province=${pro}`)
        .toPromise() as Promise<any>
    )
  }

  onProvinceItem() {
    return (
      this.httpService
        .requestGet('/api/province-list')
        .toPromise() as Promise<any>
    )
  }

}

export interface IProvince {
  STATION_DESC: string;
  STATION_CODE: string;
}