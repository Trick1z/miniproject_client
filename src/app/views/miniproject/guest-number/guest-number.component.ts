import { CommonModule, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonDirective, FormModule } from '@coreui/angular';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-guest-number',
  imports: [CommonModule, NgIf, FormsModule, FormModule, ButtonDirective],
  // NgTemplateOutlet
  templateUrl: './guest-number.component.html',
  styleUrl: './guest-number.component.scss',
  standalone: true,
})
export class GuestNumberComponent implements OnInit {
  ngOnInit(): void {
    this.number = this.getRandomInt(1, 100);
  }
  run = false;

  min_number: number = 1;
  max_number: number = 100;
  number = 0;
  winner = false;
  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  player: number = 0;
  ai: number = 0;
  winner_text: string = '';
  game_start() {
    this.ai = this.getRandomInt(this.min_number + 1, this.max_number - 1);


    if (this.player == this.number) {
      this.winner_text = 'Player Win!';
      return (this.winner = true);
    } else if (this.ai == this.number) {
      this.winner_text = 'ai Win!';
      return (this.winner = true);
    } else {
      this.player = 0;
      this.set_min_max();
      return;
    }
  }

  set_min_max() {
    if (!this.winner) {
      if (this.player > this.min_number && this.player <= this.number) {
        if (this.ai > this.player && this.ai <= this.number) {
          this.min_number = this.ai;
          return
        } else {
          this.min_number = this.player;
          return

        }
      } else if (this.player < this.max_number && this.player >= this.number) {
        // this.max_number = this.player;

        if (this.ai < this.player && this.player >= this.number) {
          this.max_number = this.ai;
          return

        } else {
          this.max_number = this.player;
          return

        }

      }

      // this.ai = this.getRandomInt(this.min_number + 1, this.max_number - 1);

      if (this.ai > this.min_number && this.ai <= this.number) {
        if (this.player > this.ai && this.player <= this.number) {
          this.min_number = this.player;

        } else {
          this.min_number = this.ai;


        }
      } else if (this.ai < this.max_number && this.ai >= this.number) {
        // this.max_number = this.ai;

        if (this.player < this.ai && this.player >= this.number) {
          this.max_number = this.player;

        } else {
          this.max_number = this.ai;

        }
      }
    }

  }
  run_btn = true;
  run_game() {
    this.run = true;
    this.run_btn = false;
  }

  reset() {
    return window.location.reload();
  }
}
