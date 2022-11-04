import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, UntypedFormArray, UntypedFormControl, Validators } from '@angular/forms';
import { UserService } from 'app/user/shared/user.service';
import { Dependent } from 'app/user/shared/user.model';

@Component({
  selector: 'dependent-info',
  templateUrl: './dependent-info.component.html',
  styleUrls: ['./dependent-info.component.scss']
})
export class DependentInfoComponent implements OnInit {
  dependent: Dependent = new Dependent();

  dependentForm = new UntypedFormGroup({});

  constructor(private fb: UntypedFormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.dependentForm = this.fb.group({
      userArray: new UntypedFormArray([this.getUserForm()])
    });
  }

  get userArray() {
    return (<UntypedFormArray>this.dependentForm.get('userArray'));
  }

  addUser() {
    if (this.dependentForm.valid) {
      this.userArray.push(this.getUserForm());
    }
  }

  removeUser(i: number) {
    this.userArray.removeAt(i);
  }

  getUserForm() {
    return this.fb.group({
      dependentRelationship: new UntypedFormControl('', [
        Validators.required
      ]),
      name: new UntypedFormControl('', [
        Validators.required
      ]),
      dob: new UntypedFormControl('', [
        Validators.required
      ]),
      gender: new UntypedFormControl('', [
        Validators.required
      ])
    });
  }
  
  onDependentSubmit(): void {
    this.userService.saveUserDependentInfo(this.dependent).subscribe({
      next: (data: any) => {
        //Alert service
      },
      error: (err: any) => {
        //alert service 
      }
    });
  }
}
