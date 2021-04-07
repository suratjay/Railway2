import { Component, OnInit } from '@angular/core';
import { IReportChangwat, ReportService } from 'src/app/authentication/services/report.service';
import { ExcelService } from 'src/app/shareds/services/excel.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-report-changwat',
  templateUrl: './report-changwat.component.html',
  styleUrls: ['./report-changwat.component.css']
})
export class ReportChangwatComponent implements OnInit {

  public reportItems: IReportChangwat[] = [];
  constructor(
    private excelService: ExcelService,
    private reportService: ReportService

  ) { 
    this.initialLoadReport();
  }

  ngOnInit(): void {
  }

  private initialLoadReport() {
    this.reportService
      .getReportChangwat()
      .then(result => this.reportItems = result)
      // .then(result => console.log(result))
      .catch()
  }

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.reportItems, 'รายงานประเมินรายจังหวัด');
  }

  fileName = 'รายงานประเมินรายจังหวัด.xlsx';
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
