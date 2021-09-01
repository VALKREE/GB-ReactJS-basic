import React, { useCallback } from "react";
import { Message } from "../Message";


import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({

});

export const MessageList = ({ messages }) => {
    const classes = useStyles();
  const renderMessage = useCallback(
    (mess) => (
      <div className={classes.message}>
          <Message
              text={mess.text}
              author={mess.author}
              key={mess.id}
          />
      </div>
    ),
    []
  );

  return messages.map(renderMessage);
};
