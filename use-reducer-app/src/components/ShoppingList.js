import React, { useRef, useReducer } from 'react';

const initialState = [];

const shoppingReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: state.length,
          product: action.product,
        }, // add id and product to shoppingList
      ];
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
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <ul>
        {shoppingList.map((item) => (
          <li key={item.id}>{item.product}</li>
        ))}
      </ul>
    </>
  );
};

export default ShoppingList;
