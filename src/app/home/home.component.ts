import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  students: any[];
  total:number;
  status:string='';
  
  constructor(private httpClient:HttpClient) {}

  ngOnInit ():void {

    //Get Students Data from data.json
    this.httpClient.get('https://raw.githubusercontent.com/huilimars/username/master/data.json').subscribe(
      (data:any[]) => {
        this.students = data;
        if(this.students.length){
          for(let student of this.students){
            let sum=0;
            for(let j in student.marks){
              sum += Number(student.marks[j]);
              //Validate marks
              if(!student.status){
                if(student.marks[j] < 20)
                  student.status='fail'
                else if(student.marks[j] >= 50)
                  student.status='topper';
              }
            }
            student.total = sum;
            student.status = (!student.status)?'pass':(student.status);
          }
        }
      }
    );

  }


}
