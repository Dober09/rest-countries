import { Component, inject,Output,EventEmitter  } from '@angular/core';
import { FormsModule } from '@angular/forms';
   

@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  // searchTerm: string = ''; 
  
  @Output() searchTermChange = new EventEmitter<string>(); 
  @Output() regionChange = new EventEmitter<string>();     
  

  onSearchChange(searchValue: string): void {
    // this.dataService.filterByName(searchValue);
    console.log('Search term changed:', searchValue);
  
    this.searchTermChange.emit(searchValue); // Emit the search term to the parent component

  }

  onRegionChange(regionValue: string): void {
    console.log('Region changed:', regionValue);
    this.regionChange.emit(regionValue); // Emit the region value to the parent component
  }

}
