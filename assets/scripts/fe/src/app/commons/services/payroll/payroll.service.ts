import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { urlsafe, queryparams } from '../../utils/http.utils';
import { PAYROLL, PAYROLL_REPORT } from '../../constants/api.constants';
import { downloadFileHanlder } from '../../utils/file.utils';

import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PayrollService {
  private plist : any = [];

  constructor(
    private http: HttpClient
  ) { }

  /* Payroll detail
   */
  detail(id) {
    return this.http.get(urlsafe(PAYROLL, id));
  }

  /* Payroll list
   */
  list(params={}) {
    return this.http.get(PAYROLL + queryparams(params));
  }

  getList() {
    this.list()
      .subscribe(resp=>{ this.plist = resp; });
  }

 
  downloadPDF(id, fileName = "default"){
     /* Automatically download the pdf 
     */
    
    // instead of using a simple redirection to download the request.
    //  Use a get request so that the inteceptors can catch it and attach token. 
    
    this.http.get(PAYROLL_REPORT(id), { responseType: 'blob'})
      .subscribe(
        data => { downloadFileHanlder(data, fileName) }
      )
  }

  sendPayrollReport(id, fileName){
    this.http.post(PAYROLL_REPORT(id), {"file_name": fileName})
    .subscribe(
      data => { console.log(data); }
    )
  }

}
