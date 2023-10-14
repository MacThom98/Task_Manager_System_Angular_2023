import { Component } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

  constructor(private userService: UserService) { }

  // newUser:User = new User();

  ngOnInit(): void {}

  submitForm(newUser:User): void {
    // let fName = newUser.firstname;
    // let lName = newUser.lastname;
    // let type  = newUser.type;
    // let email = newUser.email;
    // let pass = newUser.password;
    this.userService.createUser(newUser).subscribe(user => console.log(user));
  }
}
