//https://github.com/CodeMazeBlog/angular-identity-aspnetcore-security/tree/angular-role-based-authorization/AngularClient/src/app
//npm i @auth0/angular-jwt
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  AuthResponseDto,
  UserForRegistrationDto,
  RegistrationResponseDto,
  UserForAuthenticationDto,
  ValidateRegistrationDto,
} from  "app/account/shared/account.model";
import { Subject } from "rxjs";
import { JwtHelperService } from "@auth0/angular-jwt";
import { EnvironmentUrlService } from "app/shared/environment-url.service";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private authChangeSub = new Subject<boolean>();
  public authChanged = this.authChangeSub.asObservable();

  constructor(
    private http: HttpClient,
    private envUrl: EnvironmentUrlService,
    private jwtHelper: JwtHelperService
  ) {}

  public registerUser = (route: string, body: UserForRegistrationDto) => {
    return this.http.post<RegistrationResponseDto>(
      this.createCompleteRoute(route, this.envUrl.authApiURI),
      body
    );
  };

  public validateUserRegistration = (route: string, body: ValidateRegistrationDto) => {
    return this.http.post<ValidateRegistrationDto>(
      this.createCompleteRoute(route, this.envUrl.authApiURI),
      body
    );
  };

  public loginUser = (route: string, body: UserForAuthenticationDto) => {
    return this.http.post<AuthResponseDto>(
      this.createCompleteRoute(route, this.envUrl.authApiURI),
      body
    );
  };

  public sendAuthStateChangeNotification = (isAuthenticated: boolean) => {
    this.authChangeSub.next(isAuthenticated);
  };

  public logout = () => {
    localStorage.removeItem("token");
    this.sendAuthStateChangeNotification(false);
  };

  public isUserAuthenticated = (): boolean => {
    const token = localStorage.getItem("token");

    return token && !this.jwtHelper.isTokenExpired(token);
  };

  public isUserAdmin = (): boolean => {
    const token = localStorage.getItem("token");
    const decodedToken = this.jwtHelper.decodeToken(token);
    const role =
      decodedToken[
        "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
      ];

    return role === "admin";
  };

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  };
}
