import { useEffect, useState } from 'react'

import Erro from './erro'
import Form from './form'
import Table from './table'

const App = () => {
    const [newCar, setNewCar] = useState({})
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
        if(newCar.error) {
            setErro(newCar.message)
        } else {
            setErro('')
            getCars(url)
        }
    }, [newCar])

    return (
        <>
            <Form setNewCar={setNewCar} url={url}>
                {erro && <Erro message={erro} />}
            </Form>
            <Table cars={cars} setCars={setCars} />            
        </>
    )
}

export default App