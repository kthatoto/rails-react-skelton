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
      dispatch(submitItem(
        response.data.item.name,
        response.data.item.id,
      ));
    });
  };
}
export function requestFetchItems() {
  return dispatch => {
    return axios.get(
      'http://0.0.0.0:3000/items',
    ).then(response => {
      dispatch(fetchItems(response.data.items));
    });
  }
}
export function requestDeleteItem(id) {
  return dispatch => {
    return axios.delete(
      'http://0.0.0.0:3000/items/' + id,
    ).then(response => {
      dispatch(deleteItem(id));
    });
  }
}

function submitItem(itemName, itemId) {
  return {
    type: "SUBMIT_ITEM",
    itemName,
    itemId,
  };
}
function fetchItems(items) {
  return {
    type: "FETCH_ITEMS",
    items,
  }
}

export function deleteItem(id) {
  return {
    type: "DELETE_ITEM",
    id,
  }
}
