import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { PersonalInfo } from 'app/user/shared/user.model';
import { UserService } from 'app/user/shared/user.service';

@Component({
  selector: 'personal',
  templateUrl: './personal.component.html'
})

export class PersonalComponent implements OnInit {

  @Input() inputFormGroup = this.fb.group({});
  personal: PersonalInfo = new PersonalInfo();
  constructor(private fb: UntypedFormBuilder, private userService: UserService) { }

  ngOnInit(): void { }

  onPersonalSubmit(): void {
    this.userService.saveUserPersonalInfo(this.personal).subscribe({
      next: (data: any) => {
        //Alert service
      },
      error: (err: any) => {
        //alert service 
      }
    });
  }
}