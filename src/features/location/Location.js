// @flow
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {makeSelectMode, makeSelectError} from './selectors';
import LocationList from './LocationList';
import {VIEW_MODE} from '../../util/actionType';
import LocationForm from './LocationForm';
import Alert from "../../components/Alert/index";

const mapStateToProps = createStructuredSelector({
  mode: makeSelectMode(),
  error: makeSelectError()
});

type Props = {
  mode: string,
  error: string
}

export class Location extends PureComponent<void, Props, void> {

  render() {
    const {mode, error} = this.props;
    return (
      <div>
        <Alert message={error}/>
        {mode === VIEW_MODE ? <LocationList/> : <LocationForm/>}
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(Location)