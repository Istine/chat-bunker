import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketIOService {
  socket: Socket | null = null;

  setUpConnection() {
    this.socket = io('http://localhost:3000');
    this.socket.emit('message', 'Hello');
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
