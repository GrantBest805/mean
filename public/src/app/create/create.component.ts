import { Component, OnInit } from '@angular/core';
import { Router, Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { CreateService } from './create.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
 
  constructor(
    private _createService: CreateService,
    private _router: Router,
  ) { }

  ngOnInit() {
  }
  createPoll(formData){
    this._createService.createPoll(formData.value)
    .then( () =>{
      this._router.navigate(['/dashboard'])
    })
    .catch( (err) => console.log(err))
  }

}
