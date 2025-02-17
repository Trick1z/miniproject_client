import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { FormModule, TableColorDirective, TableDirective, TableModule, UtilitiesModule } from '@coreui/angular'; // CoreUI Form Module
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ButtonDirective } from '@coreui/angular';

@Component({
  selector: 'app-exchange',
  imports: [NgFor, NgIf, FormsModule, FormModule, CommonModule, ButtonDirective,
    TableModule,
    UtilitiesModule, TableColorDirective, TableDirective
  ],
  templateUrl: './exchange.component.html',
  styleUrl: './exchange.component.scss',
  standalone: true
})
export class ExchangeComponent {

  inp: number = 0
  // THB

  colors: Array<any> = ['primary', 'secondary', 'success', 'danger', 'info']
  rate: any = [
    { main:'United State',name: 'USD', value: 33.49 },
    { main:'Europe',name: 'EUR', value: 34.80 },
    { main:'Japan',name: 'JPY', value: 0.21 },
    { main:'Honkong',name: 'HKD', value: 4.28 },
    { main:'Korean',name: 'KRW', value: 0.019 }]
  // showrate :boolean = false;

  // USD: 33.49,
  //   EUR: 34.80,
  //   JPY: 0.21,
  //   HKD: 4.28,
  //   KRW: 0.019
  showrate: boolean = false;


  calculate(rate: number) {
    var cal = this.inp * rate
    var res = cal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    return res

  }

  submit() {
    this.showrate = true
  }
}
