import "./Chat.css";
import { useEffect, useState, useCallback } from "react";
import { MessageList } from "../MessageList";
import { Form } from "../Form";
import { AUTHORS } from "../../constants";
import { ChatList } from "../ChatList";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {sendMessage, sendMessageWithReply} from "../../store/chats/actions";

function Chat() {
  const { chatId } = useParams();

  const chats = useSelector(state => state.chats);
  const dispatch = useDispatch();

  const handleSendMessage = useCallback(
    (newMessage) => {
      dispatch(sendMessageWithReply(chatId, newMessage));
    },
    [chatId]
  );

  return (
    <div className="root">
      <ChatList chats={chats} />
      {!!chatId && (
        <div>
          <MessageList messages={chats[chatId].messages} />
          <Form onSendMessage={handleSendMessage} />
        </div>
      )}
    </div>
  );
}

export default Chat;
