import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  withRouter
  // Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
// import QueryString from 'query-string';
// import { Cookies } from 'react-cookie';
import ConnectedSwitch from './ConnectedSwitch';

// const cookies = new Cookies();

const RenderRoutes = ({ routes, auth, location }) => {
  // const query = QueryString.parse(location.hash);
  // let token;
  // let error;
  // if (query.access_token) {
  //   token = {
  //     accessToken: query.access_token,
  //     expiresIn: query.expires_in,
  //     tokenType: query.token_type,
  //     sessionState: query.session_state,
  //     state: query.state
  //   };
  // }

  // if (query.error) {
  //   error = query;
  // }

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
              {/* {
                (
                  (error || token) || (
                    location.pathname !== route.requireLogin && route.requireLogin && (
                      !auth.token || !cookies.get('authState')
                    )
                  )
                ) && (
                  <Redirect
                    to={{
                      pathname: route.requireLogin,
                      state: { token }
                    }}
                  />
                )
              }
              {
                (
                  !route.requireLogin
                  || auth.token
                  || route.requireLogin === route.path
                ) && (
                  <route.component
                    {...props}
                    routes={route.routes}
                  />
                )
              } */}
              <route.component
                {...props}
                routes={route.routes}
              />
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
