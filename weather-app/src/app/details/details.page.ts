import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from  '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage {

  city:any;
  lat:any;
  long:any;
  name:any;
  windspeed:any;
  direction:any;
  desc:any;
  main:any;
  icon:any;
  feels:any;
  pressure:any;
  humidity:any;
  weatherDetails:any; 

  constructor(public httpClient: HttpClient, private route:Router, private router: ActivatedRoute) { 
    this.loadData();

}


  loadData(){
    
    if (this.route.getCurrentNavigation()) {
      this.city = this.route.getCurrentNavigation().extras;
      console.log(this.city);
  }
    this.httpClient.get(`${API_URL}/weather?q=${this.city}&appid=${API_KEY}`).subscribe(results => {
      console.log(results);
      console.log(this.city);
      this.name = results['name'];
      this.lat=results['coord']['lat'];
      this.long=results['coord']['lon'];
      this.windspeed=results['wind']['speed'];
      this.direction=results['wind']['deg'];
      this.desc=results['weather'][0]['description'];
      this.main=results['weather'][0]['main'];
      this.feels=results['main']['feels_like'];
      this.pressure=results['main']['pressure'];
      this.humidity=results['main']['humidity'];
      this.weatherDetails = results['weather'][0];
      this.icon = `https://openweathermap.org/img/wn/${this.weatherDetails.icon}@4x.png`;
    })
  }
}
