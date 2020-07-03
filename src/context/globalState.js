import React, { createContext, useReducer } from 'react';
import AppReducer from './appReducer';


// Initial state
const initialState = {
  items: [],
}

// context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch ] = useReducer(AppReducer, initialState );

  //actions
  function addSingleEvent (singleEvent) {
    dispatch({
      type: 'add_singleEvent',
      payload: singleEvent
    });
  }
  
  return  (
    <GlobalContext.Provider value={{ items: state.items, addSingleEvent}}>
      {children}
    </GlobalContext.Provider>
  )
}
