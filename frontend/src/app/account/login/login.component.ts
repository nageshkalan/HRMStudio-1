import { HttpErrorResponse } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthenticationService } from "src/app/core/authentication/auth.service";
import { AuthResponseDto, UserForAuthenticationDto } from "../account.model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  private returnUrl: string;

  loginForm: FormGroup;
  errorMessage: string = "";
  showError: boolean;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    });
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  validateControl = (controlName: string) => {
    return (
      this.loginForm.get(controlName).invalid &&
      this.loginForm.get(controlName).touched
    );
  };

  hasError = (controlName: string, errorName: string) => {
    return this.loginForm.get(controlName).hasError(errorName);
  };

  loginUser = (loginFormValue: any) => {
    this.showError = false;
    const login = { ...loginFormValue };

    const userForAuth: UserForAuthenticationDto = {
      userName: login.userName,
      password: login.password,
    };

    this.authService.loginUser("api/v1/auth/login", userForAuth).subscribe({
      next: (res: AuthResponseDto) => {
        localStorage.setItem("token", res.token);
        this.authService.sendAuthStateChangeNotification(res.isAuthSuccessful);
        this.router.navigate([this.returnUrl]);
      },
      error: (err: HttpErrorResponse) => {
        this.errorMessage = err.message;
        this.showError = true;
      },
    });
  };
}
