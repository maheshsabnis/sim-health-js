export class Dept {
  constructor(
    public DeptNo:number,
    public DeptName:string,
    public Location:string
  ){}
}
export const Depts:Array<Dept> = new Array<Dept>();
Depts.push(new Dept(1,'D1','L1'));
Depts.push(new Dept(2,'D2', 'L2'));
Depts.push(new Dept(3,'D2','L1'));
Depts.push(new Dept(4,'D1', 'L2'));
export class Emp {
  constructor(
    public EmpNo:number,
    public EmpName:string,
    public DeptNo:number
  ){}
}
export const Emps:Array<Emp> = new Array<Emp>();
Emps.push(new Emp(11, 'A', 1));
Emps.push(new Emp(12, 'B', 2));
Emps.push(new Emp(13, 'C', 3));
Emps.push(new Emp(14, 'D', 4));
Emps.push(new Emp(11, 'E', 1));
Emps.push(new Emp(16, 'F', 2));
Emps.push(new Emp(17, 'G', 3));
Emps.push(new Emp(18, 'H', 4));
Emps.push(new Emp(19, 'I', 1));
Emps.push(new Emp(20, 'J', 2));
Emps.push(new Emp(21, 'K', 3));
Emps.push(new Emp(22, 'L', 4));
