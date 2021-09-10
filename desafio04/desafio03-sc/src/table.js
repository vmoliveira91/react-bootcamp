import styled from "styled-components"

const TableStyle = styled.table`
    height: 500px;
    margin: 20px;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;

    background-color: hsl(183, 100%, 15%);
    border-radius: 10px;

    color: white;
    text-align: center;
`

const ThStyle = styled.th`
    width: ${props => props.width}px;
`

const ImgStyle = styled.img`
    width: 100px;
    height: 100px;

    border-radius: 5px;
`

const ColorStyle = styled.div`
    width: 45px;
    height: 45px;
    background-color: ${props => props.color};

    margin-left: auto;
    margin-right: auto;

    border-radius: 30px;
`

const ButtonStyle = styled.button`
    width: 150px;
    height: 30px;

    background-color: #a0e7df;

    border: none;
    border-radius: 5px;
    box-sizing: border-box;

    color: hsl(184,14%,56%);
    font-size: 16px;
    font-weight: bold;
`


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
        <TableStyle>
            <thead>
                <tr>
                    <ThStyle width="150">Imagem (URL)</ThStyle>
                    <ThStyle width="100">Marca / Modelo</ThStyle>
                    <ThStyle width="40">Ano</ThStyle>
                    <ThStyle width="60">Placa</ThStyle>
                    <ThStyle width="60">Cor</ThStyle>
                    <ThStyle width="100">Deletar</ThStyle>  
                </tr>
            </thead>
            <tbody>
                {
                cars !== null && cars.length !== 0
                ? cars.map((car) => {
                    return (
                        <tr key={car.plate}>
                            <td><ImgStyle src={car.image}/></td>
                            <td>{car.brandModel}</td>
                            <td>{car.year}</td>
                            <td>{car.plate}</td>
                            <td><ColorStyle color={car.color}/></td>
                            <td>
                                <ButtonStyle onClick={(e) => handleDelete(e, car.plate)}>Deletar</ButtonStyle>
                            </td>
                        </tr>
                    )
                })
                : <tr><td>Nenhum carro encontrado</td></tr>
                }
            </tbody>
        </TableStyle>
    )
}

export default Table