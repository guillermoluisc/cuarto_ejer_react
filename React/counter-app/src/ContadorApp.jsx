
import PropTypes from 'prop-types'
import './App.css'
import React, { useState } from 'react';
//opcion 2
function ContadorApp({ value }) {
  const [count, setCount] = useState(value);
    const imprimeValor=()=>{
        console.log({value}.value)
      }

  return (

    // ejercicio 4 y 5
    <div>    <h1>CounterApp</h1>
    <h2> { value } </h2>

    <button onClick={imprimeValor}>
    Imprimir Valor
    </button>


 {/* ejercicio 6 */}

    <div>
      <p>Valor {count} </p>
      <br />
      <button onClick={() => setCount(count + 1)}>
        Sumar 1
      </button>
      <br />
      <button onClick={() => setCount(count - 1)}>
        Restar 1
      </button>
      <br />
      <button onClick={() => setCount(value)}>
        reset
      </button>
    </div>
</div>
  )
}

ContadorApp.propTypes = {
  value: PropTypes.number
}
export default ContadorApp
// Opcion 1

// import PropTypes from 'prop-types'
// import './App.css'
// export const ContadorApp=({value})=>{
//     ContadorApp.propTypes = {
//         value: PropTypes.number
//       }
//       const imprimeValor=()=>{
//         console.log({value}.value)
//       }
//    return (
//     <div>
//         <h1>CounterApp</h1>
//     <h2> {value} </h2>
//     <button onClick={imprimeValor}>
//     Imprimir Valor
//     </button>
//     </div>
//    )
//  }
