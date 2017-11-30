import React, { Component } from 'react';
import { connect } from 'react-redux';

import { requestFetchItems, requestDeleteItem } from '../actions/itemActionCreator';

class ItemList extends Component {
  componentDidMount() {
    this.props.requestFetchItems();
  }
  renderItem(name, id) {
    return (
      <li key={"item" + id}>
        <div className="items__item">
          {name}
          <span className="items__delete" onClick={() => this.requestDeleteItem(id)}></span>
        </div>
      </li>
    );
  }
  requestDeleteItem(id) {
    this.props.requestDeleteItem(id);
  }
  render() {
    return (
      <ul>
        {this.props.ItemReducer.items.map((item) => {
          return this.renderItem(item.name, item.id);
        })}
      </ul>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    requestFetchItems: () => {
      dispatch(requestFetchItems());
    },
    requestDeleteItem: id => {
      dispatch(requestDeleteItem(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
