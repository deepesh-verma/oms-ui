import { ApiResponseModel } from './../model/api-response-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  private USERS_API_URL = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<ApiResponseModel> {

    return this.http.get<ApiResponseModel>(this.USERS_API_URL, {
      headers: { 'content-type': 'application/json' },
    });
  }
}
