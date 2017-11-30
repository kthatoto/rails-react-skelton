import React, { Component } from 'react';
import { connect } from 'react-redux';

import { requestSubmitItem } from '../actions/itemActionCreator';

class Form extends Component {
  render() {
    return (
      <div className="form">
        <input type="text" className="form__input" ref="inputText" />
        <button onClick={() => this.requestSubmitItem()} className="form__submit">submit</button>
      </div>
    );
  }

  requestSubmitItem() {
    const itemName = this.refs.inputText.value;
    this.props.requestSubmitItem(itemName);
  }
}
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    requestSubmitItem: itemName => {
      dispatch(requestSubmitItem(itemName))
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
