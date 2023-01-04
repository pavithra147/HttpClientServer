import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactModel } from './contact';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
constructor(private httpclient: HttpClient,private contactService:ContactService){}
  titleForm!: FormGroup;
  contactobj : ContactModel = new ContactModel;

ngOnInit(){
  this.titleForm = new FormGroup({
      title: new FormControl(' ',Validators.required),
      content: new FormControl(' ',Validators.required)
  });


}
list:any
onCreateTitle(){
  
  const postdata = this.titleForm.value;
  this.httpclient.post("http://localhost:3000/title",postdata).subscribe(response=>this.list=response
  )
  // this.contactobj.title=this.titleForm.value.title;
  // this.contactobj.content=this.titleForm.value.content;
  // this.contactservice.postcontact(this.contactobj).subscribe((res)=>{
  //   console.log(res);
    
  // })
}
 onClearPost(id:number){
  
   this.contactService.clearPost(id);
 }
 }
