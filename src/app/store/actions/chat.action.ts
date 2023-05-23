import { createAction, props } from '@ngrx/store';

export const putOnlineUsers = createAction(
  '[Chat Page] Online',
  props<{ users: string[] }>()
);
