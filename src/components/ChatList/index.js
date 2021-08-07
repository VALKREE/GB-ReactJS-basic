import React, { useContext } from "react";
import { List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../utils/ThemeContext";
import { withThemeContext } from "../Message";

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    List: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "1rem",
      padding: ".3rem",
    },
    ListItem: {
      border: "1px solid #000",
    },
    Link: {
      position: "relative",
      color: "#000",
      textDecoration: "none",
      transition: "transform .3s linear",
      '&:hover': {
        color: "#000",
        transform: "scale(1.3)",
        transition: "transform .3s linear",
      },
    },
    DeleteChat:{
      height: "16px",
      width: "16px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      top: 0,
      right: 0,
      padding: 0,
      border: "1px solid #FFF",
      borderRadius: "20px",
      cursor: "pointer",
      background: "red",
      color: "#fff",
    }
});


const Chats = ({ chats, theme }) => {
  const classes = useStyles();

  const handlerDelete = (e) => {
    if(e.target.parentElement.parentElement.children.length !== 1){
      e.target.parentElement.remove();
    }else{
      e.target.parentElement.parentElement.parentElement.children[1].remove();
      e.target.parentElement.parentElement.parentElement.children[0].remove();
    }
  }

  return (
    <>
      <List className={classes.List}>
        {Object.values(chats).map((c) => (
          <ListItem className={classes.ListItem} key={c.id}>
            <Link className={classes.Link} to={`/home/${c.id}`}>
              {c.name}
            </Link>
            <span className={classes.DeleteChat} onClick={handlerDelete}>X</span>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export const ChatList = withThemeContext(Chats);
