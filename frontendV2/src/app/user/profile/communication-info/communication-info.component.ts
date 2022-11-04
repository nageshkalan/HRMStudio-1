import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { CorrespondenceAddress, PermanentAddress } from 'app/user/shared/user.model';
import { UserProfileService } from 'app/user/shared/user-profile.service';
import { UserService } from 'app/user/shared/user.service';

@Component({
  selector: 'communication-info',
  templateUrl: './communication-info.component.html',
  styleUrls: ['./communication-info.component.scss']
})
export class CommunicationInfoComponent implements OnInit {

  correspondenceInfo: CorrespondenceAddress = new CorrespondenceAddress();

  permanentInfo: PermanentAddress = new PermanentAddress();

  correspondenceForm: UntypedFormGroup;

  disableSelect = new UntypedFormControl(false);

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.correspondenceForm = new UntypedFormGroup({
      email: new UntypedFormControl('', [
        Validators.required,
        Validators.email
      ]),
      mobilePhone: new UntypedFormControl('', [
        Validators.required
      ]),
      homePhone: new UntypedFormControl(''),
      street: new UntypedFormControl('', [
        Validators.required
      ]),
      apartment: new UntypedFormControl('', [
        Validators.required
      ]),
      city: new UntypedFormControl('', [
        Validators.required
      ]),
      state: new UntypedFormControl('', [
        Validators.required
      ]),
      pincode: new UntypedFormControl('', [
        Validators.required
      ])
    });
  }

  onCorrespondenceSubmit(): void {
    this.userService.saveUserCorrespondenceAddressInfo(this.correspondenceInfo).subscribe({
      next: (data: any) => {
        //Alert service
      },
      error: (err: any) => {
        //alert service 
      }
    });
    this.userService.saveUserPermanentAddressInfo(this.permanentInfo).subscribe({
      next: (data: any) => {
        //Alert service
      },
      error: (err: any) => {
        //alert service 
      }
    });
  }
}
