import { CLICK_CHAT, ADD_CHAT, DELETE_CHAT, SEND_MESSAGE } from "./actionTypes";
import {AUTHORS} from "../../constants";


export const clickChat = (chatId, name) => ({
  type: CLICK_CHAT,
  payload: {
    chatId,
    name,
  }
});

export const addChat = (chatId, name) => ({
  type: ADD_CHAT,
  payload: {
    chatId,
    name,
  },
});

export const deleteChat = (chatId) => ({
  type: DELETE_CHAT,
  payload: {
    chatId,
  },
});

export const sendMessage = (chatId, message) => ({
  type: SEND_MESSAGE,
  payload: {
    chatId,
    message,
  },
});

let timeout;
export const sendMessageWithReply = (chatId, message) => (dispatch) => {
  dispatch(sendMessage(chatId, message));

  if(timeout) {
    clearTimeout(timeout);
  }

  timeout = setTimeout(() =>{
    dispatch(sendMessage(chatId, {author: AUTHORS.robot, text: "Message from thunk"}))
  },1000)
}
