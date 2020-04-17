import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const Main = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/:id`}>
        <DetailArticle />
      </Route>
      <Route path={path}>
        <Article />
      </Route>
    </Switch>
  );
};
export default Main;
