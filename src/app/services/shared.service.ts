import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { tap, delay, catchError, map } from 'rxjs/operators';

import { URL } from '../const/url'
import { UploadedList } from '../modals/uploadList'

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) {}

  setLoginErrorMessage : string;
  hasLoginError: boolean;
  loggedUser: string;

  getAllUsers(){
    return this.http.get(URL.usersURL).pipe(
      map((res: any) => res)
    );
  }

  getRevenueData(){
    return this.http.get(URL.revenueURL).pipe(
      map((res: any) => res)
    );
  }

  getUploadList() {
    return this.http.get(URL.revenueURL).pipe(
      map((res: any) => res)  
    );           
  }
}
