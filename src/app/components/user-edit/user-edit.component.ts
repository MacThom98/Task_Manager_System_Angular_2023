import { Component } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  constructor(private _userService: UserService, private route:ActivatedRoute, private navigation: Router){}

  
  user = <User>{};
  ngOnInit(): void {
    var id = this.route.snapshot.params['id'];
    this._userService.getUserByID(id).subscribe(
      (user) => {
        this.user = user;
        console.log(this.user);
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  submitForm(userChanges:User) {
    let id = this.route.snapshot.params['id']; //Buộc phải xác định lại ID để truyền vào url REQUEST PUT
    userChanges.id = id;
    this._userService.updateUser(userChanges).subscribe(() => {this.user = userChanges; this.navigation.navigate(['user'])});  
    console.log(this.user);
  }
}
