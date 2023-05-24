import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppCookieServiceService } from 'src/app/services/app-cookie-service.service';
import { JwtService } from 'src/app/services/jwt.service';
import { SocketIOService } from 'src/app/services/socket-io.service';
import { putOnlineUsers } from 'src/app/store/actions/chat.action';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  email: string = 'email';

  constructor(
    private socketService: SocketIOService,
    private jwtService: JwtService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.jwtService.decodeToken();
    const email = this.jwtService.decodedToken['email'] as string;
    this.email = email;

    this.socketService.setUpConnection();
    this.socketService.socket?.emit('user-connected', email);
    this.socketService.socket?.on('new-user', (data) => {
      this.store.dispatch(putOnlineUsers({ users: data }));
    });
  }
}
