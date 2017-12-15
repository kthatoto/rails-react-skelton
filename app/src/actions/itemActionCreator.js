import axios from 'axios';

export function requestSubmitItem(itemName) {
  return dispatch => {
    return axios.post(
      'http://0.0.0.0:3000/items',
      { item:
        { name: itemName }
      },
    ).then(response => {
      dispatch({
        type: 'SUBMIT_ITEM',
        itemName: response.data.item.name,
        itemId: response.data.item.id,
      });
    });
  };
}
export function requestFetchItems() {
  return dispatch => {
    return axios.get(
      'http://0.0.0.0:3000/items',
    ).then(response => {
      dispatch({
        type: 'FETCH_ITEMS',
        items: response.data.items,
      });
    });
  }
}
export function requestDeleteItem(id) {
  return dispatch => {
    return axios.delete(
      'http://0.0.0.0:3000/items/' + id,
    ).then(response => {
      dispatch({
        type: 'DELETE_ITEM',
        id,
      });
    });
  }
}
