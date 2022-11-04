import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { SpouseInfo } from 'app/user/shared/user.model';
import { UserService } from 'app/user/shared/user.service';

@Component({
  selector: 'spouse-info',
  templateUrl: './spouse-info.component.html',
  styleUrls: ['./spouse-info.component.scss']
})

export class SpouseInfoComponent implements OnInit {
  spouseForm: UntypedFormGroup;
  spouse: SpouseInfo = new SpouseInfo();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.spouseForm = new UntypedFormGroup({
      maritialStatus: new UntypedFormControl(''),
      spouseName: new UntypedFormControl(''),
      spouseEmployer: new UntypedFormControl(''),
      spousePhone: new UntypedFormControl('')
    });
  }
  
  onSpouseSubmit(): void {
    this.userService.saveUserSpouseInfo(this.spouse).subscribe({
      next: (data: any) => {
        //Alert service
      },
      error: (err: any) => {
        //alert service 
      }
    });
  }
}
