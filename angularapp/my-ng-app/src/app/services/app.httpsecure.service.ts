import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Department} from '../models/app.dept.model';
import {Observable} from 'rxjs';
import { LoginUser, RegisterUser, ResponseData } from '../models/app.secuity.models';
@Injectable({
  providedIn:'root'
})
export class DepartmentHttpSecureService {
  private url:string;
  // THe HttpCLient class used for Http calls
  // i.e. Get/Post/Put/Delete
  // THis is resolved using HttpClientModule injected
  // in imports[] array of @NgModule
  constructor(private http:HttpClient){
    this.url = 'https://localhost:5001/api/Department';
  }

  registerNewUser(user:RegisterUser):Observable<ResponseData> {
    let response:Observable<ResponseData>;
    response = this.http.post<ResponseData>("https://localhost:5001/api/Auth/Register", user, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    return response;
  }

  loginUser(user:LoginUser):Observable<ResponseData> {
    let response:Observable<ResponseData>;
    response = this.http.post<ResponseData>("https://localhost:5001/api/Auth/Login", user, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    return response;
  }



  // Get all Departments
  getDepartments(token:string):Observable<Department[]>{
    let response:Observable<Department[]>;
    // pass the Bearer token in Request Header
    response = this.http.get<Department[]>(this.url, {
      headers:{
        "AUTHORIZATION": `Bearer ${token}`
      }
    });
    return response;
  }
// Get a Department based on id
  getDepartment(id:number):Observable<Department>{
    let response:Observable<Department>;
    response = this.http.get<Department>(`${this.url}/${id}`);
    return response;
  }

  postDepartment(dept:Department,token:string):Observable<Department>{

    let response:Observable<Department>;
    // Parameter 1: The REST API URL
    // Parameter 2: The Body (department object)
    // Parameter 3: The MIME TYpe
    response = this.http.post<Department>(this.url, dept,{
      headers: {
        'Content-Type':'application/json',
        "AUTHORIZATION": `Bearer ${token}`
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
