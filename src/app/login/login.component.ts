import { Routes, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { EmpserviceService } from './../empservice.service';
import { HttpClient } from '@angular/common/http';
import { Login } from '../empdetails';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  public Employee = [];
  loginobj: Login = {
    Username: '',
    Password: ''
  };

  constructor(private formBuilder: FormBuilder, private router: Router, private empservice: EmpserviceService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
  });
  }

  // tslint:disable-next-line: typedef
  get f() { return this.loginForm.controls; }
  // tslint:disable-next-line: typedef
  onSubmit() {
    this.submitted = true;


    // stop here if form is invalid
    if (this.loginForm.valid) {
      let index = 0;
      this.empservice.getemp().subscribe((data) => {
        this.Employee = data;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < data.length; i++)
        {
          if (data[i].Username === this.loginobj.Username && data[i].Password === this.loginobj.Password){
            index = 1;
            break;
         }
         else{
          index = 0;
         }
        }
        if (index === 1)
        {
          console.log('hi');
          // tslint:disable-next-line: no-unused-expression
          this.router.navigate(['/', 'list']);
        }
        else{
          alert('Invalid Login');
        }
        });
    }
  else{
    return false;
  }


}
// tslint:disable-next-line: typedef
GotoRegistration(){
  this.router.navigate(['\regs']);
}
}
