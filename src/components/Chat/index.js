import { useEffect, useState, useCallback } from "react";
import { MessageList } from "../MessageList";
import { Form } from "../Form";
import { AUTHORS } from "../../constants";
import { ChatList } from "../ChatList";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {sendMessage, sendMessageWithReply} from "../../store/chats/actions";

import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root:{
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  Chat:{
    position: "relative",
    border: "1px solid black",
    maxWidth: "600px",
    width: "100%",
    margin: "1rem",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh - 15rem)",
  },
  Form:{
    position: "absolute",
    bottom: "0",
  },
  chatField:{
    height: "100%",
    maxHeight: "calc(100vh - 20rem)",
    backgroundColor: "red",
    padding: ".3rem",
    display: "flex",
    flexDirection: "column",
    gap: ".2rem",
    overflowY: "scroll",
  },
});


function Chat() {
  const classes = useStyles();
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
    <>
      <ChatList chats={chats} />
      {!!chatId && (
        <div className={classes.Chat}>
          <div className={classes.chatField}>
            <MessageList messages={chats[chatId].messages} />
          </div>
          <Form onSendMessage={handleSendMessage}/>
        </div>
      )}
    </>
  );
}

export default Chat;
