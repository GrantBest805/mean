import { Component, OnInit } from '@angular/core';
import { ViewService } from './view.service';
import { Router, Routes, RouterModule, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  poll_id: String;
  poll: any;
  num: number = 0;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _viewService: ViewService,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((param)=>{
      this.poll_id = param.id;
    })
    this.getPoll(this.poll_id)
  }
  getPoll(id){
    this._viewService.getPoll(id)
    .then( (poll) => {
      this.poll = poll
    })
    .catch( err => console.log(err))
  }
  like(){
    this.num += 1;
  }
  // theLike(id){
  //   this._viewService.like(this.poll_id)
  //   .then(poll =>{
  //     this.getPoll(this.poll_id)
  //   })
  //   .catch( err => console.log(err))
  // }

}
