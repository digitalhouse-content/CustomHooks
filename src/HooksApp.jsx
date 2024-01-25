import { FetchApp } from "./components/FetchApp"
import { CounterApp } from "./components/CounterApp"
import { FormsApp } from "./components/FormsApp"


export const HooksApp = () => {
  return (
    <>
      <h1>Aplicación de Hooks</h1>
      <hr />
      <FetchApp />
      <hr />
      <CounterApp/>
      <hr />
      <FormsApp/>
    </>
  )
}
