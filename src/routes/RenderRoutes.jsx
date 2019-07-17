import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  withRouter,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { Cookies } from 'react-cookie';
import ConnectedSwitch from './ConnectedSwitch';

const cookies = new Cookies();

const RenderRoutes = ({ routes, auth, location }) => {
  const authInfo = cookies.get('authInfo');
  const path = get(location, 'pathname');
  const accessToken = get(auth, 'token.accessToken') || get(authInfo, 'token.accessToken');
  if (!routes) {
    return null;
  }

  return (
    <ConnectedSwitch>
      { routes.map((route, i) => (
        <Route
          key={i}
          exact
          path={route.path}
          render={props => (
            <React.Fragment>
              {
                path !== route.requireLogin && route.requireLogin && (
                  !accessToken
                ) && (
                  <Redirect
                    to={{
                      pathname: route.requireLogin
                    }}
                  />
                )
              }
              {
                (
                  !route.requireLogin
                  || accessToken
                  || route.requireLogin === route.path
                ) && (
                  <route.component
                    {...props}
                    routes={route.routes}
                  />
                )
              }
            </React.Fragment>
          )}
        />
      ))}
    </ConnectedSwitch>
  );
};

RenderRoutes.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  routes: PropTypes.arrayOf(PropTypes.any).isRequired,
  auth: PropTypes.objectOf(PropTypes.any).isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default withRouter(connect(mapStateToProps, null)(RenderRoutes));
