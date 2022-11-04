export interface AuthenticatedResponse {
  token: string;
}
export interface AuthResponseDto {
  isAuthSuccessful: boolean;
  errorMessage: string;
  token: string;
}
export interface RegistrationResponseDto {
  isSuccessfulRegistration: boolean;
  errros: string[];
}



export interface ValidateRegistrationDto {
  userId:string;
  code:string;
}

export interface ValidateResultDto extends ValidateRegistrationDto {
  isValid: boolean;
}

export interface UserForAuthenticationDto {
  userName: string;
  password: string;
}

export interface UserForRegistrationDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
