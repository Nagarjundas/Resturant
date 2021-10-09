import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  url = 'http://localhost:3000/restros';
  constructor(private _http: HttpClient) {}

  getRestoList() {
    // console.log('it is the list of restaurant');
    return this._http.get(this.url);
  }

  addResto(data: any) {
    return this._http.post(this.url, data);
  }

  getCurrentData(id:any) {
    return this._http.get(`${this.url}/${id}`);
  }

  deleteData(id:any) {
    return this._http.delete(`${this.url}/${id}`);
  }

  updateResto(id:any,data: any){
    return this._http.put(`${this.url}/${id}`,data);
  }
}
