import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { RoutePaths } from "../utils/enum";
// import PrivateRoute from "./PrivateRoute"
//component lazy loading
//const Home = lazy(() => import("../pages/login/index"));
//const Login = lazy(() => import("../pages/login/index")); 
const Register = lazy(() => import("../pages/register"));

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      {/* <Route exact path={RoutePaths.Home} component={Home} /> */}
      {/* <Route exact path={RoutePaths.Login} component={Login} /> */}
      {/* <Route exact path={RoutePaths.Register} component={Register} /> */}
      <Route exact path={"/"} component={Register} />
    </Switch>
  );
};

export default AppRoutes;
