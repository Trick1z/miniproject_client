import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Icons'
        },
        children: [
            {
                path: '',
                redirectTo: 'room-list',
                pathMatch: 'full'
            },
            {
                path: 'room-list',
                loadComponent: () => import('./room/room.component').then(m => m.RoomComponent),
                data: {
                    title: 'Room Lists'
                }
            },
            {
                path: 'chat-room',
                loadComponent: () => import('./chat-room/chat-room.component').then(m => m.ChatRoomComponent),
                data: {
                    title: 'Chats Room'
                }
            },

        ]
    }
]
