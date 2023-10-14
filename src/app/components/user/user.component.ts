import { Component } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserService } from'src/app/services/user/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private route:Router,private userService: UserService){}

  users: User[] = [];

  ngOnInit(){
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }

  deleteConfirm(id:number){
    const res = confirm('Are you sure you want to delete this user?');
    console.log(res);
    if(res){
    this.userService.deleteUser(id).subscribe(() => this.ngOnInit());
    this.route.navigate(['user']);
  }
}
}
