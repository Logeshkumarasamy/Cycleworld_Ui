import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from './feedback';
import { Newsletter } from './newsletter';
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
  sumbit = (Newsletter) => {
    return this.http.post('http://localhost:8081/api/user/Newsletter',Newsletter)

  }
  getAllnewsletter =() => {
    return this.http.get('http://localhost:8081/admin/newsletter')
  }
  getAllfeedback =() => {
    return this.http.get('http://localhost:8081/admin/feedback')
  }
  sendData = (Feedback) => {
    return this.http.post('http://localhost:8081/api/user/feedback',Feedback)

  }
  loginUserRemote = (UserReg) => {
    return this.http.post('http://localhost:8081/User/login',UserReg)
  }
 /* public deleteUser(user) {
    return this.http.delete("http://localhost:8081/admin/DeleteUser/{id}"+'/'+user.id);
  }*/
  deletePost(id){
    return this.http.delete("http://localhost:8081/admin/DeleteUser/{id}"+'/'+id);
  }
  add= (Addproduct) =>{
    return this.http.post('http://localhost:8081/api/admin/addproduct',Addproduct)
  }
}

