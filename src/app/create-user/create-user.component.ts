import { Component } from '@angular/core';
import { UserService } from '../service/user-service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  constructor(private api:UserService){}

  form = {
    first_name : "",
    last_name : ""
  }
  submit(){
    this.api.newUser(this.form).subscribe((data:any)=>{
      console.log(data)
    })
  }
}
