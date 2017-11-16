import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class DataService {

  private baseUrl = 'http://localhost:28162/api/';

  constructor(private http: Http) {}

  public getData<T>( url: String) {

    const headers = new Headers();
    headers.set('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', this.baseUrl);
    headers.append('Access-Control-Allow-Methods', 'GET');
    const options = new RequestOptions({headers: headers});
    return this.http.get(this.baseUrl  + url, options)
      .map((response: Response) => <T[]>response.json());
  }

  public addData<T>( value: T , url: String) {
        const headers = new Headers({ 'Content-Type': 'application/json'});
        headers.append('Access-Control-Allow-Origin', this.baseUrl);
        headers.append('Access-Control-Allow-Methods', 'POST');
        const options = new RequestOptions({headers: headers});
        return this.http.post(this.baseUrl + url , JSON.stringify(value), options);
  }

}
