import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input({required: true}) country: any   
  @Output() onClick= new EventEmitter<any>();


  click(){
    this.onClick.emit(this.country);
  }

}
