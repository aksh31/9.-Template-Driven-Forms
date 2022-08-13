import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Forms';
  ans :string = '';
  genders = ["Female", "Male", "Others"]
  userArray:any = [];
  @ViewChild('form') signUpForm!:NgForm;



  // onSubmit(form:NgForm){
  //   console.log(form);
  //   console.log(form.value); // it consoles the object with consisting key and value, passed by using inputs
  // }

  onSubmit(){
    console.log(this.signUpForm);
    console.log(this.signUpForm.value);
    this.userArray.push(this.signUpForm.value);
    this.signUpForm.reset();
  }

  onSetValue(){
    this.signUpForm.setValue({
      userDetails : {
        username : 'Akshay',
        email : ''
      },
      gender : 'Male',
      secret : 'player',
      answer : 'MSD'
    })
  }

  onSuggestName(){
    this.signUpForm.form.patchValue({
      userDetails : {
        username : 'aksh31'
      }
    })
  }
}
