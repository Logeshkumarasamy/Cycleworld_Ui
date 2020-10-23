import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserReg } from './user-reg';

@Injectable({
  providedIn: 'root'
})
export class UserregisterService {

  baseURL: string = "http://localhost:7000/";

  constructor(private http: HttpClient) {
  }
  getAllUser = () =>{
   return this.http.get('http://localhost:8081/admin/showallusers')
  }
  createUser= (UserReg) =>{
    return this.http.post('http://localhost:8081/api/user/register',UserReg)
  }
}

