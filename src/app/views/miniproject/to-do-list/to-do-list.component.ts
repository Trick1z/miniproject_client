import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  ButtonDirective,
  CalloutComponent,
  CalloutModule,
  ColComponent,
  FormModule,
  RowComponent,
  TooltipDirective,
} from '@coreui/angular';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { BaseApi } from '../../services/BaseAPi';

@Component({
  selector: 'app-to-do-list',
  imports: [
    CalloutModule,
    CalloutComponent,
    NgIf,
    CommonModule,
    ButtonDirective,
    FormsModule,
    FormModule,
    HttpClientModule,
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss',
  standalone: true,
})
export class ToDoListComponent implements OnInit {
  warning: boolean = false;
  arr = [1, 2];
  ngOnInit(): void {
    this.get_all_task();
  }

  constructor(private http: HttpClient, private nav: Router,
    private base: BaseApi
  ) {}

  formData: any = {
    name: null,
    desc: null,
  };

  add_task() {}

  add_task_onsubmit() {
    if (!this.formData.name) {
      this.warning = true;

      return;
    } else {

// console.log(this.formData);

      this.http
        .post(`${this.base.Api()}post.todolist`, this.formData)
        .subscribe((res: any) => {
          this.formData = {};
          console.log(res);

          Swal.fire({
            title: 'Task Added!',
            icon: 'success',
            draggable: false,
          });
          this.warning = false;
          return this.get_all_task();
        });
    }
  }

  Task: any = [];
  get_all_task() {
    this.http.get(`${this.base.Api()}get.todolist`).subscribe((res: any) => {
      this.Task = res.data;
      // console.log(res);

    });

  }

  delete_btn(get_id: Number) {
    Swal.fire({
      title: 'Do you want to Delete this task',
      showCancelButton: true,
      confirmButtonText: 'Save',
    }).then((result) => {
      if (result.isConfirmed) {
        this.http
          .put(
            `${this.base.Api()}delete.todolist/${get_id}`, get_id
          )
          .subscribe((res: any) => {
            console.log(res);
            this.get_all_task();
          });

        return Swal.fire({
          title: 'Task Deleted!',
          icon: 'success',
          draggable: false,
        });
      } else {
        return;
      }
    });
  }

  success_btn(get_id: Number) {
    Swal.fire({
      title: 'Do you want to Delete this task',
      showCancelButton: true,
      confirmButtonText: 'Save',
    }).then((result) => {
      if (result.isConfirmed) {
        this.http
          .put(
            `${this.base.Api()}success.todolist/${get_id}`,
            get_id
          )
          .subscribe((res: any) => {
            console.log(res);
            this.get_all_task();
          });

        return Swal.fire({
          title: 'Task Deleted!',
          icon: 'success',
          draggable: false,
        });
      } else {
        return;
      }
    });
  }

  nav_to(path: string) {
    this.nav.navigateByUrl('miniproject/task-history');
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth', // Scroll smoothly
        block: 'start', // Align to the top of the viewport
      });
    }
  }

  topButtonState: boolean = true;
  edit_id = 0
  onEdit(item: any) {
    this.scrollToElement('editSection');
    this.edit_id = item.task_id,
    this.formData = {

      name: item.task_name,
      desc: item.task_desc,
    };

    this.topButtonState = false;
  }

  onEdit_save() {
    Swal.fire({
      title: 'Do you want to Save this task',
      showCancelButton: true,
      confirmButtonText: 'Save',
    }).then((result) => {
      if (result.isConfirmed) {
        this.http
          .put(
            `${this.base.Api()}edit.todolist/${this.edit_id}`,
            this.formData
          )
          .subscribe((res: any) => {
            console.log(res);
            this.get_all_task();
            this.formData = {};
            this.topButtonState = true;
          });

        return Swal.fire({
          title: 'Task Edited!',
          icon: 'success',
          draggable: false,
        });

        console.log(this.formData);

      } else {
        return;
      }
    });
  }

  onEdit_cancle() {
    this.formData = {};

    return (this.topButtonState = true);
  }
}
