import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    host = "http://localhost:3000"
    constructor(private http: HttpClient) {}

    newUser(form:any){
      return this.http.post(this.host+"/submit",form)
    }
  
}
