import React, {useRef, useEffect} from 'react';
import './contadorConsumer'
import { useMyContext } from '../ContadorProvider/contadorProvider';

const ContadorConsumer = () => {
  // Usa el hook useContext para acceder al estado proporcionado por el proveedor
  const { counter, incrementCounter, decrementCounter } = useMyContext();

  const contadorRef = useRef(counter);

  useEffect(() => {
    contadorRef.current = counter;
  }, [counter]);

  // Incrementa el contador del Context y 
  const increment = () => {
    incrementCounter();
    contadorRef.current = contadorRef.current +1;
  }

  const decrement = () => {
    decrementCounter();
    contadorRef.current = contadorRef.current -1;
  }

  return (
    <div className='container-consumer'>
      <h2>Componente Consumidor 1</h2>
      <p ref={contadorRef} className='counter'>Contador: {contadorRef.current}</p>
      <div className='buttons'>
        <button onClick={decrement}>Decrementar Contador</button>
        <button onClick={increment}>Incrementar Contador</button>
      </div>
    </div>
  );
};

export default ContadorConsumer;