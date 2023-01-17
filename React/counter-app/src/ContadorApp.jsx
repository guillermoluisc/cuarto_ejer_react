
import PropTypes from 'prop-types'
import './App.css'

function ContadorApp({ value }) {
    const imprimeValor=()=>{
        console.log({value}.value)
      }

  return (
    <div>    <h1>CounterApp</h1>
    <h2> { value } </h2>
    <button onClick={imprimeValor}>
    Imprimir Valor
    </button>
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
