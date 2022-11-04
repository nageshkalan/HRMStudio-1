import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { EmergencyContactInfo } from 'app/user/shared/user.model';
import { UserService } from 'app/user/shared/user.service';

@Component({
  selector: 'emergency-contact-info',
  templateUrl: './emergency-contact-info.component.html',
  styleUrls: ['./emergency-contact-info.component.scss']
})
export class EmergencyContactInfoComponent implements OnInit {

  emergencyInfo: EmergencyContactInfo = new EmergencyContactInfo();
  emergencyForm: UntypedFormGroup;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.emergencyForm = new UntypedFormGroup({
      physician: new UntypedFormControl(''),
      phoneNumber: new UntypedFormControl(''),
      bloodGroup: new UntypedFormControl(''),
      firstName: new UntypedFormControl(''),
      lastName: new UntypedFormControl(''),
      relationship: new UntypedFormControl(''),
      street: new UntypedFormControl(''),
      city: new UntypedFormControl(''),
      state: new UntypedFormControl(''),
      pincode: new UntypedFormControl(''),
      homePhone: new UntypedFormControl(''),
      workPhone: new UntypedFormControl(''),
      mobilePhone: new UntypedFormControl(''),
    });
  }

  onEmergencySubmit(): void {
    this.userService.saveUserEmergencyContactInfo(this.emergencyInfo).subscribe({
      next: (data: any) => {
        //Alert service
      },
      error: (err: any) => {
        //alert service 
      }
    });
  }
}
