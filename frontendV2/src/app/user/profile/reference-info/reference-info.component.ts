import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, UntypedFormArray, UntypedFormControl, Validators } from '@angular/forms';
import { UserService } from 'app/user/shared/user.service';
import { ReferenceInfo } from 'app/user/shared/user.model';

@Component({
  selector: 'reference-info',
  templateUrl: './reference-info.component.html',
  styleUrls: ['./reference-info.component.scss']
})
export class ReferenceInfoComponent implements OnInit {

  referenceForm = new UntypedFormGroup({});
  reference: ReferenceInfo = new ReferenceInfo();
  constructor(private fb: UntypedFormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.referenceForm = this.fb.group({
      userArray: new UntypedFormArray([this.getUserForm()])
    });
  }

  get userArray() {
    return (<UntypedFormArray>this.referenceForm.get('userArray'));
  }

  addUser() {
    if (this.referenceForm.valid) {
      this.userArray.push(this.getUserForm());
    }
  }

  removeUser(i: number) {
    this.userArray.removeAt(i);
  }

  getUserForm() {
    return this.fb.group({
      referenceName: new UntypedFormControl('', [
        Validators.required
      ]),
      mobileNumber: new UntypedFormControl('', [
        Validators.required
      ]),
      relationshipType: new UntypedFormControl('', [
        Validators.required
      ])
    });
  }

  onReferenceSubmit(): void {
    this.userService.saveUserReferenceInfo(this.reference).subscribe({
      next: (data: any) => {
        //Alert service
      },
      error: (err: any) => {
        //alert service 
      }
    });
  }
}
