import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Nominee } from 'app/user/shared/user.model';
import { UserService } from 'app/user/shared/user.service';

@Component({
  selector: 'nominee',
  templateUrl: './nominee.component.html'
})

export class NomineeComponent implements OnInit {

  @Input() inputFormGroup = this.fb.group({});
  nominee: Nominee = new Nominee();
  constructor(private fb: UntypedFormBuilder, private userService: UserService) { }

  ngOnInit(): void { }

  onNomineeSubmit(): void {
    this.userService.saveUserNomineeInfo(this.nominee).subscribe({
      next: (data: any) => {
        //Alert service
      },
      error: (err: any) => {
        //alert service 
      }
    });
  }
}