import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title="Tuition"
  adminStatus:string | null
  constructor(){
    this.adminStatus="false"
  }

  ngOnInit(){
    if(localStorage.getItem("admin")!== null){
      console.log("Not null")
    this.adminStatus = localStorage.getItem('admin')
    console.log(this.adminStatus)
  }
  }

  Logout(){
    console.log("logging out")
    localStorage.removeItem("admin")
    this.adminStatus = "false"
    window.location.href="/"
  }
}
