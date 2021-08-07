import React, { useState } from "react";
import { 
  BrowserRouter, 
  Link, 
  Switch, 
  Route 
} from "react-router-dom";

import { List, ListItem } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import { Profile } from "../Profile";
import Home from "../Home";


const useStyles = makeStyles({
  List:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    background: "#64B2FA",
    gap: "1rem",
  },
  ListItem: {
    maxWidth: "100px",
  },
  Link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.4rem",
  },
});

export const Router = () => {
  const classes = useStyles();
  return (
      <BrowserRouter>
        <List className={classes.List}>
          <ListItem className={classes.ListItem}>
            <Link to="/home" className={classes.Link}>ГЛАВНАЯ</Link>
          </ListItem>
          <ListItem className={classes.ListItem}>
            <Link to="/profile" className={classes.Link}>ПРОФИЛЬ</Link>
          </ListItem>
        </List>

        <Switch>
          <Route
            path="/profile"
            render={(data) => <Profile match={data.match} />}
          ></Route>
          <Route path="/home/:chatId?">
            <Home />
          </Route>
          <Route path="/" exact>
            <h2>WELCOME</h2>
          </Route>
          <Route path="*">
            <h2>404</h2>
          </Route>
        </Switch>
      </BrowserRouter>
  );
};

const add = (a, b) => {
  return a + b;
}

const subtr = (a, b) => {
  return a - b;
}

const makeLogger = (fn) => {
  return (...args) => {
    console.log(args);
    fn(args);
  } 
}

const subWithLogger = makeLogger(subtr);
const addWithLogger = makeLogger(add);

addWithLogger(1, 2, 4);
subWithLogger(10, 1, 0);

// const perform = (fn, a, b) => {
//   return () => fn(a, b);
// }

// const performAddOnePlusTwo = perform(add, 1, 2);
// console.log(performAddOnePlusTwo());
