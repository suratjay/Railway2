import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppURL } from 'src/app/app.url';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { AuthURL } from '../../authentication.url';
import { ContractService, IContract } from '../../services/contract.service';
import { SearchService, IDivision, IProvince, IStation } from '../../services/search.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  public contractItems: IContract[] = [];

  public divisionList: IDivision;
  public provinceList: IProvince;
  public stationList: IStation;

  divisionID: number = 0;
  privinceID: number = 0;
  stationId: number = 0;

  startPage: number = 1;
  limitPage: number = 10;

  AppURL = AppURL;
  AuthURL = AuthURL;
  constructor(
    private contractService: ContractService,
    private router: Router,
    private alert: AlertService,
    private searchService: SearchService
  ) {
    this.initialLoadContract();
    this.initialLoadDivision();
    // this.initialLoadStation();
  }

  ngOnInit(): void {
  
  }

  // โหลดข้อมูลสัญญาทั้งหมด
  private initialLoadContract(option?) {
    this.contractService
      .getContract(option)
      .then(result => this.contractItems = result)
      // .then(result => {
      //   this.contractItems = result;
      // })
      .catch(err => this.alert.notify(err.Message))
  }

  // เพิ่มปัจจัย Id ไปยัง Url
  onCreateFactor(item: IContract) {
    // this.alert.notify(item.COUNTERPARTY_SEQ);
    this.router.navigate(['',
      AppURL.Authen,
      AuthURL.factorContract,
      { id: item.COUNTERPARTY_SEQ, st: 'new' }
    ]);
  }

  // อัพเดตปัจจัย Id ไปยัง Url
  onUpdateFactor(item: IContract) {
    this.router.navigate(['',
      AppURL.Authen,
      AuthURL.factorContract,
      { id: item.COUNTERPARTY_SEQ }
    ])
  }

  // โหลดข้อมูลกองบริหารจัดการ
  private initialLoadDivision() {
    this.searchService
      .getDivision()
      .then(result => {
        this.divisionList = result;
      })
      .catch(err => this.alert.notify(err.Message))
  }

  // โหลดข้อมูลจังหวัด
  private initialLoadProvince() {
    this.searchService
      .getProvince(this.divisionID)
      .then(result => {
        this.provinceList = result;
      })
      .catch(err => this.alert.notify(err.Message))
  }

  // โหลดข้อมุลสถานี
  private initialLoadStation() {
    this.searchService
      .getStation(this.privinceID)
      .then(result => {
        this.stationList = result;
      })
      .catch(err => this.alert.notify(err.Message))
  }

  // เรียกใช้ฟังก์ชั่น โหลดข้อมูลกองบริหารจัดการ
  onChangeDivision() {
    this.initialLoadProvince();
    this.privinceID = 0;
    this.stationId = 0;
  }

  // เรียกใช้ฟังก์ชั่น โหลดข้อมูลจังหวัด
  onChangeProvince() {
    // console.log(this.privinceID);
    this.initialLoadStation();
    this.stationId = 0;
  }

  onSearchById() {
    // console.log(this.stationId);
    this.startPage = 1;
    this.initialLoadContract({
      stationId: this.stationId,
      // startPage: this.startPage,
      // limitPage: this.limitPage
    });

  }
}
