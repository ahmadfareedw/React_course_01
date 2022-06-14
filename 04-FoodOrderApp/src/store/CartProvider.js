import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  // ADD Logic
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // finding out that if item exits in the array
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    // puuling out item , incase of null variable will have null as false value
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    // checking if item is found
    if (existingCartItem) {
      // creating the updated item to be added in the array later
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      // creating new array and adding old items from state
      updatedItems = [...state.items];
      // overriding the exisiting item with new updated values
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // if no item is found then add as a new item to cart by concat method of JS
      updatedItems = state.items.concat(action.item);
    }

    // returning new state
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  // ********************** ADD Ends **************************************

  // REMOVE Logic
  if (action.type === "REMOVE") {
    // checking if the item already exixts and getting its index
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    // pulling out the found item using index
    const existingItem = state.items[existingCartItemIndex];
    // updating found item's price by subtracting 1 item's price from it
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;
    // checking if only one item exixts if so then remove whole item from array
    if (existingItem.amount === 1) {
      // creating a new updated array excluding that one item
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      // incase more than 1 items exist then only update it's value by -1
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      // copying old array to new one
      updatedItems = [...state.items];
      // overriding that one item using index found earlier
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    // returning new state
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
