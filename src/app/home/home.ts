import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { Filter } from '../filter/filter';
import { Card } from './card/card';
import { CardDetail } from './card-detail/card-detail';
import {DataService} from '../data.service'


@Component({
  selector: 'app-home',
  imports: [Header,Filter,Card,CardDetail],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  private dataService = inject(DataService)
  isDarkMode=true
  
  showDetail = false;
  selectedCountry: any = null;

  get countries(){
    return this.dataService.allCounries
  }

  onCardClick(country: any ){ 
    // console.log(country);
    this.selectedCountry = country;
    this.showDetail = true;

  }

  onDarkModeChange(isDarkMode: boolean) {
    this.isDarkMode = isDarkMode;
  }

  onSearchChange(searchValue: string) {
  this.dataService.filterByName(searchValue);
  }


  onRegionChange(regionValue: string) {
    this.dataService.filterByRegion(regionValue); 
  }

  back(){
    this.showDetail = false
  }

}
