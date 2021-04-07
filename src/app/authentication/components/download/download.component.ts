import { Component, OnInit } from '@angular/core';
import { StationService, IStation } from '../../services/station.service';
@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  path: string = 'D:\SRT\dolappV21\RAILWAY';
  public stationItems: IStation[] = [];
  startPage: number = 1;
  limitPage: number = 10;

  constructor(
    private stationService: StationService
  ) { }

  ngOnInit(): void {
    this.initialLoadStaion();
  }

  private initialLoadStaion() {
    this.stationService
      .getStationList()
      .then(result => this.stationItems = result)
      .catch()
  }


}
