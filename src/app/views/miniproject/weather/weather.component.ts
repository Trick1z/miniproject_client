import { CommonModule, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonDirective, ButtonModule, SpinnerModule } from '@coreui/angular';

@Component({
  selector: 'app-weather',
  imports: [HttpClientModule, CommonModule,ButtonDirective,SpinnerModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit {
  private updateID: any

  ngOnInit(): void {
    this.get_api()
    this.updateID = setInterval(() => {
      this.get_api();
    }, 300000)
  }
  constructor(
    private http: HttpClient
  ) {

  }

  c: number = 273.15

  weather_data: any = {}
  weather_info: any = {}
  get_api() {
    this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=69c2fe1943e18877885f70b1a97c0df3').subscribe((res: any) => {
      // console.log(res);
      this.weather_data = res
      this.weather_info = res.weather[0]


    })
  }

  k_to_c(number: number) {

    var temp = number - this.c
    var res = temp.toFixed(1)
    return res

  }
  update(){
    this.get_api()
  }
}
