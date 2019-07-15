import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient) { }

  login(loginForm: any) {
    this.http.post(`${environment.baseUrl}/api/accounts`, loginForm).toPromise();
  }
}
