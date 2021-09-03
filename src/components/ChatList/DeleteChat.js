import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from '@material-ui/core'
import {deleteChat} from "../../store/chats/actions";

export const DeleteChat = () => {
    const dispatch = useDispatch();
    const [chatId, setChatId] = useState("");

    const handleChange = (e) => {
        setChatId(e.target.value);
    };

    const handleDelete = (e) => {
        e.target.parentElement.parentElement.remove();
        dispatch(deleteChat(chatId));
    };

    return (
        <Button variant={"outline"} onClick={handleDelete}>X</Button>
    );
};
