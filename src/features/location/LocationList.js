import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from './actions';
import { createStructuredSelector } from 'reselect';
import { makeSelectData, makeSelectLoading, makeSelectError } from './selectors';
import Table from '../../components/Table';
import Loading from '../../components/Loading';
import AppBar from "../../components/AppBar";
import { CREATE_MODE, EDIT_MODE } from '../../util/actionType';

const mapStateToProps = createStructuredSelector({
  locations: makeSelectData(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});


const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators(actions, dispatch)
});

export class LocationList extends Component {
  constructor(props) {
    super(props);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
  }
  
  
  componentWillMount() {
    this.props.action.fetchStart();
  }

  onDeleteClick(item) {
    this.props.action.deleteStart(item.id);
  };

  onEditClick(item){
    this.props.action.setCurrent(item);
    this.props.action.changeMode(EDIT_MODE);
  };

  render() {
    const { locations, action, loading } = this.props;
    const columns = [
      {
        title: 'Name',
        key: 'name'
      },
      {
        title: 'Description',
        key: 'description',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a role="button" onClick={() => this.onEditClick(record)}>Edit</a> |
            <a role="button" onClick={() => this.onDeleteClick(record)}>Delete</a>
          </span>
        )
      },
    ];
    const buttons = [
      { name: 'Create', type: 'primary', onClick: () => action.changeMode(CREATE_MODE) }
    ];

    return (
      <div>
        <Loading loading={loading} />
        <AppBar title="Location" buttons={buttons} />
        <Table columns={columns} dataSource={locations} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationList)