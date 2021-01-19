import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";


import HomeScreen from "./pages/HomeScreen";
import Tela2Screen from "./pages/Tela2Screen";

import { Container, Menu, PageBody } from './AppStyled';

import MenuItem from './components/MenuItem';

export default () => {
  const name = useSelector((state) => state.user.name);
  //test
  return (
    <BrowserRouter>
      <Container>
        <Menu>
          <MenuItem icon="/assets/store" link="/" />
          <MenuItem icon="/assets/order.png" link="/orders" />
          <MenuItem icon="/assets/profile.png" link="/profile" />
        </Menu>
        <PageBody>

          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route path="/tela2/:nome">
              <Tela2Screen />
            </Route>
          </Switch>

        </PageBody>

      </Container>

    </BrowserRouter >
  );
};

//<h1>Oi, {' ' + name} </h1>