import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  isDarkMode = true;
  @Output() darkModeChange = new EventEmitter<boolean>();


  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.darkModeChange.emit(this.isDarkMode); // Emit the new dark mode state to the parent component
  }

}
