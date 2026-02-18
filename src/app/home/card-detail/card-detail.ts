import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-detail',
  imports: [],
  templateUrl: './card-detail.html',
  styleUrl: './card-detail.css',
})
export class CardDetail {
  @Input() isDarkMode: boolean = true; // Input property to receive dark mode
  @ Input({required: true}) country: any   
  @Output() onBack= new EventEmitter<void>();

  back(){
    this.onBack.emit();
  }     

}
