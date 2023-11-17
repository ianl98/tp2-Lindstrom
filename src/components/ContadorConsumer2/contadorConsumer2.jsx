import React from 'react';
import '../ContadorConsumer/contadorConsumer.css';
import { useMyContext } from '../ContadorProvider/contadorProvider';

const ContadorConsumer2 = () => {
  // Usa el hook useContext para acceder al estado proporcionado por el proveedor
  const { counter, resetCounter } = useMyContext();

  return (
    <div className='container-consumer'>
      <h2>Componente Consumidor 2</h2>
      <p className='counter'>Contador: {counter}</p>
      <button onClick={resetCounter}>Restablecer Contador</button>
    </div>
  );
};

export default ContadorConsumer2;