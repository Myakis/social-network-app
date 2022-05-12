import { Dispatch } from 'redux';
import { v1 } from 'uuid';

import { chatAPI, IChatMessages } from '../../api/chat-api';
import { ActionsTypes, ThunkType } from './../../types/reducers-types';

type InitialStateType = typeof initialState;
type StatusType = 'pending' | 'ready';

let initialState = {
  messages: [] as IChatMessages[],
  status: 'pending' as StatusType,
};

const chatReducer = (
  state = initialState,
  action: ActionsTypes<typeof actions>,
): InitialStateType => {
  switch (action.type) {
    case 'MESSAGES_RECEIVED':
      return {
        ...state,
        messages: [...state.messages, ...action.payload.messages]
          .map(message => ({ ...message, id: v1() }))
          .filter((message, ind, array) => ind >= array.length - 100),
      };
    case 'STATUS_CHANGED':
      return { ...state, status: action.payload.status };
    case 'DELETE_MESSAGE':
      return { ...state, messages: [] };
    default:
      return state;
  }
};

export const actions = {
  messagesReceived: (messages: IChatMessages[]) =>
    ({
      type: 'MESSAGES_RECEIVED',
      payload: { messages },
    } as const),
  statusChanged: (status: StatusType) =>
    ({
      type: 'STATUS_CHANGED',
      payload: { status },
    } as const),
  deleteMessage: () =>
    ({
      type: 'DELETE_MESSAGE',
    } as const),
};
let _newMessageHandlerCreator: ((messages: IChatMessages[]) => void) | null = null;

const newMessageHandlerCreator = (dispatch: Dispatch) => {
  if (_newMessageHandlerCreator === null) {
    _newMessageHandlerCreator = messages => {
      dispatch(actions.messagesReceived(messages));
    };
  }

  return _newMessageHandlerCreator;
};

//thunk
export const startMessagesListening = (): ThunkType => async dispatch => {
  chatAPI.start();
  chatAPI.subscribe(newMessageHandlerCreator(dispatch));
};
export const stoptMessagesListening = (): ThunkType => async dispatch => {
  chatAPI.unsubscribe(newMessageHandlerCreator(dispatch));
  chatAPI.stop();
  dispatch(actions.deleteMessage());
  dispatch(actions.statusChanged('pending'));
};
export const sendMessage =
  (message: string): ThunkType =>
  async dispatch => {
    chatAPI.sendMessage(message);
  };
export default chatReducer;
