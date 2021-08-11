import React, {useContext, useState} from "react";
import { List, ListItem, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { withThemeContext } from "../Message";
import { AddChat } from "./AddChat";
import {DeleteChat} from "./DeleteChat";
import { clickChat } from "../../store/chats/actions";

const Chats = ({ chats, theme }) => {
    const dispatch = useDispatch();
    const [chatId, setChatId] = useState("");
    const handlerClickChat = (e) => {
        dispatch(clickChat(chatId));
    }
    return (
        <List>
            {Object.values(chats).map((c) => (
              <ListItem key={c.id}>
                <Link onClick={handlerClickChat} to={`/chat/${c.id}`}>{c.name}</Link>
                  <DeleteChat />
              </ListItem>

            ))}
            <ListItem>
              <AddChat />
            </ListItem>
        </List>
      );
};

export const ChatList = withThemeContext(Chats);
