import { ValidationErrors, AbstractControl, ValidatorFn } from "@angular/forms"
export class RegisterValidators {
//    test = 5

    static match(controlName: string, matchingControlName: string) : ValidatorFn {
    return (group: AbstractControl) : ValidationErrors | null  => {

        const control = group.get(controlName)
        const matchingControl = group.get(matchingControlName)

        if(!control || !matchingControl) {
            console.error('form controls cannot be found in the form group')
            return { controlNotFound: false}
        }

        const error = control.value === matchingControl.value ?
         null : 
         { noMatch: true }

         matchingControl.setErrors(error)

         return error 

    }
  
      
    }
}

// new RegisterValidators.match() <~ Without static 
//  RegisterValidators.match() <~ with static


