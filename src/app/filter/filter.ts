import { Component, inject,Output,EventEmitter, Input  } from '@angular/core';
import { FormsModule } from '@angular/forms';
   

@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  @Input() isDarkMode: boolean = true; // Input property to receive dark mode 
  
  @Output() searchTermChange = new EventEmitter<string>(); 
  @Output() regionChange = new EventEmitter<string>();     
  

  onSearchChange(searchValue: string): void {
    
    console.log('Search term changed:', searchValue);
  
    this.searchTermChange.emit(searchValue); // Emit the search term to the parent component

  }

  onRegionChange(regionValue: string): void {
    console.log('Region changed:', regionValue);
    this.regionChange.emit(regionValue); // Emit the region value to the parent component
  }

}
