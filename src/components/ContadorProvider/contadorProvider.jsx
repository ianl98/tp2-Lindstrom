import React, { createContext, useContext, useState } from 'react';

// Crea el contexto
const MyContext = createContext();

export const MyProvider = ({ children }) => {
  // Estado compartido
  const [counter, setCounter] = useState(0);

// Función para incrementar el contador
  const incrementCounter = () => {
    setCounter(counter + 1);
  }

// Función para decrementar el contador
  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  }

  return (
    // Provee el contexto con el estado y la función de actualización
    <MyContext.Provider value={{ counter, incrementCounter, decrementCounter, resetCounter }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);