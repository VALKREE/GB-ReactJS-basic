import React, { useContext } from "react";
import { ThemeContext } from "../../utils/ThemeContext";

import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  message:{
    padding: ".3rem",
    border: "1px solid #000",
  },
});

export const MessageDef = ({ text, author, theme }) => {
  const classes = useStyles();
  return (
    <div className={classes.message}>
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
