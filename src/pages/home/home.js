import {withRouter} from 'react-router-dom'

class Home extends React.Component {
  
  
  
  componentWillReceiveProps(nextProps) {
    // locationChanged 变量为 true
    debugger
    nextProps.location !== this.props.location
    debugger
    // 不正确，locationChanged 变量会 *永远* 为 false ，因为 history 是可变的（mutable）。 const
    // locationChanged = nextProps.history.location !== this.props.history.location
  }

  componentDidMount(prevProps) {
    debugger

  }

  render() {

    return <div>
      <h2>Home hot</h2>
    </div>
  }



}

export default withRouter(Home)
