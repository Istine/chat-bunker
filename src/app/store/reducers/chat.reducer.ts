import { createReducer, on } from '@ngrx/store';
import { putOnlineUsers } from '../actions/chat.action';

const intialState = {};

export const chatReducer = createReducer(
  intialState,
  on(putOnlineUsers, (state, action) => ({
    ...state,
    onlineUsers: action.users,
  }))
);
