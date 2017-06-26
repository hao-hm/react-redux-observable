// @flow
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './AppBar.css';


class AppBar extends PureComponent {
  render() {
    const {buttons, title} = this.props;
    return (
      <div className="AppBar">
        <h3>{title}</h3>
        <div className="AppBar__actions">
          {buttons.map((button, i) => (
            <button className="button" key={i} onClick={button.onClick}>{button.name}</button>
          ))}
        </div>
      </div>
    )
  }
}

AppBar.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  })),
  title: PropTypes.string.isRequired
};
export default AppBar