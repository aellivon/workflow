import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { urlsafe, queryparams } from '../../utils/http.utils';
import { PAYROLL } from '../../constants/api.constants';


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
}
