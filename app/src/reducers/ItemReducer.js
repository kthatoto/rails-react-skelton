
const initialState = {
  items: [],
};
export default function item(state = initialState, action) {
  switch (action.type) {
    case 'SUBMIT_ITEM':
      return Object.assign({}, state, {
        items: [
          ...state.items,
          {
            name: action.itemName,
            id: action.itemId,
          }
        ],
      });
    case 'FETCH_ITEMS':
      return Object.assign({}, state, {
        items: action.items.map(item => (
          {
            name: item.name,
            id: item.id,
          }
        ))
      });
    case 'DELETE_ITEM':
      const fileteredItems = state.items.filter(item =>
        item.id != action.id
      );
      return Object.assign({}, state, {
        items: fileteredItems,
      });

    default:
      return state;
  }
}
