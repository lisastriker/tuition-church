import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent {
  baseUrl = "https://tuition-1-382517.as.r.appspot.com"
  tuitionClasses:Array<any> | undefined;
  matchesMonday:Array<any> | undefined;
  matchesTuesday:Array<any> | undefined;
  matchesWednesday:Array<any> | undefined;
  matchesThursday:Array<any> | undefined;
  matchesFriday:Array<any> | undefined;
  matchesSaturday:Array<any> | undefined;
  matchesSunday:Array<any> | undefined;
  modalRef: MdbModalRef<ModalComponent> | null = null;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private modalService: MdbModalService
  ){

  }
  ngOnInit(){
    this.checkClasses()
  }

  checkClasses(){
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
    this.tuitionClasses=[]
    this.matchesMonday = []
    this.http.post<any>(`${this.baseUrl}/retrieve_class/`, {"timeslot": ""}, {headers:new HttpHeaders(headerDict)}).subscribe(data => {
      this.tuitionClasses = data
      this.matchesMonday = data.filter((s:any) => s.timeslot.includes('monday'))
      this.matchesTuesday = data.filter((s:any) => s.timeslot.includes('tuesday'))
      this.matchesWednesday = data.filter((s:any) => s.timeslot.includes('wednesday'))
      this.matchesThursday = data.filter((s:any) => s.timeslot.includes('thursday'))
      this.matchesFriday = data.filter((s:any) => s.timeslot.includes('friday'))
      this.matchesSaturday = data.filter((s:any) => s.timeslot.includes('saturday'))
      this.matchesSunday = data.filter((s:any) => s.timeslot.includes('sunday'))
    })
  }

  openModal(matches:any){
    console.log("This is matches" + matches)
    this.modalRef = this.modalService.open(ModalComponent, {
      data: { title: matches.tutors },
    });
  }

}
