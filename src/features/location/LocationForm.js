import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {createStructuredSelector} from 'reselect';
import actions from './actions';
import {VIEW_MODE, CREATE_MODE, EDIT_MODE} from '../../util/actionType';
import {makeSelectMode, makeSelectCurrent, makeSelectLoading} from './selectors';


class LocationForm extends PureComponent {
  constructor(props) {
    super(props);
    const current = {...this.props.current};

    this.state = this.isEdit() ? current : {
      name: '',
      description: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name) {
      if (this.isCreate()) {
        this.props.action.createStart(this.state);
      } else {
        this.props.action.updateStart(this.props.current.id, this.state);
      }
    }
  };

  isCreate = () => {
    return this.props.mode === CREATE_MODE;
  };

  isEdit = () => {
    return this.props.mode === EDIT_MODE;
  };

  handleCancel = () => {
    this.props.action.changeMode(VIEW_MODE);
    this.props.action.setCurrent(null);
  };

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  render() {
    const {loading} = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Create Location</h2>
        <label>
          Name
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
        </label>

        <label>
          Description
          <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
        </label>
        <button type="submit" className="button button--primary"
                disabled={loading}>{loading ? 'Loading' : 'Submit'}</button>
        <button type="button" className="button" onClick={this.handleCancel}>Cancel</button>
      </form>
    );
  }
}

//prop types
LocationForm.propTypes = {
  mode: PropTypes.string.isRequired,
  loading: PropTypes.bool
};

///////////////////
const mapStateToProps = createStructuredSelector({
  mode: makeSelectMode(),
  current: makeSelectCurrent(),
  loading: makeSelectLoading()
});
const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationForm);