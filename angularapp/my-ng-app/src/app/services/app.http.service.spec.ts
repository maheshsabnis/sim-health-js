//TestBed: Initialize an environment for Testing Angular Object Model
// getTestBed: Uses to extract registered objects in the Testing Environment
import { TestBed, getTestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { DepartmentHttpService } from './app.http.service';
import { Department } from './../models/app.dept.model';

// Lets have  the Test Data for testing get calls

const testData = [
  { DeptNo: 20, DeptName: 'HR', Location: 'Mumbai', Capacity: 200 },
  { DeptNo: 40, DeptName: 'AD', Location: 'Pune', Capacity: 25 },
  { DeptNo: 50, DeptName: 'TP', Location: 'Pune', Capacity: 25 },
  { DeptNo: 60, DeptName: 'SU', Location: 'Pune', Capacity: 35 },
  { DeptNo: 70, DeptName: 'MT', Location: 'Mumbai', Capacity: 55 },
  { DeptNo: 80, DeptName: 'WH', Location: 'Mumbai', Capacity: 100 },
  { DeptNo: 90, DeptName: 'Stores', Location: 'Pune', Capacity: 800 },
  { DeptNo: 21, DeptName: 'Dept_21', Location: 'Mumbai', Capacity: 15 },
  { DeptNo: 10, DeptName: 'IT', Location: 'Kolhapur', Capacity: 85 },
  { DeptNo: 30, DeptName: 'SL', Location: 'Thane', Capacity: 95 }
];

// create a test suit

describe('Testing Angular Service Which Makes HTTP Calls',()=>{
   let injector: TestBed;
   let httpService:DepartmentHttpService;
   let httpMock:HttpTestingController;



   // Lets initialize the testing Environment
   // 1. Configure Testing Module
   // 2. Receive the Injectable objects those are registered in Dependency Container on Testing Module
   // 3. Define a Mock Object so that HTTP Calls can be mocked
   beforeEach(() => {
     // 1.
      TestBed.configureTestingModule({
        imports:[HttpClientTestingModule],
        providers:[DepartmentHttpService] // the DI Container
      });
      // arrange
      // 2. Receive an instance of the DepartmentHttpService from the DI Container
      // so that it ca be used for testing
      httpService  = TestBed.inject(DepartmentHttpService);
      // 3. Arrange for Mock,so that HTTP calls with be tested w/o hitting
      // the actual REST APIs
      httpMock = TestBed.inject(HttpTestingController);
   });


   // 4. Make sure that after each test case is done with its operations
   // verify the Mock

   afterEach(()=>{
     httpMock.verify();
   });

   // the test case GET Call
   it('should return an array of Department  for get call',()=>{
    // acting on the async method all to REST API using the service
      httpService.getDepartments().subscribe({
        next:(response:Department[])=>{
            console.log(`response received ${JSON.stringify(response)}`);
           expect(response).toEqual(testData);
        }
      });

      // Mock the communication (expectOne: Make a exactly one call and expect the result)
      const request = httpMock.expectOne('https://localhost:5001/api/Department');
      // setting the Http Method
      expect(request.request.method).toBe('GET');
      // Make sure that after the mock does  its job flus the data stored in memory
      request.flush(testData);
   });

    // the test case POST Call
    it('should return  a Department object for POST call',()=>{
      let dept = new Department(130, 'Dept_130', 23444 ,'Mumbai');
      httpService.postDepartment(dept).subscribe({
        next:(response:Department)=>{
            console.log(`response received ${response}`);
                        // actual to mEqual expectation
           expect(response).toEqual(dept);
        }
      });

      // Mock the communication
      const request = httpMock.expectOne('https://localhost:5001/api/Department');
      // setting the Http Method
      expect(request.request.method).toBe('POST');
      // Make sure that after the mock does  its job flus the data stored in memory
      request.flush(dept);
   });

});
