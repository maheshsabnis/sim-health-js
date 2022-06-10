import { AbstractControl } from "@angular/forms";

export class CustomValidator {
  static checkEven(ctrl:AbstractControl):any {
     let val:number = parseInt(ctrl.value);
     if(val % 2 === 0){
        return null; // valid
     }else {
      // 'even' key will be used on UI to show validation Error message
      return {even:false}; // Invalid
     }
  }
}
