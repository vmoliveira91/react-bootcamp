import styled from "styled-components"

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
    height: 500px;
    margin: 20px;
    padding-left: 20px;
    padding-right: 20px;

    background-color: white;
    border-radius: 10px;
`

const LabelStyle = styled.label`
    margin-top: 10px;

    color: hsl(184, 14%, 56%);
    font-weight: bold;
`

const InputStyle = styled.input`
    width: 100%;    
    height: 30px;
    margin-top: 10px;
    box-sizing: border-box;
    
    background-color: hsl(189, 41%, 97%);

    border: none;
    border-radius: 5px;
    box-sizing: border-box;
`

const ButtonStyle = styled.button`
    width: 150px;
    height: 30px;
    margin-top: 20px;

    align-self: flex-end;
    
    background-color: #0d686d;

    border: none;
    border-radius: 5px;
    box-sizing: border-box;

    color: white;
    font-size: 16px;
    font-weight: bold;
`

const Form = ({ setResponse, url, children }) => {

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newCar = {
            image: e.target.elements.image.value,
            brandModel: e.target.elements.brandModel.value,
            year: e.target.elements.year.value,
            plate: e.target.elements.plate.value,
            color: e.target.elements.color.value
        }

        const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newCar)
            })
            .then(result => result.json())
        
        if(!response.error)
            e.target.reset()
        
        setResponse(response)
    }

    return (
        <FormStyle onSubmit={handleSubmit}>
            <LabelStyle><h2>Cadastro de Carros</h2></LabelStyle>

            <LabelStyle htmlFor="image">Imagem (URL):</LabelStyle>
            <InputStyle type="text" name="image"/>
            
            <LabelStyle htmlFor="brandModel">Marca / Modelo:</LabelStyle>
            <InputStyle type="text" name="brandModel"/>
            
            <LabelStyle htmlFor="year">Ano:</LabelStyle>
            <InputStyle type="text" name="year"/>
            
            <LabelStyle htmlFor="plate">Placa:</LabelStyle>
            <InputStyle type="text" name="plate"/>            

            <LabelStyle htmlFor="color">Cor (Hexadecimal):</LabelStyle>
            <InputStyle type="text" name="color"/>            

            <ButtonStyle type="submit" data-js="addCar">Adicionar</ButtonStyle>

            {children}
        </FormStyle>            
    )
}

export default Form