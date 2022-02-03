import { createContext, useContext } from 'react';

export const BookContext = createContext({});

BookContext.displayName = 'BookContext';

export const useBookContext = () => useContext(BookContext);
