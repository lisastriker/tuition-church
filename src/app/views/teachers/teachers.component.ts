import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent {
  baseUrl = "https://tuition-1-382517.as.r.appspot.com"
  completeList:Array<any> | undefined
  teacherList:Array<any> | undefined
  constructor(
    private http: HttpClient
  ){}

  ngOnInit(){
    this.viewListOfTeachers()
  }

  viewListOfTeachers(){
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
    var id = localStorage.getItem("person_id")
    console.log("Hello")
    this.teacherList = []
    this.http.get<any>(`${this.baseUrl}/retrieve_all_people`, {headers:new HttpHeaders(headerDict)}).subscribe(data => {
     
      this.teacherList = data.filter((element:any) => element.role == "tutor")
      console.log("this is teacher list " + this.teacherList)
    })
  }


}
