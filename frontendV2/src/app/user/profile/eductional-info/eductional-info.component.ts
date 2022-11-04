import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { UserService } from 'app/user/shared/user.service';
import { Educational } from 'app/user/shared/user.model';

@Component({
  selector: 'eductional-info',
  templateUrl: './eductional-info.component.html',
  styleUrls: ['./eductional-info.component.scss']
})
export class EductionalInfoComponent implements OnInit {

  educationalForm = new UntypedFormGroup({});

  educational: Educational = new Educational();

  constructor(private fb: UntypedFormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.educationalForm = this.fb.group({
      userArray: new UntypedFormArray([this.getUserForm()])
    });
  }

  get userArray() {
    return (<UntypedFormArray>this.educationalForm.get('userArray'));
  }

  addUser() {
    if (this.educationalForm.valid) {
      this.userArray.push(this.getUserForm());
    }
  }

  removeUser(i: number) {
    this.userArray.removeAt(i);
  }

  getUserForm() {
    return this.fb.group({
      university: new UntypedFormControl('', [
        Validators.required
      ]),
      completionYear: new UntypedFormControl('', [
        Validators.required
      ]),
      program: new UntypedFormControl('', [
        Validators.required
      ]),
      aggregate: new UntypedFormControl('', [
        Validators.required
      ]),
      grade: new UntypedFormControl('', [
        Validators.required
      ])
    });
  }
  
  onEducationalSubmit(): void {
    this.userService.saveUserEducationalInfo(this.educational).subscribe({
      next: (data: any) => {
        //Alert service
      },
      error: (err: any) => {
        //alert service 
      }
    });
  }
}



