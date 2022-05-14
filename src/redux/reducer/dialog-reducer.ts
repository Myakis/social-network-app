import { ThunkType, IUserNameTypes, MessageDataTypes } from './../../types/reducers-types';
import { ActionsTypes } from '../../types/reducers-types';
import { dialogsAPI } from '../../api/api';

let initialState = {
  users: [] as Array<IUserNameTypes> | [],
  messages: [] as Array<MessageDataTypes> | [],
  firstUser: null as null | number,
  pendingUsers: false as boolean,
  pendingMessage: false as boolean,
};

export type initialStateTypes = typeof initialState;

const dialogsReducer = (
  state = initialState,
  action: ActionsTypes<typeof dialogActions>,
): initialStateTypes => {
  switch (action.type) {
    case 'ADD_USERS':
      return {
        ...state,
        users: action.users,
      };
    case 'GET_MESSAGES':
      return {
        ...state,
        messages: action.messages,
      };
    case 'PENDING_USER':
      return {
        ...state,
        pendingUsers: action.pending,
      };
    case 'PENDING_MESSAGE':
      return {
        ...state,
        pendingMessage: action.pending,
      };
    case 'SET_LAST_DIALOGS':
      return {
        ...state,
        firstUser: action.id,
      };
    case 'START_DIALOG':
      return {
        ...state,
        firstUser: action.id,
      };
    default:
      return state;
  }
};

export const dialogActions = {
  addMessage: (messageText: string) =>
    ({
      type: 'ADD_MESSAGE',
      messageText,
    } as const),
  usersReceived: (users: IUserNameTypes[]) =>
    ({
      type: 'ADD_USERS',
      users,
    } as const),
  lastDialogs: (id: number) =>
    ({
      type: 'SET_LAST_DIALOGS',
      id,
    } as const),
  messagesReceived: (messages: MessageDataTypes[] | []) =>
    ({
      type: 'GET_MESSAGES',
      messages,
    } as const),
  changedPendingUser: (pending: boolean) =>
    ({
      type: 'PENDING_USER',
      pending,
    } as const),
  changedPendingMessage: (pending: boolean) =>
    ({
      type: 'PENDING_MESSAGE',
      pending,
    } as const),
  startDialog: (id: number) =>
    ({
      type: 'START_DIALOG',
      id,
    } as const),
};
export const startDialog =
  (id: number): ThunkType =>
  async dispatch => {
    const data = await dialogsAPI.startDialog(id);
    dispatch(dialogActions.startDialog(id));
  };
export const getDialogs = (): ThunkType => async dispatch => {
  dispatch(dialogActions.changedPendingUser(true));
  const data = await dialogsAPI.getDialogs();
  dispatch(dialogActions.usersReceived(data));
  dispatch(dialogActions.changedPendingUser(false));
};
export const sendMessageDialog =
  (id: number, message: string): ThunkType =>
  async dispatch => {
    const data = await dialogsAPI.sendMessage(id, message);
    if (data.resultCode === 0) {
      dispatch(getListMessages(id));
    }
  };

// export const getNewMessageDialog =
//   (id: number): ThunkType =>
//   async dispatch => {
//     const messagesData = await dialogsAPI.getListMessages(id);
//     dispatch(dialogActions.messagesReceived(messagesData.items));
//   };
export const getListMessages =
  (id: number): ThunkType =>
  async dispatch => {
    dispatch(dialogActions.changedPendingMessage(true));
    const messagesData = await dialogsAPI.getListMessages(id);
    dispatch(dialogActions.messagesReceived(messagesData.items));
    dispatch(dialogActions.changedPendingMessage(false));
  };

export default dialogsReducer;
