import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(
    private httpService: HttpService
  ) { }

  getStationList() {
    return (
      this.httpService
        .requestGet('/api/station')
        .toPromise() as Promise<IStation[]>
    )
  }
}

export interface IStation {
  STATION_DESC: string;
  CONTRACT_REPORT_PATH: string;
  CONTRACT_PDF_PATH: string;
  SURVEY_MAP_PATH: string;
  SURVEY_LAYOUT_PATH: string;
  TOTAL_PDF: string;
  TOTAL_BUILDING: string;
  PIPE_LINE_PATH: string;
}
