import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable({
    providedIn:'root'
})
export class ContactService {

    getcontactdetails:any;

    constructor (private http : HttpClient) {}
  
    //get()
    getContacts(){
        return this.http.get('http://localhost:3000/contacts');
    }
   postcontact(data:any){
      return(this.http.post<any>("http://localhost:3000/title",data)
      .pipe(map((res:any)=>{
        return res;
      })))
    }
      clearPost(id:number){
        this.http.delete("http://localhost:3000/title").subscribe(response=>{console.log(response)})
      }
   
}