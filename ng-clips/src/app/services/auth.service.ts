import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { delay, map, filter, Observable, switchMap, of } from 'rxjs';
import { Router } from '@angular/router';
import { IUser } from '../model/user.model';
import { ActivatedRoute, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
 private usersCollection: AngularFirestoreCollection<IUser>
 public isAuthenticated$!: Observable<boolean>;
 public isAuthenticatedWithDelay$: Observable<boolean> | undefined
 public redirect = false;
  constructor(
    private router: Router,
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    private ActivatedRoute: ActivatedRoute
   
  ) { 
    this.usersCollection = db.collection('users');
    this.isAuthenticated$ = auth.user.pipe(
      map(user => !!user)
    )
    auth.user.subscribe(console.log)
    this.isAuthenticatedWithDelay$ = this.isAuthenticated$.pipe(
      delay(1000)
    )
    this.ActivatedRoute.data.subscribe(console.log)
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => this.ActivatedRoute.firstChild),
      switchMap(route => route?.data ?? of ({authOnly: false}))
    ).subscribe((data) => {
      this.redirect = data['authOnly'] ?? false;
    })
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
    await this.auth.signOut();

    if (this.redirect) {
    await this.router.navigateByUrl('/')
  }
}
}
