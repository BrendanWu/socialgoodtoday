import { ADD_TO_CART, REMOVE_FROM_CART, TOGGLE_CART, HANDLE_DONATION_AMOUNT } from "../actions/cart";

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

    case HANDLE_DONATION_AMOUNT: {
      const amount = payload.amount
      const index = payload.index

      return {
        ...state,
        items: state.items.map((item, i) => i === index ? {...item, amount} : item)
      }

    }

    case REMOVE_FROM_CART : {

      return {
        ...state,
        items: [
          ...state.items.slice(0,payload),
          ...state.items.slice(payload + 1)
        ]
      }
    }

    

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
