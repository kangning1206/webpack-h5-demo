
/**
 * 参考：http://www.8dou5che.com/2017/03/01/react-router/
 *
 */

import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';


import Home from '../pages/home';
import About from '../pages/about';
import NotFound from '../pages/404';


const AppRouter = () => (
  <Router forceRefresh>
    <Switch>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
