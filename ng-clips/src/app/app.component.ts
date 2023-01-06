import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
// import { ModalService } from './services/modal.service';
// import { AuthModalComponent } from './user/auth-modal/auth-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clips';
  // showModal = true;

  // constructor(public modal: ModalService){}

  // ngOnInit(){
  //   setInterval(
  //     () => { 
  //       this.showModal = !this.showModal
  //       console.log(this.modal.modals)
  //     },
  //     1000
  //   )
  // }

}
