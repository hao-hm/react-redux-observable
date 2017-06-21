import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as action from './actions';


function mapStateToProps(state) {
	return {
	};
}

const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators(action, dispatch)
});

export class Location extends React.Component {
	constructor(props) {
		super(props);
	}

  componentDidMount() {
    this.props.action.fetchStart();
  }

  render() {
		return (
			<div>
        Location
      </div>
		);
	}
}

export default connect(
	mapStateToProps,
  mapDispatchToProps
)(Location)