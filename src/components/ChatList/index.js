import React, {useCallback, useState} from "react";
import { List, ListItem, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { withThemeContext } from "../Message";
import {clickChat, deleteChat} from "../../store/chats/actions";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
    ChatSetting:{
        display: "flex",
        flexDirection: "column",
        gap: ".2rem",
    },
    ChatList:{
        border: "1px solid black",
        margin: "1rem",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxHeight: "calc(100vh - 20rem)",
        overflowY: "scroll",
    },
    ChatListItem:{
        border: "1px solid #000",
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "10rem",
    },
    ChatLink: {
        wordBreak: "break-word",
        textAlign: "center",
        border: "1px solid #000",
        textDecoration: "none",
        padding: ".3rem",
        transition: "transform .3s linear",
        '&:hover':{
            transform: "scale(1.1)",
            transition: "transform .3s linear",
        }
    },
});
const Chats = ({ chats, theme }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [chatId] = useState("");
    const handlerClickChat = (e) => {
        dispatch(clickChat(chatId));
    }

    const deleteChatHandler = useCallback((chatId) => {
        dispatch(deleteChat(chatId));
    })

    return (
        <div className={classes.ChatSetting}>
            <List className={classes.ChatList}>
                {Object.values(chats).map((c) => (
                    <ListItem key={c.id} className={classes.ChatListItem}>
                        <Link onClick={handlerClickChat} to={`/chat/${c.id}`} className={classes.ChatLink}>{c.name}</Link>
                        <Button onClick={deleteChatHandler}>X</Button>
                    </ListItem>
                ))}
            </List>
        </div>
      );
};

export const ChatList = withThemeContext(Chats);
