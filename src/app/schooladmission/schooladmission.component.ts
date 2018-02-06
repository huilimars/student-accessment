import { Component, OnInit } from '@angular/core';
// Import the User model
import { Student } from './../Student';

@Component({
  selector: 'app-schooladmission',
  templateUrl: './schooladmission.component.html',
  styleUrls: ['./schooladmission.component.css']
})
export class SchoolAdmissionComponent implements OnInit {

  //Property for the user
  private student:Student;

  ngOnInit() {

    //Create a new student object
    this.student = new Student({firstname:"",lastname:"",class:"",yearofpassing:0,percentageofmarks:0});
  }

   onFormSubmit({ value, valid}: { value: Student, valid: boolean }) {
    	this.student = value;
    	console.log( this.student);
    	console.log("valid: " + valid);
  	}
}

