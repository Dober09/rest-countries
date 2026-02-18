import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-detail',
  imports: [],
  templateUrl: './card-detail.html',
  styleUrl: './card-detail.css',
})
export class CardDetail {
  @ Input({required: true}) country: any   
  @Output() onBack= new EventEmitter<void>();

  back(){
    this.onBack.emit();
  }     

}
