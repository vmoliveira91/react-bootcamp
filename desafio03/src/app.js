import { useEffect, useState } from 'react'

import Erro from './erro'
import Form from './form'
import Table from './table'

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
            getCars(url)
        }
    }, [response])

    return (
        <>
            <Form setResponse={setResponse} url={url}>
                {erro && <Erro message={erro} />}
            </Form>
            <Table cars={cars} setResponse={setResponse} url={url} />            
        </>
    )
}

export default App