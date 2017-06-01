import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class CreateService {

  constructor(private _http: Http) { }
  createPoll(poll) {
    return this._http.post('/api/create', poll)
    .map( (poll: Response) => poll.json())
    .toPromise()
  }

}
