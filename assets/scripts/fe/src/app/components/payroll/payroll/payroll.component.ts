import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { PayrollService } from '../../../commons/services/payroll/payroll.service';

import { Payroll } from '../../../commons/models/payroll.models';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit {
  private payroll = new Payroll;

  constructor(
    private state          : StateService,
    private payrollservice : PayrollService
  ) { }

  ngOnInit() {
    if(this.state.params.id) {
      // get payroll details from the backend
      this.payrollservice.detail(this.state.params.id)
        .subscribe(resp=>{ this.payroll = new Payroll(resp); }); 
    }
  }

  downloadPDF() {
    this.payrollservice.downloadPDF(this.state.params.id);
  }
}