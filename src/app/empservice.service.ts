import { Empdetails } from './empdetails';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmpserviceService {
  private url = '../assets/data/MOCK-DATA.json';
  constructor(private http: HttpClient) {}
  getemp(): Observable<Empdetails[]> {
    return this.http.get<Empdetails[]>(this.url);
  }
}