import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { LoginPayload, SignupPayload, User } from '../types';
import { BASE_URL } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(loginData: User): Observable<any | unknown> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    const body = JSON.stringify(loginData);
    return this.http
      .post<any>(`${BASE_URL}/auth/local-login`, body, {
        headers,
      })
      .pipe(
        catchError((err) => {
          return of(err.error);
        })
      );
  }

  signup(loginData: User): Observable<SignupPayload | unknown> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    const body = JSON.stringify(loginData);
    return this.http
      .post<SignupPayload>(`${BASE_URL}/auth/local-signup`, body, { headers })
      .pipe(
        catchError((err) => {
          return of(err.error);
        })
      );
  }
}
