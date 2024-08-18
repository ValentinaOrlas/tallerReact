import { useState } from "react";

export const Operaciones = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const captureNum1 = (event) => {
    setNum1(event.target.value);
  };

  const captureNum2 = (event) => {
    setNum2(event.target.value);
  };

  const handleOperation = (operacion) => {
    switch (operacion) {
      case "sumar":

        setResultado(parseInt(num1) + parseInt(num2));
        break;

      case "restar":
        setResultado(num1 - num2);
        break;
      case "multiplicar":
        setResultado(num1 * num2);
        break;
      case "dividir":
        setResultado(num1 / num2);
        break;
        default:
          break;
    }
  };

  return (
    <div>
      <h1>Operaciones Básicas</h1>
      <input onChange={captureNum1} placeholder="Number" />
      <input onChange={captureNum2} placeholder="Number" />

      <h2>El resultado es: {resultado} </h2>

      <div>
        <button onClick={()=>handleOperation('sumar')}>Sumar</button>
        <button onClick={()=>handleOperation('restar')}>Restar</button>
        <button onClick={()=>handleOperation('dividir')}>Dividir</button>
        <button onClick={()=>handleOperation('multiplicar')}>Multiplicar</button>
      </div>
    </div>
  );
};
