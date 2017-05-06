import { withRouter } from 'react-router-dom';
import Icon from  '../../components/icon';

class Home extends React.Component {


  componentDidMount() {

  }

  componentWillReceiveProps() {

  }

  render() {
    return (<div>
      <Icon name="film"></Icon>
      <h2>Home hot11</h2>
    </div>);
  }


}

export default withRouter(Home);
