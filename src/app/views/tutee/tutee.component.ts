import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-tutee',
  templateUrl: './tutee.component.html',
  styleUrls: ['./tutee.component.scss']
})


export class TuteeComponent {
  tuteeForm: FormGroup;
  visibileClass="visible-class";
  invisibleClass="invisible-class";
  activeInsetButton = "active-inset-btn";
  deactiveInsetButton = "deactive-inset-btn";
  singleAnswer = "No";
  removeNumber = "remove-number-tick";
  addBackground = "color-progress-green"
  noRemove = "no-remove";
  activeClass="box-class-active";
  inActiveClass="box-class";
  selectedSurveyValue = 1
  invis = "invis";
  vis = "vis";
  level= "";
  levelForm: FormGroup;
  subjectForm: FormGroup;
  baseUrl = "https://tuition-382404.as.r.appspot.com"
  // levels: Array<any> = [
  //   {name:"Kindergarten", value:"kindergarten"},
  //   {name: "Lower Primary", value:"lower-primary"},
  //   {name: "Upper Primary", value:"upper-primary"},
  //   {name:"Lower Secondary", value:"lower-secondary"},
  //   {name:"Uppder Secondary", value:"upper-secondary"}
  // ]

  levels: Array<any> = [
    {name:"Primary 1", value:"primary-1"},
    {name: "Primary 2", value:"primary-2"},
    {name: "Primary 3", value:"primary-3"},
    {name:"Primary 4", value:"primary-4"},
    {name: "Primary 5", value:"primary-5"},
    {name: "Primary 6", value:"primary-6"},
    {name:"Secondary 1", value:"secondary-1"},
    {name:"Secondary 2", value:"secondary-2"},
    {name:"Secondary 3", value:"secondary-3"},
    {name:"Secondary 4", value:"secondary-4"},
    {name:"Secondary 5", value:"secondary-5"},
  ]

  subjects: Array<any> = [
    {name:"English", value:"English"},
    {name: "Chinese", value:"Chinese"},
    {name: "Malay", value:"Malay"},
    {name: "Tamil", value:"Tamil"},
    {name: "Math", value:"Math"},
    {name:"Science", value:"Science"},
    {name:"Geography", value:"Geography"},
    {name:"Social Studies", value:"Social Studies"},
    {name:"History", value:"History"},
    {name:"Literature", value:"Literature"},
  ]

  subjectUpper: Array<any> = [
    {name:"English", value:"English"},
    {name: "Chinese", value:"Chinese"},
    {name: "Malay", value:"Malay"},
    {name: "Tamil", value:"Tamil"},
    {name: "E Math", value:"E Math"},
    {name: "A Math", value:" A Math"},
    {name:"Chemistry", value:"Chemistry"},
    {name: "Biology", value:"Biology"},
    {name: "Physics", value:"Physics"},
    {name:"Geography", value:"Geography"},
    {name:"Social Studies", value:"Social Studies"},
    {name:"History", value:"History"},
    {name:"Literature", value:"Literature"},
  ]

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ){
    this.levelForm = fb.group({
      selectedLevel: new FormArray([])
    });
    this.subjectForm = fb.group({
      selectedSubject: new FormArray([])
    });
    this.tuteeForm = this.createSurveyFormGroup();
  }
  ngOnInit(){

  }

  onCheckboxChange(event: any) {
    const selected = (this.subjectForm.controls['selectedSubject'] as FormArray);
    if (event.target.checked) {
      selected.push(new FormControl(event.target.value));
    } else {
      const index = selected.controls
      .findIndex(x => x.value === event.target.value);
      selected.removeAt(index);
    }
  }

  onKey(event:any) {
    const inputValue = event.target.value;
  }

  onNext(){
    if(this.selectedSurveyValue < 15){
      this.selectedSurveyValue=this.selectedSurveyValue+1;
    }
  }

  onBack(){
    if(this.selectedSurveyValue > 1){
      this.selectedSurveyValue=this.selectedSurveyValue-1;
    }
    
  }

  

  handleChange(input:string){ 
    const subjects = ["Primary 1","Primary 2","Primary 3","Primary 4","Primary 5","Primary 6"]
    const upperSubjects = ["Primary 1","Primary 2","Primary 3","Primary 4","Primary 5","Primary 6"]
    if(subjects.includes(input)){
      this.level = "primary"
    } else {
      this.level = "secondary"
    }
    console.log(input);
  } 

//   onSingleAnswer(selectedInput:string){
//     this.singleAnswer=selectedInput;
//   }

  addSurvey(){
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    var formData = {
      role:"student",
      name:this.tuteeForm.get("name")?.value,
      email:this.tuteeForm.get("email")?.value,
      level:this.tuteeForm.get("level")?.value,
      subjects:Object.values(this.subjectForm.value.selectedSubject),
     }
     this.http.post<any>(`${this.baseUrl}/create_person/real/`, formData, {headers:new HttpHeaders(headerDict)}).subscribe(data => {
        console.log(data)
    })
    console.log(formData)
  }

  createSurveyFormGroup(): FormGroup {
    return this.fb.group({
      name:"",
      subject:[],
      level:"none",
      lang:"",
      email:["", [Validators.required]]
    });
  }

}