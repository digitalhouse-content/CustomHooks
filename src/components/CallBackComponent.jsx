import { useCallback, useState } from "react"
import { IncrementComponent } from "./IncrementComponent"

export const CallBackComponent = () => {

    const [counter, setCounter] = useState(0)

    const incrementarPadre = useCallback(
        (val) => {
            setCounter(c => c + val)
        }
        , []
    )

    return (
        <>
            <h1>Contador: {counter}</h1>
            <IncrementComponent increment={incrementarPadre} />
        </>
    )
}
