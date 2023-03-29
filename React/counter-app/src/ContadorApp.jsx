
import PropTypes from 'prop-types'
import './App.css'
import React, { useState, useEffect} from 'react';
//opcion 2
function ContadorApp({ value }) {
  // cuando hago el console.log se renderiza dos veces
  //por lo que entendí sucede por React.StrictMode, que al quitarlo 
  //no vuelve a pasar. Luego otra pregunta ¿Qué debo poner en ese primer console.log?
  //el valor actual del contador??? 

//Ejercicio 7 Duda con el comentario del console
  console.log(value)
//Ejercicio 7 (CON DUDAS)


  const [count, setCount] = useState(value);
    const imprimeValor=()=>{
        console.log({value}.value)
      }

   //Ejercicio 7 uso del useffect luego de que el count es
   // actualizado y llega a 4 junto con template string
   //si creaba un compontente nuevo llamado alerta debía crearlo acá?
   //tal como function alerta (props){
      //y acá el código?
   //}

useEffect(() => {
  if(count==4){
  alert(`Actualmente el numero es:  ${count}`);
  document.title = `Actualmente el numero es:  ${count}`
}
}, [count]);

//Ejercicio 7  
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
