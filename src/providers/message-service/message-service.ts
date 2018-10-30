import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
//import { Response } from '@angular/json';

/*
  Generated class for the MessageServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable() 
export class MessageServiceProvider {
  private url:string = "http://192.168.1.109:3000/api/";
  constructor(private http: HttpClient) {
    console.log('Hello MessageServiceProvider Provider');
  }

  getMessages(dar){
     console.log(dar)
     //this.url="http://192.168.1.109:3000/api/"+ dar 
  	 return this.http.get(this.url 
       +dar)
  	.do(res => console.log(res));
  }

 
 getUserProfile(id){
     console.log(id)
      
    
    return this.http.get(this.url 
       +'user/viewprofile/' +id)
    .do(res => console.log(res));
  }

  getProductDetail(id){
     return this.http.get(this.url 
       +'product/single/' +id)
    .do(res => console.log(res));
  }

  registerUser(postData) {
    
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      return new Promise((resolve, reject)=>{
        this.http.post(this.url+'register/insert', postData , {headers: headers}).subscribe((res)=>{
          resolve(res);
        }, (err) => {
          reject(err);
        });
      });
  }

  loginUser(data) {
      
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      return new Promise((resolve, reject)=>{
        this.http.post(this.url+'user/login', data , {headers: headers}).subscribe((res)=>{
          resolve(res);
        }, (err) => {
          reject(err);
        });
      });
  }
}
