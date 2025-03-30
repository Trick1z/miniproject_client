import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseApi {
  BaseApi = 'http://127.0.0.1:8000/';

  constructor() { }

  Api(): string {
    return this.BaseApi;
  }
}
