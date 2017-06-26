import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from './actions';
import { createStructuredSelector } from 'reselect';
import { makeSelectData, makeSelectLoading, makeSelectError } from './selectors';
import Table from '../../components/Table';
import Loading from '../../components/Loading';
import AppBar from "../../components/AppBar";
import { CREATE_MODE, EDIT_MODE } from '../../util/actionType';

export class LocationList extends PureComponent {
  constructor(props) {
    super(props);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
  }


  componentDidMount() {
    this.props.action.fetchStart();
  }

  componentWillUnmount() {
  	this.props.action.fetchCanceled();
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
            <a role="button" onClick={() => this.onDeleteClick(record)}> Delete</a>
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
const mapStateToProps = createStructuredSelector({
  locations: makeSelectData(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});


export const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationList)