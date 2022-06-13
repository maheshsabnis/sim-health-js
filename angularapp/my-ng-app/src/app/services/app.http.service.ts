import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Department} from './../models/app.dept.model';
import {Observable} from 'rxjs';
@Injectable({
  providedIn:'root'
})
export class DepartmentHttpService {
  private url:string;
  // THe HttpCLient class used for Http calls
  // i.e. Get/Post/Put/Delete
  // THis is resolved using HttpClientModule injected
  // in imports[] array of @NgModule
  constructor(private http:HttpClient){
    this.url = 'https://localhost:5001/api/Department';
  }

  // Get all Departments
  getDepartments():Observable<Department[]>{
    let response:Observable<Department[]>;
    response = this.http.get<Department[]>(this.url);
    return response;
  }
// Get a Department based on id
  getDepartment(id:number):Observable<Department>{
    let response:Observable<Department>;
    response = this.http.get<Department>(`${this.url}/${id}`);
    return response;
  }

  postDepartment(dept:Department):Observable<Department>{

    let response:Observable<Department>;
    // Parameter 1: The REST API URL
    // Parameter 2: The Body (department object)
    // Parameter 3: The MIME TYpe
    response = this.http.post<Department>(this.url, dept,{
      headers: {
        'Content-Type':'application/json'
      }
    })
    return response;
  }

  putDepartment(id:number,dept:Department):Observable<Department>{

    let response:Observable<Department>;
    // Parameter 1: The REST API URL
    // Parameter 2: The Body (department object)
    // Parameter 3: The MIME TYpe
    response = this.http.put<Department>(`${this.url}/${id}`, dept,{
      headers: {
        'Content-Type':'application/json'
      }
    })
    return response;
  }

  deleteDepartment(id:number):Observable<Department> {
    let response:Observable<Department>;
    response = this.http.delete<Department>(`${this.url}/${id}`);
    return response;
  }
}
