import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class ViewService {

  constructor(private _http: Http) { }
  getPoll(id){
    return this._http.get('/api/view/'+ id)
    .map( (poll: Response) => poll.json())
    .toPromise()
  }
  // like(id){
  //   return this._http.get('/api/view/like/' + id)
  //   .map( (poll: Response) => poll.json())
  //   .toPromise()
  // }
}
