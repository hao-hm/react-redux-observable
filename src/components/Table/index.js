/**
 * Created by haohuynh on 6/22/2017.
 */
import React from 'react';
import './Table.css';


const renderColumns = (columns) => (
  columns.map(column => <th key={column.key}>{column.title}</th>)
);

const renderRows = (data, columns) => data.map(function (item) {
  const cells = columns.map((col, i) => {
    const text = item[col.key];
    return <td key={i}>{col.render?col.render(text, item):text}</td>;
  });
  return <tr key={item.id}>{cells}</tr>;
});

export default class index extends React.Component {
  render() {
    const {columns, dataSource} = this.props;
    return (
      <table className="table">
        <thead><tr>{renderColumns(columns)}</tr></thead>
        <tbody>{renderRows(dataSource, columns)}</tbody>
      </table>
    );
  }
}