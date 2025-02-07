import { CommonModule, NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ButtonDirective, TableModule } from '@coreui/angular';
@Component({
  selector: 'app-task-history',
  imports: [NgIf,NgFor,CommonModule,ButtonDirective, TableModule,HttpClientModule],
  templateUrl: './task-history.component.html',
  styleUrl: './task-history.component.scss',
  standalone:true
})
export class TaskHistoryComponent implements OnInit {
  history_data: any = [1,2]


  ngOnInit(): void {
    this.get_history()
  }

  constructor(
    private http : HttpClient,
    private nav : Router
  ) { }

  tableState:Boolean = true;

  get_history(){

    this.http.get('http://127.0.0.1:8000/get.task/success').subscribe((res:any) =>{

      this.history_data = res.data
console.log(res);

      if (!res ){
        return this.tableState = false;
      }
      else{
        return this.tableState = true;
      }

      
      
    })
  }

  nav_to(){
this.nav.navigateByUrl('miniproject/to-do-list')
  }
}
