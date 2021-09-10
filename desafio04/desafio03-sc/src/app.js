import { useEffect, useState } from 'react'
import { createGlobalStyle } from 'styled-components'

import Erro from './erro'
import Form from './form'
import Table from './table'

const GlobalStyle = createGlobalStyle`
    #root {
        display: grid;
        grid-template-columns: .5fr 1fr;
        background-color: hsl(185, 41%, 84%);
        width: 100%;
        height: 100vh;

        font-family: sans-serif;
    }
`

const App = () => {
    const [response, setResponse] = useState({})
    const [cars, setCars] = useState([])
    const [erro, setErro] = useState('')

    const url = 'http://localhost:3333/cars'

    const getCars = async (url) => {
        const result = await fetch(url)
            .then(response => response.json())
            .then(response => setCars(response))
        
        return result
    }

    useEffect(() => {
        getCars(url)
    }, [])

    useEffect(() => {
        if(response.error) {
            setErro(response.message)
        } else {
            setErro('')
        }
    }, [response])

    return (
        <>
            <GlobalStyle />
            <Form setCars={setCars} setResponse={setResponse} url={url}>
                {erro && <Erro message={erro} />}
            </Form>
            <Table cars={cars} setCars={setCars} setResponse={setResponse} url={url} />            
        </>
    )
}

export default App