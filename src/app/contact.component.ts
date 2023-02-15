import { Component, OnInit } from '@angular/core';
import { count, Observable } from 'rxjs';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
    contactList:any;

    ngOnInit(): void {}
    constructor(public contactService:ContactService){
        this.contactService.getContacts().subscribe(data =>{
             this.contactList = data;
             console.log(data);
        }  )
    }

   
    onClearPost(id:number){
  
      this.contactService.clearPost(id).subscribe(data=>console.log(data));
      
    }

   
}
