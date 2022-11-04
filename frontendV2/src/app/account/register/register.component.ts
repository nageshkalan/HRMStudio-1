import { Component, OnInit, ViewChild } from "@angular/core";
import { MatButton } from "@angular/material/button";
import { MatProgressBar } from "@angular/material/progress-bar";
import {
  Validators,
  UntypedFormGroup,
  UntypedFormControl,
} from "@angular/forms";
import { AuthenticationService } from "app/core/authentication/auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import { Subject, takeUntil } from "rxjs";
import {
  ValidateRegistrationDto,
  ValidateResultDto,
} from "../shared/account.model";
import { tr } from "date-fns/locale";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  @ViewChild(MatProgressBar) progressBar: MatProgressBar;
  @ViewChild(MatButton) submitButton: MatButton;

  registrationCode: string="";
  userId: string="";
  isValidToken: boolean = false;

  errorMsg: string = "";
  signupForm: UntypedFormGroup;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

   // this.registrationCode = this.route.snapshot.queryParams["code"] || "/";

    this.route.queryParams
     // .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((params) => {
        this.registrationCode = params["code"] || null;
        this.userId = params["id"] || null;

        if (this.registrationCode != null && this.userId != null) {
          return;
        }
        var postData: ValidateRegistrationDto = {
          userId: this.userId,
          code: this.registrationCode,
        };

        this.authService
          .validateUserRegistration(
            "api/v1/auth/VerifyResetPasswordToken",
            postData
          )
          .subscribe((res: ValidateResultDto) => {
            if (!res.isValid) {
              this.errorMsg = "Invalid token";
            }
            this.isValidToken = true;
          });
      });

    const fullName = new UntypedFormControl("", Validators.required);
    const password = new UntypedFormControl("", Validators.required);
    const confirmPassword = new UntypedFormControl("", Validators.required);

    this.signupForm = new UntypedFormGroup({
      fullName: fullName,
      email: new UntypedFormControl("", [
        Validators.required,
        Validators.email,
      ]),
      password: password,
      confirmPassword: confirmPassword,
      agreed: new UntypedFormControl("", (control: UntypedFormControl) => {
        const agreed = control.value;
        if (!agreed) {
          return { agreed: true };
        }
        return null;
      }),
    });
  }

  ngOnDestroy() {
    this._unsubscribeAll.next(1);
    this._unsubscribeAll.complete();
  }

  signup() {
    const signupData = this.signupForm.value;
    console.log(signupData);

    this.submitButton.disabled = true;
    this.progressBar.mode = "indeterminate";

    this.authService.loginUser("api/v1/auth/register", signupData).subscribe({
      next: (res) => {
        this.router.navigateByUrl("/login");
      },
      error: (err: HttpErrorResponse) => {
        this.submitButton.disabled = false;
        this.progressBar.mode = "determinate";
        this.errorMsg = err.message;
        // console.log(err);
      },
    });
  }
}
