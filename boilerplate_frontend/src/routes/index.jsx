import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Loader from 'components/Loader';
import PrivateRoute from 'components/PrivateRoute';
import 'styles/global.less';

import LayoutWrapper from 'components/Layout';

const Home = React.lazy(() => import('views/Home/index'));
const NotFound404 = React.lazy(() => import('views/404'));
const SignUp = React.lazy(() => import('views/SignUp'));
const Login = React.lazy(() => import('views/Login'));

const Routing = () => (
  <Router>

    <LayoutWrapper>
      <React.Suspense fallback={<Loader />}>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/404" component={NotFound404} />
          <Route path="*" component={() => <Redirect to="/404" />} />
        </Switch>
      </React.Suspense>
    </LayoutWrapper>
  </Router>
);

export default Routing;
