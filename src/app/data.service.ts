import { Injectable } from "@angular/core";
import {Countries} from "./data"

@Injectable({
    providedIn:'root'
})

export class DataService{

    private countries = Countries.slice(0,10)
    allCounries = this.countries


    // get allCounries(){
    //     return  this.countries.slice(0,5)
    // }


    findCountry(name:string){
        return  this.allCounries.find(place=> place.name == name)
    }


    filterByRegion(region:string){
        if(region == ''){
            this.allCounries = this.countries
            return
        }
        this.allCounries = this.countries.filter(place=> place.region == region)
    }

    filterByName(name:string){ 
      this.allCounries = this.countries.filter(place=> place.name.toLowerCase().includes(name.toLowerCase()))
    }

}