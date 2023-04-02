import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
  emailForm:FormGroup
  baseUrl = "https://tuition-382404.as.r.appspot.com"
  matchedEmail: Array<any>
  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ){
    this.emailForm = this.createEmailFormGroup();
    this.matchedEmail = []
  }

  createEmailFormGroup(): FormGroup {
    return this.fb.group({
      email:[""]
    });
  }

  onKey(event:any) {
    const inputValue = event.target.value;
  }


  onSubmit(){
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    var formData = {
      email:this.emailForm.get("email")?.value,
     }
     this.matchedEmail = [];
     this.http.post<any>(`${this.baseUrl}/retrieve_persons/`, formData, {headers:new HttpHeaders(headerDict)}).subscribe(data => {
        this.matchedEmail = data
    })
  }

}
