export class Employee {
  [x:string]:any;
  constructor(
    public EmpNo:number,
    public EmpName:string,
    public DeptName:string,
    public Designation:string,
    public Salary:number
  ){}
}
