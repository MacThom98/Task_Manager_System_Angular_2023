import { Component } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  constructor(private _userService: UserService, private route:ActivatedRoute, private navigation:Router){}

  user = <User>{};
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this._userService.getUserByID(id).subscribe(user => this.user = user);
    console.log(this.user);
  }

  
}
