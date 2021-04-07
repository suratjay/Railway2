import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/shareds/services/excel.service';
import { IReportContract, ReportService } from '../../../services/report.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-report-contract',
  templateUrl: './report-contract.component.html',
  styleUrls: ['./report-contract.component.css']
})
export class ReportContractComponent implements OnInit {

  public reportItems: IReportContract[] = [];
  startPage: number = 1;
  limitPage: number = 10;
  constructor(
    private reportService: ReportService,
    private excelService: ExcelService
  ) {
    this.initialLoadReport();
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  private initialLoadReport() {
    this.reportService
      .getReportContract()
      .then(result => this.reportItems = result)
      .catch()
  }

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.reportItems, this.fileName);
  }

  fileName = 'รายงานประเมินรายสัญญา.xlsx';
  public exportexcel(): void {
    /* table id is passed over here */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }

}
