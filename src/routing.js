import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Home from "./component/home/home";
import NotFound from "./notFound";
import ListingApi from "./component/listing/listingApi";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/list/:mealId" component={ListingApi} />
        <Route path="*" component={NotFound} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
};
export default Routing;
