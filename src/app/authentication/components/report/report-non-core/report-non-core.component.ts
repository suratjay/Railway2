import { Component, OnInit } from '@angular/core';
import { IReportNonCore, ReportService } from 'src/app/authentication/services/report.service';
import { ExcelService } from 'src/app/shareds/services/excel.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-report-non-core',
  templateUrl: './report-non-core.component.html',
  styleUrls: ['./report-non-core.component.css']
})
export class ReportNonCoreComponent implements OnInit {

  public reportItems: IReportNonCore[] = [];
  startPage: number = 1;
  limitPage: number = 10;
  constructor(
    private reportService: ReportService,
    private excelService: ExcelService
  ) {
    this.initialLoadReport();
  }

  ngOnInit(): void {
  }

  private initialLoadReport() {
    this.reportService
      .getReportNonCore()
      .then(result => this.reportItems = result)
      .catch()
  }

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.reportItems, 'รายงานประเมินราย non-Core');
  }

  fileName = 'รายงานประเมินราย non-Core.xlsx';
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
