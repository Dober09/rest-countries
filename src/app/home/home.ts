import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Filter } from '../filter/filter';  

@Component({
  selector: 'app-home',
  imports: [Header,Filter],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
