import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { IUser } from 'src/app/model/user.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor (
    // private auth: AngularFireAuth,
    // private db: AngularFirestore,
    private auth: AuthService
    ) {}

  inSubmission = false; 

  name = new FormControl('',[Validators.required, Validators.minLength(3)])
  email = new FormControl('',[Validators.required,Validators.email])
  age = new FormControl<number | null>(null,[Validators.required,Validators.min(18),Validators.max(120)])
  password = new FormControl('',[Validators.required, Validators.pattern(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)])
  confirm_password = new FormControl('',[
    Validators.required
  ])
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(13),
    Validators.maxLength(13)
  ])  
  
  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber: this.phoneNumber
  })
  showAlert = false;
  alertMsg = 'please wait your account is being created';
  alertColor = 'orange';
 
  async register(){
   this.showAlert = true;
   this.alertMsg = 'please wait your account is being created';
   this.alertColor = 'blue';
   this.inSubmission = true
  
  //  const { email, password } = this.registerForm.value
   
   //Error handling & Auth
   try {
    await this.auth.createUser(this.registerForm.value as IUser)
  //  const userCred = await this.auth.createUserWithEmailAndPassword(
  //    email as string, password as string
  //  )
  //  await this.db.collection('users').add({
  //   name: this.name.value,
  //   email: this.email.value,
  //   age: this.age.value,
  //   phoneNumber: this.phoneNumber.value
  //  })
   } catch(e) {
    console.error(e)

    this.alertMsg = 'An unexpected error occured. please try again later';
    this.alertColor = 'red';
    this.inSubmission = false
    return 
   }

   this.alertMsg = 'success! Your account has been created.';
   this.alertColor = 'green';
  
  }

}
