import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppCookieServiceService {
  private cookieStore: { [x: string]: any } = {};

  constructor() {}

  public parseCookies(cookies = document.cookie) {
    this.cookieStore = {};
    if (Boolean(cookies) == false) return;
    const cookiesArr = cookies.split(';');
    for (let cookie of cookiesArr) {
      const cookiesArr = cookie.split('=');
      this.cookieStore[cookiesArr[0].trim()] = cookiesArr[1];
    }
  }

  get(key: string) {
    this.parseCookies();
    return Boolean(this.cookieStore[key]) ? this.cookieStore[key] : null;
  }

  remove(key: string) {
    document.cookie = `${key} = ; expires=Thu, 1 jan 1990 12:00:00 UTC; path=/`;
  }

  set(key: string, value: string) {
    document.cookie += key + '=' + (value || '') + ';';
  }
}
