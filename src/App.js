import "./App.css";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Error = lazy(() => import("./pages/Error"));

function App() {
  const { profile } = useSelector((state) => state.user);
  return (
    <Router>
      <Layout>
        <Suspense fallback={<h1>Loading</h1>}>
          <Switch>
            <PrivateRoute exact path="/spiceblue-task-manager" component={Home} profile={profile} />
            <Route exact path="/spiceblue-task-manager/login" component={Login} />
            <Route exact path="/spiceblue-task-manager" component={Login} />
            <Route path="*" component={Error} />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;

const PrivateRoute = ({ component: Component, profile, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        profile ? <Component {...props} /> : <Redirect to="/spiceblue-task-manager/login" />
      }
    />
  );
};
