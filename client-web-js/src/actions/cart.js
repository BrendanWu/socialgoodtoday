export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const TOGGLE_CART = "TOGGLE_CART"
export const HANDLE_DONATION_AMOUNT = "HANDLE_DONATION_AMOUNT"

export const addToCart = (cid, amount, title, image) => (dispatch) => {
    dispatch({type: ADD_TO_CART, payload: {cid, amount, title, image}})
}

export const handleDonationAmount = (index, amount) => (dispatch) => {
    console.log(index, parseFloat(amount))
    dispatch({type: HANDLE_DONATION_AMOUNT, payload: {index, amount}})
}

export const removeFromCart = (index) => (dispatch) => {
    console.log(index)
    dispatch({type: REMOVE_FROM_CART, payload: index})
}

export const toggleDrawer = () => (dispatch) => {
    dispatch({type: TOGGLE_CART})
}