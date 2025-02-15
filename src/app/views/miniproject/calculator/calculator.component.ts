import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-calculator',
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  // result1: number = 0
  // result2: number = 0
  result1: string = ''
  result2: string = ''
  numpad: Array<string> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  str: string = ''
  str2: string = ''

  sign: string = ''
  btn(nums: string) {

    if (this.sign) {
      this.str2 += nums
      this.result2 = this.str2
      this.result2 = this.result2.toLocaleString()
    } else {
      this.str += nums
      this.result1 = this.str
      this.result1 = this.result1.toLocaleString()
    }

  }

  find_result() {
    var res = 0
    switch (this.sign) {
      case '+':
        res = parseFloat(this.result1) + parseFloat(this.result2)
        this.result1 = res.toLocaleString()
        this.clear2()
        break
      case '-':
        res = parseFloat(this.result1) - parseFloat(this.result2)
        this.result1 = res.toLocaleString()
        this.clear2()

        break
      case '*':
        res = parseFloat(this.result1) * parseFloat(this.result2)
        this.result1 = res.toLocaleString()
        this.clear2()

        break
      case '/':
        res = parseFloat(this.result1) / parseFloat(this.result2)
        this.result1 = res.toLocaleString()
        this.clear2()
        break
    }



  }

  clear() {
    this.str = ''
    this.str2 = ''
    this.sign = ''
    this.result1 = ''
    this.result2 = ''
  }
  clear2() {
    this.str = ''
    this.str2 = ''
    this.sign = ''
    this.result2 = ''
  }
}
