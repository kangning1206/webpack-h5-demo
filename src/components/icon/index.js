class Icon extends React.Component {
  render() {
    return (
      <svg className="icon">
        <use xlinkHref={`#${this.props.name}`}></use>
      </svg>
    );
  }
}

export default Icon;
