const Table = ({cars, setCars, setResponse, url}) => {
    const handleDelete = async (e, plate) => {
        const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    plate: plate,
                })
            })
            .then(result => result.json())
        
        setResponse(response)
        setCars(previousState => previousState.filter(car => car.plate !== plate))
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Imagem (URL)</th>
                    <th>Marca / Modelo</th>
                    <th>Ano</th>
                    <th>Placa</th>
                    <th>Cor</th>
                    <th>Deletar</th>  
                </tr>
            </thead>
            <tbody>
                {
                cars !== null && cars.length !== 0
                ? cars.map((car) => {
                    return (
                        <tr key={car.plate}>
                            <td>{car.image}</td>
                            <td>{car.brandModel}</td>
                            <td>{car.year}</td>
                            <td>{car.plate}</td>
                            <td>{car.color}</td>
                            <td>
                                <button onClick={(e) => handleDelete(e, car.plate)}>Deletar</button>
                            </td>
                        </tr>
                    )
                })
                : <tr><td>Nenhum carro encontrado</td></tr>
                }
            </tbody>
        </table>
    )
}

export default Table