import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { urlsafe, queryparams } from '../../utils/http.utils';
import { PAYROLL, PAYROLL_REPORT } from '../../constants/api.constants';

import { downloadFileHanlder } from '../../utils/file.utils';

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
  
  sendPayrollReport(id){
    return this.http.post(PAYROLL_REPORT(id), null)
    .toPromise()
    .then(resp => { return resp; })
    .catch(err => { return Promise.reject(err); });
  }
} 
