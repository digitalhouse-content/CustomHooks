import { useMemo } from "react"
import { useState } from "react"

export const CalculoPesadoApp = () => {

    const [show, setShow] = useState(true)
    const [numList, setNumList] = useState([2, 3, 4, 5, 6, 7, 8, 9])

    const getCalculo = (numList) => {
        console.log('Calculando...')
        return numList.reduce((a, b) => a * b)
    }

    const addNumber = () => {
        setNumList([...numList, numList[numList.length - 1] + 1])
    }

    const memorizedValue = useMemo(() => getCalculo(numList), [numList])

    return (
        <>
            <h2>Calculos: </h2>
            <h4>El calculo es: {memorizedValue}</h4>
            {show && <p>Yo me muestro cuando quiero</p>}

            <button className="btn btn-info" onClick={() => setShow(!show)}>{show ? 'Ocultar' : 'Mostrar'}</button>
            <button className="btn btn-danger" onClick={() => addNumber()}>Agregar más números</button>
        </>
    )
}
