
export function submitItem(itemName) {
  return {
    type: "SUBMIT_ITEM",
    itemName,
  };
}
export function requestSubmitItem(itemName) {
  return dispatch => {
    return axios.post('http://0.0.0.0:3000/')
  };
}

export function deleteItem(index) {
  return {
    type: "DELETE_ITEM",
    index,
  }
}
