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
    // Constructing the file name for the pdf
    const report_phrase = `${this.payroll.date_from} to ${this.payroll.date_to}`;
    const employee_name = `${this.payroll.user.first_name} to ${this.payroll.user.last_name}`;
    const file_name = `payroll of ${employee_name} ${report_phrase}`;
    this.payrollservice.downloadPDF(this.state.params.id, file_name);
  }

}