import axios from 'axios';

export function requestSubmitItem(itemName) {
  return dispatch => {
    return axios.post(
      'http://0.0.0.0:3000/items',
      { item:
        { name: itemName }
      },
      //{ withCredentials: true }
    ).then(response => {
      console.log(response);
      dispatch(submitItem(itemName));
    });
  };
}

function submitItem(itemName) {
  return {
    type: "SUBMIT_ITEM",
    itemName,
  };
}

export function deleteItem(index) {
  return {
    type: "DELETE_ITEM",
    index,
  }
}
