import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient) { }

  login(user: User) {
    const url = `${environment.baseUrl}/api/accounts/login`;
    const formData: FormData = new FormData();
    formData.append('email', user.email);
    formData.append('password', user.password);
    return this.http.post(url, formData).toPromise();
  }
}
