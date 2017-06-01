import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login/login.service';
import { DashboardService } from './dashboard.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any;
  polls: Array<any>;
  constructor(
    private _dashboardService: DashboardService,
    private _loginService: LoginService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getPolls()
    this.getCurrentUser()
  }
  getCurrentUser(){
    this._loginService.getCurrentUser()
    .then( (user) => {
      this.user = user;
    })
    .catch( (err) => this._router.navigate(['/login']))
  }
  getPolls(){
    this._dashboardService.getPolls()
    .then( (polls) => {
      this.polls = polls;
    })
    .catch( (err) => console.log(err))
  }
  delete(id){
    this._dashboardService.delete(id)
    .then( () => {
      this.getPolls()
    })
    .catch( (err) => console.log(err))
  }

}
