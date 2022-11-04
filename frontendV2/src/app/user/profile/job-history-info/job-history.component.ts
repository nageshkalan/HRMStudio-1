import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { JobHistory } from 'app/user/shared/user.model';
import { UserService } from 'app/user/shared/user.service';

@Component({
  selector: 'job-history',
  templateUrl: './job-history.component.html'
})

export class JobHistoryComponent implements OnInit {

  @Input() inputFormGroup = this.fb.group({});
  jobhistory: JobHistory = new JobHistory();
  constructor(private fb: UntypedFormBuilder, private userService: UserService) { }

  ngOnInit(): void { }

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