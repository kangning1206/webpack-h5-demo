
/**
 * 参考：http://www.8dou5che.com/2017/03/01/react-router/
 * 
 */

import {
  //BrowserRouter as Router,
  HashRouter as Router,
  Route,
  Prompt,
  Switch,
  Link
} from 'react-router-dom'





var abc = require('react-router-dom')
window.KNB = abc;

import Home from '../pages/home'
import About from '../pages/about'
import Order from '../pages/about'
import NotFound from '../pages/404'

const supportsHistory = 'pushState' in window.history

const AppRouter = () => (
  <Router forceRefresh={true}>
    <Switch>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Order</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/order" component={Order} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default AppRouter