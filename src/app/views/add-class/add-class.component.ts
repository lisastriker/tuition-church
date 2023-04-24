import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent {
  baseUrl = "https://tuition-1-382517.as.r.appspot.com"
  completeList:Array<any> | undefined
  teacherList:Array<any> | undefined
  addClassForm:FormGroup
  teacherName = ""
  timeslot = ""
  subject = ""
  level=""
  stats:Array<any> | undefined
  tutors :Array<any> | undefined
  alltimeslots = [
    "monday afternoon", "monday evening", "tuesday afternoon", "tuesday evening", 
    "wednesday afternoon", "wednesday evening", "thursday afternoon", "thursday evening",
    "friday afternoon", "friday evening", "saturday morning", "saturday afternoon", "saturday evening",
    "sunday morning", "sunday afternoon", "sunday evening"
  ]
  allSubjects = [
    "English", "Chinese", "Malay", "Tamil", "Math", "Science", "E Math", "A Math", "Chemistry", "Biology", "Physics","Geography", "Social Studies", "History", "Literature"
  ] 

  allLevels = [
    "Primary 1",
    "Primary 2",
    "Primary 3",
    "Primary 4",
    "Primary 5",
    "Primary 6",    
    "Secondary 1", 
    "Secondary 2", 
    "Secondary 3", 
    "Secondary 4", 
    "Secondary 5", 
  ]
  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ){
    this.addClassForm = this.createSurveyFormGroup();

  }

  ngOnInit(){
    this.viewListOfTeachers()
    this.retrieveStats()
  }
  viewListOfTeachers(){
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    this.teacherList = []
    this.http.get<any>(`${this.baseUrl}/retrieve_all_people`, {headers:new HttpHeaders(headerDict)}).subscribe(data => {
     
      this.teacherList = data.filter((element:any) => element.role == "tutor")
      console.log("this is teacher list " + this.teacherList)
    })
  }

  createSurveyFormGroup(): FormGroup {
    return this.fb.group({
      name:"",
      subjects:"",
      timeslots:"",
      levels:""
    });
  }

  retrieveStats(){
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
    this.tutors = []
    this.http.get<any>(`${this.baseUrl}/retrieve_stats/`, {headers:new HttpHeaders(headerDict)}).subscribe(data => {
      this.stats=data.class_list
      this.tutors = data.class_list.tutors
   })
  }
  onSubmit(){
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
    var formData = {
      timeslot:this.timeslot,      
      subject:this.subject,
      level:this.level,
      name:this.teacherName
     }
     this.http.post<any>(`${this.baseUrl}/create_tuition_class/`, formData, {headers:new HttpHeaders(headerDict)}).subscribe(data => {
      console.log("tuition class" + data)
   })
  }

  onSelected(value:string){
    this.teacherName =  value
    console.log(this.teacherName)
  }

  onSelected1(value:string){
    this.timeslot =  value
    console.log(this.teacherName)
  }

  onSelected2(value:string){
    this.subject =  value
    console.log(this.subject)
  }

  onSelected3(value:string){
    this.level =  value
    console.log(this.subject)
 }
}
