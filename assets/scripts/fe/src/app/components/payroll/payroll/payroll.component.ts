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
  private sendingEmail: boolean = false;
  private emailCallbackMessage: string = "";

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

  getFileName(){
    // Constructing the file name for the pdf
    const date_phrase = `${this.payroll.date_from} to ${this.payroll.date_to}`;
    const employee_name = `${this.payroll.user.first_name} to ${this.payroll.user.last_name}`;
    return `payroll of ${employee_name} ${date_phrase}`;;
  }

  downloadPDF() {
    const file_name = this.getFileName();
    this.payrollservice.downloadPDF(this.state.params.id, file_name);
  }

  sendPDF(){
    this.sendingEmail = true;
    const file_name = this.getFileName();
    this.payrollservice.sendPayrollReport(this.state.params.id, file_name)
    .then(
      data => {
        console.log(data);
        this.sendPDFGeneralCallback(true);
      }
    )
    .catch(
      errors => {
        console.log(errors);
        this.sendPDFGeneralCallback(false);
      }
    )
  }

  sendPDFGeneralCallback(success){
    // General clean up on call back
    this.sendingEmail = true;
    if(success){
      this.emailCallbackMessage = "Email is sent sucessfully.";
    }else{
      this.emailCallbackMessage = "Something went wrong in sending the email!";
    }
  }
}