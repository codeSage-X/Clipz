import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Injectable } from '@angular/core';
// by default angular cannot inject  a service into a class
// you will have to declare an injectable inside the class component
import { AsyncValidator, AbstractControl, ValidationErrors } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
 export class EmailTaken  implements AsyncValidator{
  constructor(private auth: AngularFireAuth){
  
  }
  validate = (control: AbstractControl) : Promise<ValidationErrors | null> => {
         return this.auth.fetchSignInMethodsForEmail(control.value).then(
          response => response.length ? { emailTaken: true } : null
      );
  }
}
