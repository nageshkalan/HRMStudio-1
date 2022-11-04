import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Dependent } from 'app/user/shared/user.model';
import { UserService } from 'app/user/shared/user.service';

@Component({
  selector: 'dependent',
  templateUrl: './dependent.component.html'
})

export class DependentComponent implements OnInit {
  dependent: Dependent = new Dependent();
  @Input() inputFormGroup = this.fb.group({});

  constructor(private fb: UntypedFormBuilder, private userService: UserService) { }

  ngOnInit(): void { }

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