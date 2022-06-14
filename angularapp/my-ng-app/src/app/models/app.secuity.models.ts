export class RegisterUser{
  constructor(public UserName:string, public Password:string, public ConfirmPassword:string){}
}


export class LoginUser{
  constructor(public UserName:string, public Password:string){}
}

export class ResponseData {
  constructor(public Message:string){}
}
