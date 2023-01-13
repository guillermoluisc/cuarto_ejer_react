import './App.css'
//se puede exportar directamente arrow function asi. como constantes.
//se pueden exportar varios componentes (cada "función")
export const Firstcomponent=()=>{
  const nombre="Guillermo Luis"
  const apellidos="Casanova"
   return (
     <h1>
         {nombre}  {apellidos}
     </h1>
   )
 }
