import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addChat } from "../../store/chats/actions";

import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  addChatForm:{
    width: "inherit",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  addChatInput:{
    padding: "1rem",
    width: "100%",
    maxWidth: "12rem",
  },
});

export const AddChat = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      return;
    }

    const newId = `chat-${Date.now()}`;
    dispatch(addChat(newId, value));
  };

  return (
    <form onSubmit={handleSubmit} className={classes.addChatForm}>
      <input onChange={handleChange} value={value} className={classes.addChatInput}/>
    </form>
  );
};
