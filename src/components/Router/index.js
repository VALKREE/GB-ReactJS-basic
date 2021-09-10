import React, { useState } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Profile from "../Profile";
import Chat from "../Chat";
import { ThemeContext } from "../../utils/ThemeContext";
import {Home} from "../Home";
import { makeStyles, AppBar, List, ListItem } from '@material-ui/core';
import {Animals} from "../Animals";

const useStyles = makeStyles({
  AppBar: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
  NavList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  NavListItem: {
    width: "auto",
  },
  NavLink: {
    color: "#fff",
    textDecoration: "none",
    transition: "transform .3s linear",
    width: "auto",
    '&:hover': {
      transform: "scale(1.2)",
      transition: "transform .3s linear",
    },
  },
  main: {
    width: "auto",
    display: "flex",
    flexGrow: "1",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1rem",
    paddingLeft: "calc(50% - 570px)",
    paddingRight: "calc(50% - 570px)",
  },
  footer: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#646464",
  }
});

export const Router = () => {
  const [bgColor, setBgColor] = useState("white");
  const changeColor = () => {
    setBgColor((prevColor) => (prevColor === "white" ? "gray" : "white"));
  };
  const classes = useStyles();
  return (
    <ThemeContext.Provider value={{ theme: bgColor, changeTheme: changeColor }}>
      <BrowserRouter>
        <AppBar position="static" className={classes.AppBar}>
          <List className={classes.NavList}>
            <ListItem>
              <Link to="/" className={classes.NavLink}>ГЛАВНАЯ</Link>
            </ListItem>
            <ListItem>
              <Link to="/chat" className={classes.NavLink}>ЧАТ</Link>
            </ListItem>
            <ListItem>
              <Link to="/animals" className={classes.NavLink}>ЖИВОТНЫЕ</Link>
            </ListItem>
            <ListItem>
              <Link to="/profile" className={classes.NavLink}>ПРОФИЛЬ</Link>
            </ListItem>
          </List>
        </AppBar>
        <main  className={classes.main}>
          <Switch>
            <Route
              path="/profile"
              render={(data) => <Profile match={data.match} history={data.history} />}
            ></Route>
            <Route path="/chat/:chatId?">
              <Chat />
            </Route>
            <Route path="/animals">
              <Animals />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="*">
              <h2>404</h2>
            </Route>
          </Switch>
        </main>
        <footer className={classes.footer}>
          <List className={classes.NavList}>
            <ListItem>
              <Link to="/" className={classes.NavLink}>ГЛАВНАЯ</Link>
            </ListItem>
            <ListItem>
              <Link to="/chat" className={classes.NavLink}>ЧАТ</Link>
            </ListItem>
            <ListItem>
              <Link to="/animals" className={classes.NavLink}>Животные</Link>
            </ListItem>
            <ListItem>
              <Link to="/profile" className={classes.NavLink}>ПРОФИЛЬ</Link>
            </ListItem>
          </List>
        </footer>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};