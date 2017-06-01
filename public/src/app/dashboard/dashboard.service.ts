import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
@Injectable()
export class DashboardService {

  constructor(private _http: Http) { }
  getPolls() {
    return this._http.get('/api/dashboard')
    .map( (polls: Response) => polls.json())
    .toPromise()
  }
  delete(id) {
    return this._http.delete('/api/delete/' + id)
    .map( (poll: Response) => poll.json())
    .toPromise()
  }

}
