import { BaseApi } from './../../../services/BaseAPi';
import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ButtonDirective, ButtonModule } from '@coreui/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { cilList, cilRoom, cilShieldAlt } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-room',
  imports: [NgFor, CommonModule, HttpClientModule,
    IconDirective,ButtonDirective,ButtonModule
  ],
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss',
  standalone: true
})
export class RoomComponent implements OnInit {
  Base_Url: string = 'http://127.0.0.1:8000'
  icons = { cilList, cilShieldAlt ,cilRoom};

  ngOnInit(): void {
    this.get_room()
  }

  constructor(
    private http: HttpClient,
    private route :Router,
    private base : BaseApi
  ) { }
  room: Array<any> = []
  get_room() {
    this.http.get(`${this.Base_Url}/get.chatroom`).subscribe((Res: any) => {
      // console.log(Res);
      this.room = Res.data

      // console.log(this.room);


    })
  }

  btn_join(id:number){
    var str_id = id.toString()
    sessionStorage.setItem('room_id', str_id)
    this.route.navigateByUrl('/miniproject/room/chat-room')
  }
}
