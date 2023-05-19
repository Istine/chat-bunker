import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  jwtToken: string = '';
  decodedToken: { [key: string]: string | number } = {};
  constructor() {}

  setToken(token: string) {
    if (token) {
      this.jwtToken = token;
    }
    return this;
  }

  decodeToken() {
    if (this.jwtToken) {
      this.decodeToken = jwtDecode(this.jwtToken);
    }
  }

  getDecodeToken() {
    return jwtDecode(this.jwtToken);
  }

  getUser() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken['email'] : null;
  }

  getExpiryTime() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken['exp'] : null;
  }

  isTokenExpired(): boolean {
    const expiryTime: number = this.getExpiryTime() as number;
    if (expiryTime) {
      return 1000 * expiryTime - new Date().getTime() < 5000;
    } else {
      return false;
    }
  }
}
