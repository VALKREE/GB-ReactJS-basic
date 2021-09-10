import React, { useCallback } from "react";
import { Message } from "../Message";

export const MessageList = ({ messages }) => {
  const renderMessage = useCallback(
    (mess) => (
      <div>
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
