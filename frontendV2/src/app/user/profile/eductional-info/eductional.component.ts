import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Educational } from 'app/user/shared/user.model';
import { UserService } from 'app/user/shared/user.service';

@Component({
  selector: 'eductional',
  templateUrl: './eductional.component.html'
})

export class EductionalComponent implements OnInit {

  @Input() inputFormGroup = this.fb.group({});
  educational: Educational = new Educational();

  constructor(private fb: UntypedFormBuilder, private userService: UserService) { }

  ngOnInit(): void { }

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