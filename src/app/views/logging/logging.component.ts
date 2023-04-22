import { Component } from '@angular/core';
import { sha256 } from 'js-sha256';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.scss']
})
export class LoggingComponent {
  constructor(
    private http: HttpClient
  ){
  }
encryptedPass:string | undefined
baseUrl = "https://tuition-1-382517.as.r.appspot.com"
  Login(password:string, email:string){
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
    this.encryptedPass = sha256.update(password).hex();
    this.http.post<any>(`${this.baseUrl}/login/`, {email:email, password:this.encryptedPass}, {headers:new HttpHeaders(headerDict)}).subscribe(data => {
      console.log(data)
      localStorage.setItem('admin', data.isAdmin)
      window.location.href='/'
    })
  }
}
