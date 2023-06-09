import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {

   }
   getUsersFromApi(){
     return this.http.get('http://localhost:3000/users');
   }
   getUniversitiesFromApi(){
    return this.http.get('http://localhost:3000/colleges');
   }
}
