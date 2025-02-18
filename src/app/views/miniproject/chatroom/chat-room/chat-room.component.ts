import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ButtonDirective, ButtonModule, FormModule } from '@coreui/angular'; // CoreUI Form Module
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-chat-room',
  imports: [FormsModule, FormModule,
    ButtonDirective, ButtonModule,
    HttpClientModule,CommonModule,NgFor
  ],
  templateUrl: './chat-room.component.html',
  styleUrl: './chat-room.component.scss',standalone:true
})
export class ChatRoomComponent implements OnInit {
  ngOnInit(): void {
    this.get_room_id()
    this.get_chats()
  }
  constructor(
    private route: Router, private http: HttpClient
  ) { }

  room_id: number = 0
  user: string = ''
  msg: string = ''

  get_room_id() {
    var str_r_id: string | null = sessionStorage.getItem('room_id');
    if (str_r_id !== null) {
      this.room_id = parseInt(str_r_id)
    }

  }
  // /post.msg

  Base_Url: string = 'http://127.0.0.1:8000'

  send() {

    var data = {
      user: this.user,
      msg: this.msg,
      room_id: this.room_id
    }


    this.http.post(`${this.Base_Url}/post.msg`, data).subscribe((res: any) => {
      console.log(res);
      this.msg = ''
      this.get_chats()

    })
  }
  chat:any=[]
  get_chats() {
    this.http.get(`${this.Base_Url}/get.chats/roomid=${this.room_id}`).subscribe((res: any) => {

      console.log(res);
      this.chat = res.data

    })
  }

  convertTime(timestamp: string) {
    const date = new Date(timestamp);
  
    const day = date.getDate();
    const month = date.toLocaleString('en-GB', { month: 'short' }); // Change to 'en-GB' for English short month
    const year = date.getFullYear();
  
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
  
    const formattedDate = `${day} ${month} ${year}`;
    const formattedTime = `${hours}:${minutes}`;
    return `${formattedDate}-${formattedTime}`;
  }

  back() {
    this.route.navigateByUrl('/miniproject/room/room-list')
  }
}
