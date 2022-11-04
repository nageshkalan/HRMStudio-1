import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, UntypedFormArray, UntypedFormControl, Validators } from '@angular/forms';
import { UserService } from 'app/user/shared/user.service';
import { JobHistory } from 'app/user/shared/user.model';

@Component({
  selector: 'job-history-info',
  templateUrl: './job-history-info.component.html',
  styleUrls: ['./job-history-info.component.scss']
})
export class JobHistoryInfoComponent implements OnInit {

  jobHistoryForm = new UntypedFormGroup({});
  jobhistory: JobHistory = new JobHistory();
  constructor(private fb: UntypedFormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.jobHistoryForm = this.fb.group({
      userArray: new UntypedFormArray([this.getUserForm()])
    });
  }

  get userArray() {
    return (<UntypedFormArray>this.jobHistoryForm.get('userArray'));
  }

  addUser() {
    if (this.jobHistoryForm.valid) {
      this.userArray.push(this.getUserForm());
    }
  }

  removeUser(i: number) {
    this.userArray.removeAt(i);
  }

  getUserForm() {
    return this.fb.group({
      position: new UntypedFormControl('', [
        Validators.required
      ]),
      companyName: new UntypedFormControl('', [
        Validators.required
      ]),
      companyAddress: new UntypedFormControl('', [
        Validators.required
      ]),
      numberOfYears: new UntypedFormControl('', [
        Validators.required
      ]),
      period: new UntypedFormControl('', [
        Validators.required
      ]),
      ctc: new UntypedFormControl('', [
        Validators.required
      ]),
    });
  }

  onJobHistorySubmit(): void {
    this.userService.saveUserJobHistoryInfo(this.jobhistory).subscribe({
      next: (data: any) => {
        //Alert service
      },
      error: (err: any) => {
        //alert service 
      }
    });
  }
}
