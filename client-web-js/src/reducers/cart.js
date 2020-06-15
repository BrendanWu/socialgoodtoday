import { ADD_TO_CART, REMOVE_FROM_CART, TOGGLE_CART } from "../actions/cart";

const initialState = {
  items: [],
  isOpen: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_CART:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case ADD_TO_CART: {
      const items = state.items;
      items.push(payload);
      return {
        ...state,
        items,
      };
    }

    case REMOVE_FROM_CART: {
      //payload = index to be removed
      const items = state.items;
      items.splice(payload, 1);
      return {
        ...state,
        items,
      };
    }

    default:
      return state;
  }
}
