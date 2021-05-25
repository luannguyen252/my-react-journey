import React, { PureComponent } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import dynamicRoutes from "./config/dynamicRoutes";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Container from "./components/Container";
import Footer from "./components/Footer";

export default class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Navigation />
        <Content>
          <Container>
            {dynamicRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.span}
              />
            ))}
            {dynamicRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.title}
              ></Route>
            ))}
            {dynamicRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.content}
              />
            ))}
          </Container>
        </Content>
        <Footer />
      </BrowserRouter>
    );
  }
}
