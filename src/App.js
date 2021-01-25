import React from 'react'
import cookie from 'react-cookies'
import { withRouter, Redirect } from 'react-router-dom';
import "./static/css/app"
import Tab from './pages/tab/tab'
import MyRoute from './logic/router/index'

const App = () => {
  let isLogin = cookie.load('isLogin')
  return (
    <div id="App">
      {
        isLogin ? <Tab/> :
          <>
            <Redirect push to="/login" />
            <MyRoute/>
          </>
      }
    </div>
  );
}

export default withRouter(App)
