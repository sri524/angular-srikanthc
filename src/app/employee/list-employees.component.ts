import { EmpserviceService } from './../empservice.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css'],
})
export class ListEmployeesComponent implements OnInit {
  public Employee = [];
  // tslint:disable-next-line: variable-name
  constructor(private _empservice: EmpserviceService) {}

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this._empservice.getemp().subscribe((data) => {
      this.Employee = data;
    });
  }

}
