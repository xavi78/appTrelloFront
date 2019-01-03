import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const HttpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ListService {
  
  private ListApi = "http://apitrello.herokuapp.com/list";

  constructor(private httpClient: HttpClient) { }

  getList(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.ListApi,HttpOptions);
  }

}
