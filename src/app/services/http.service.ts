import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { backendURL } from '../app.url';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // private address: string = '/backend';
  // private address: string = 'http://122.155.174.9/backend';
  private address: string = `${backendURL}`;
  
  ;

  constructor(
    private http: HttpClient
  ) { }

  // ส่งข้อมุลแบบ Get method
  requestGet(url: string, accessToken?: string) {
    return this.http
      .get(`${this.address}${url}`, {
        headers: this.appendHeaders(accessToken)
      })
      .pipe(catchError(err => this.handelError(err)));
  }

  // ส่งข้อมุลแบบ Post method
  requestPost(url: string, body: any, accessToken?: string) {
    return this.http
      .post(`${this.address}${url}`, body, {
        headers: this.appendHeaders(accessToken)
      })
      .pipe(catchError(err => this.handelError(err)));
  }

  // ส่งข้อมุลแบบ Put method
  requestPut(url: string, body: any, accessToken?: string) {
    return this.http
      .put(`${this.address}${url}`, body, {
        headers: this.appendHeaders(accessToken)
      })
      .pipe(catchError(err => this.handelError(err)));
  }

  // ส่งข้อมุลแบบ Delete method
  requestDelete(url: string, accessToken?: string) {
    return this.http
      .delete(`${this.address}${url}`, {
        headers: this.appendHeaders(accessToken)
      })
      .pipe(catchError(err => this.handelError(err)));
  }

  // เพิ่ม Header
  private appendHeaders(accessToken) {
    const headers = {};
    if (accessToken) headers['Authorization'] = `Bearer ${accessToken}`;
    return new HttpHeaders(headers);
  }

  // ปรับแต่ง Error ใหม่
  private handelError(errResponse: HttpErrorResponse): Observable<any> {
    errResponse['Message'] = errResponse.message;
    if (errResponse.error && errResponse.error.message)
      errResponse['Message'] = errResponse.error.message;
    throw errResponse;
  }
}
