import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { IUser } from '../model/user.model'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
 private usersCollection: AngularFirestoreCollection<IUser>

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore
  ) { 
    this.usersCollection = db.collection('users');
    auth.user.subscribe(console.log)
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
}
