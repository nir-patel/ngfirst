import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private baseUrl: string;
  private endpoint: string;
  private params: [string];

  private finaldata = [];
  private apiurl = 'http://jsonplaceholder.typicode.com/users';

  serviceProp = 'This is service property';
  constructor(private httpClient: HttpClient) {}

  getData() {
     return this.httpClient.get(this.apiurl);
  }


}
