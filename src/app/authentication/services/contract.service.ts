import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
declare let $;
@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(
    private httpService: HttpService
  ) { }

  getContract(option?) {
    return (
      this.httpService
      .requestGet(`/api/contract?${$.param(option)}`)
        .toPromise() as Promise<any>
    )
  }
  
  getContractById(id) {
    return (
      this.httpService
        .requestGet(`/api/contract?id=${id}`)
        .toPromise() as Promise<IContract>
    )
  }

 
}

export interface IContract {
  COUNTERPARTY_SEQ: string;
  STATION_CODE: string;
  STATION_DESC: string;
  STATION_CHANGWAT: string;
  CONTRACT_CODE: string;
  CUS_NAME: string;
}
