import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class FactorContractService {

  constructor(private httpService: HttpService) { }

  // getFactorcontract() {
  //   return (this.httpService
  //     .requestGet('/api/factor-contract')
  //     .toPromise() as Promise<IFactorContract>
  //   )
  // }

  getFactorContract(id){
    return(
      this.httpService
      .requestGet(`/api/factor-contract?id=${id}`)
      .toPromise() as Promise<IFactorContract>
    )
  }

  onUpdateFactorContract(model) {
    return (
      this.httpService
        .requestPut('/api/factor-contract-update', model)
        .toPromise() as Promise<IFactorContract>
    )
  }
}

export interface IFactorContract {
  SURVEY_DATA_BUILDING_SEQ: string;
  SEQ_FECTOR: string;
  AREA: string;
  ADDRESS: string;
  SOI: string;
  ROAD: string;
  STRUCTURE_BUIDING: string;
  BUILDING_TYPE: string;
  NUMBER_FLOORS: string;
  SIZE_WIDTH: string;
  SIZE_LONG: string;
  LAND_USE_SPACE: string;
  AGE_BUILDING: string;
  BUILDING_MODEL: string;
  QUALITY_MATERIALS: string;
  BUILDING_CONDITION: string;
  MODIFY_BUILDING: string;
  ROOF_FRAME: string;
  ROOF_MATERIALS: string;
  MAIN_STRUCTURE: string;
  CEILING: string;
  FLOOR_MATERIALS: string;
  WALL_MATERIALS: string;
  DOOR_OUT: string;
  DOOR_IN: string;
  WINDOW: string;
  TOILET: string;
  SANITARY_WARE: string;
  BUILDING_SYSTEM: string;
  LAND_USE: string;
  LAND_USE_RA: string;
  IN_BUIDING: string;
  OPS_IN_BUIDING: string;
  NOTE: string;
  SURVEY_DATE: Date;
}