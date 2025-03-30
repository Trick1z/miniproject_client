import { CommonModule, NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ButtonDirective, TableModule } from '@coreui/angular';
import { BaseApi } from '../../services/BaseAPi';
@Component({
  selector: 'app-task-history',
  imports: [NgIf, NgFor, CommonModule, ButtonDirective, TableModule, HttpClientModule],
  templateUrl: './task-history.component.html',
  styleUrl: './task-history.component.scss',
  standalone: true
})
export class TaskHistoryComponent implements OnInit {
  history_data: any = []


  ngOnInit(): void {
    this.get_history()
  }

  constructor(
    private http: HttpClient,
    private nav: Router,
    private base : BaseApi
  ) { }

  tableState: Boolean = true;

  get_history() {

    this.http.get(`${this.base.Api()}get.succ_todolist`).subscribe((res: any) => {

      this.history_data = res.data


      if (!res) {
        return this.tableState = false;
      }
      else {
        return this.tableState = true;
      }



    })
  }

  formatDatetime(datetimeStr: string): string {
    const date = new Date(datetimeStr);

    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'short' }); // Get month abbreviation
    const day = String(date.getDate()).padStart(2, '0'); // Add leading zero if day is single digit
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    // Return formatted string
    return `${day} ${month} ${year} , ${hours}:${minutes}`;
}

  nav_to() {
    this.nav.navigateByUrl('miniproject/to-do-list')
  }
}
