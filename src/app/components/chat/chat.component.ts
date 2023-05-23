import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  users$!: Observable<string[]>;

  dummy: string = `
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          quaerat doloribus? Voluptatem tenetur pariatur eveniet, eos eum totam
          laboriosam. Dolorum aperiam facilis nihil eum ratione officia sint
          fugit earum consequuntur.
  `;

  constructor(private store: Store<{ online: { onlineUsers: string[] } }>) {}

  ngOnInit(): void {
    this.users$ = this.store
      .select('online')
      .pipe(map((data) => data.onlineUsers));
  }

  openChat() {
    this.store.dispatch;
  }
}
