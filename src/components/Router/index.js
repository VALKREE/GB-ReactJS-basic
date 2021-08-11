import React, { useState } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Profile from "../Profile";
import Chat from "../Chat";
import { ThemeContext } from "../../utils/ThemeContext";

export const Router = () => {
  const [bgColor, setBgColor] = useState("white");
  const changeColor = () => {
    setBgColor((prevColor) => (prevColor === "white" ? "gray" : "white"));
  };
  return (
    <ThemeContext.Provider value={{ theme: bgColor, changeTheme: changeColor }}>
      <BrowserRouter>
        <ul>
          <li style={{ backgroundColor: bgColor }}>
            <Link to="/chat">CHAT</Link>
          </li>
          <li style={{ backgroundColor: bgColor }}>
            <Link to="/profile">PROFILE</Link>
          </li>
        </ul>

        <Switch>
          <Route
            path="/profile"
            render={(data) => <Profile match={data.match} history={data.history} />}
          ></Route>
          <Route path="/chat/:chatId?">
            <Chat />
          </Route>
          <Route path="/" exact>
            <h2>WELCOME</h2>
          </Route>
          <Route path="*">
            <h2>404</h2>
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};