import React, { useRef, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialState = [];

const shoppingReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: uuidv4(),
          product: action.product,
        }, // add id and product to shoppingList
      ];
    case 'DELETE':
      console.log('action id', action.id);
      return state.filter((item) => item.id !== action.id); // JIC {}
    default:
      return state;
  }
};

const ShoppingList = () => {
  const inputRef = useRef();
  const [shoppingList, dispatch] = useReducer(shoppingReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch action
    dispatch({
      type: 'ADD',
      product: inputRef.current.value, // aka payload
    });
    console.log('shoppingList', shoppingList);
    inputRef.current.value = '';
  };

  const removeShoppingItem = (id) => {
    console.log(id);
    dispatch({
      type: 'DELETE',
      id,
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <ul>
        {shoppingList.map((item) => (
          <li key={item.id}>
            {item.product}
            <button onClick={() => removeShoppingItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShoppingList;
