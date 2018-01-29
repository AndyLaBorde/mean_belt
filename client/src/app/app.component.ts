import { Component, OnInit } from '@angular/core';
import { UserService } from './user/user.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
  	private _route: Router,
  	private _userService: UserService){ }


  ngOnInit() {
  	this._userService.getCurrentUser(
  			(user) =>{
  				if (!user) {
  					//nav to home
  					this._route.navigateByUrl('/');
  				}

  			},
  			console.log
  		);
  }

}
