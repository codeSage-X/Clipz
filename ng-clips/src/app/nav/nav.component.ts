import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ModalService } from '../services/modal.service';
// import { AuthService } from '../services/auth.service';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { Router } from '@angular/router'
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // isAuthenticated = false;

  constructor(private modal: ModalService, 
    public auth: AuthService, 
    // AngularFireAuth,
    // private router: Router
    ) {
    // this.auth.isAuthenticated$.subscribe(status => {
    //    this.isAuthenticated = status
    // })
   }

  ngOnInit(): void {
  }

   openModal($event: Event){
    $event.preventDefault

    this.modal.toggleModal('auth')
   }

   
}
