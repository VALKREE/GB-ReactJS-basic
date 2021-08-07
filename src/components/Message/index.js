import React, { useContext } from "react";
import { usePrev } from "../../utils";
import { ThemeContext } from "../../utils/ThemeContext";
import { makeStyles } from '@material-ui/core/styles';
export const MessageDef = ({ text, author, theme }) => {
  return (
    <div className="message">
      {author}: {text}
    </div>
  );
};


export const withThemeContext = (Component) => {
  return (props) => {
    const theme = useContext(ThemeContext);
    return <Component {...props} theme={theme} />;
  };
};

export const Message = withThemeContext(MessageDef);
