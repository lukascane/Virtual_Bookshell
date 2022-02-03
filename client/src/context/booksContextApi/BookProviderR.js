import { useReducer, useContext } from 'react';
// import { todoReducer, initialState } from './TodoReducer';

export default function BookProviderR({ children }) {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  return (
    <BookContextR.Provider value={{ state, dispatch }}>
      {children}
    </BookContextR.Provider>
  );
}
