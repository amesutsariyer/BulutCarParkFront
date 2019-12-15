export class LoginRequest {

  username: string;
  password: string;
  grantType = 'password';

}

export class LoginResponse {
  accessToken: string;
  tokenType: string;
  scope: string;
  role: string;
  firstLogin: boolean;
}
