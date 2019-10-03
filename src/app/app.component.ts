import { Component } from '@angular/core';
import { Minimatch } from 'minimatch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Localizador-front';
  max = 0;
  min = 0;
  maxC = 0;
  minC = 0;
  control = 0;
  lat = 6.2486;
  lng = -75.5742;
  constructor(){
    this.myFunction();
  }

  myFunction() {
    setInterval(()=>{
    console.log("cambio");
    this.max = 3;
    this.min = 0;
    this.control = this.lat + Math.random() * (this.maxC - this.minC) + this.minC;
    this.max = 0.0003;
    this.min = 0.0001;
    if(this.control==0){
      this.lat = this.lat + Math.random() * (this.max - this.min) + this.min;
      this.lng = this.lng + Math.random() * (this.max - this.min) + this.min;
    } else if(this.control==1){
      this.lat = this.lat + Math.random() * (this.max - this.min) + this.min;
      this.lng = this.lng - Math.random() * (this.max - this.min) + this.min;
    } else if(this.control==2){
      this.lat = this.lat - Math.random() * (this.max - this.min) + this.min;
      this.lng = this.lng + Math.random() * (this.max - this.min) + this.min;
    } else{
      this.lat = this.lat - Math.random() * (this.max - this.min) + this.min;
      this.lng = this.lng - Math.random() * (this.max - this.min) + this.min;
    } 
    }, 3000);
  }

}
