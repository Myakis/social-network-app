export interface IChatMessages {
  message: string;
  photo: string;
  userId: number;
  userName: string;
  id?: string;
}

type SubscriberType = (messages: Array<IChatMessages>) => void;

let subscribers = [] as Array<SubscriberType>;

let ws: WebSocket | null = null;

const closeHandler = () => {
  setTimeout(createChannel, 3000);
};

const messageHandler = (e: MessageEvent) => {
  const newMessage = JSON.parse(e.data);
  subscribers.forEach(item => item(newMessage));
};

const cleanUp = () => {
  ws?.removeEventListener('close', closeHandler);
  ws?.removeEventListener('message', messageHandler);
};

function createChannel() {
  cleanUp();
  ws?.close();
  ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
  ws?.addEventListener('close', closeHandler);
  ws?.addEventListener('message', messageHandler);
}

export const chatAPI = {
  start: () => {
    createChannel();
  },
  stop: () => {
    cleanUp();
    ws?.close();
    subscribers = [];
  },
  subscribe(callback: SubscriberType) {
    subscribers.push(callback);
    return () => {
      subscribers = subscribers.filter(s => s !== callback);
    };
  },
  unsubscribe(callback: SubscriberType) {
    subscribers = subscribers.filter(s => s !== callback);
  },
  sendMessage: (message: string) => {
    ws?.send(message);
  },
};
