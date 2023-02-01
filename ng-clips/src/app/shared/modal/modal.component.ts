import { Component, Input, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
   @Input() modalID = ''

  constructor(public modal: ModalService, 
    public el: ElementRef) 
    { 
      console.log(el) 
   }

  ngOnInit(): void {
    // document.body.appendChild(this.el.nativeElement)
  }

  ngOnDestroy() {
    document.body.removeChild(this.el.nativeElement)
  }

  closeModal($event:MouseEvent){
    $event.preventDefault
    
    this.modal.toggleModal(this.modalID)
  }

}
