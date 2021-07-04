import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl : string = 'http://localhost:9191/student';
  constructor(private http: HttpClient) { }

  getAllStudents():Observable<Student[]>{
    return this.http.get<Student[]>(`${this.baseUrl}/all`);
  }
}
