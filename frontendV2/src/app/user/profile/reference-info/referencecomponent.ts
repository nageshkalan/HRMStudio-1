import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ReferenceInfo } from 'app/user/shared/user.model';
import { UserService } from 'app/user/shared/user.service';

@Component({
  selector: 'reference',
  templateUrl: './reference.component.html'
})

export class ReferenceComponent implements OnInit {

  @Input() inputFormGroup = this.fb.group({});
  reference: ReferenceInfo = new ReferenceInfo();
  constructor(private fb: UntypedFormBuilder, private userService: UserService) { }

  ngOnInit(): void { }

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