import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { delay, map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { IUser } from '../model/user.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
 private usersCollection: AngularFirestoreCollection<IUser>
 public isAuthenticated$!: Observable<boolean>;
 public isAuthenticatedWithDelay$: Observable<boolean> | undefined

  constructor(
    private router: Router,
    private auth: AngularFireAuth,
    private db: AngularFirestore,
   
  ) { 
    this.usersCollection = db.collection('users');
    this.isAuthenticated$ = auth.user.pipe(
      map(user => !!user)
    )
    auth.user.subscribe(console.log)
    this.isAuthenticatedWithDelay$ = this.isAuthenticated$.pipe(
      delay(1000)
    )
  }

  public async createUser(userData: IUser) {
  //  if(!userData.password) {
  //   throw new Error("password not provided!");
  //  }

  // register user
    const userCred = await this.auth.createUserWithEmailAndPassword(
      userData.email as string, userData.password as string
    )

    if(!userCred.user) {
      throw new Error("User can't be found")
    }

    //insert to the DB
    await this.usersCollection.doc(userCred.user.uid).set({
     name: userData.name,
     email: userData.email,
     age: userData.age,
     phoneNumber: userData.phoneNumber
    })

    userCred.user.updateProfile({
      displayName: userData.name
    })
  }

   public async logout($event?: Event){
    if($event){
      $event.preventDefault
    }  
    await this.auth.signOut()
    await this.router.navigateByUrl('/')
}
}
