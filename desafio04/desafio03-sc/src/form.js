import styled from "styled-components"

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
`

const LabelStyle = styled.label`
    width: 200px;
    margin-top: 10px;
`

const InputStyle = styled.input`
    margin-top: 10px;
`

const ButtonStyle = styled.button`
    margin-top: 15px;
    width: 177px;
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
            <LabelStyle htmlFor="image">
                Imagem (URL):
                <InputStyle type="text" name="image"/>
            </LabelStyle>
            
            <LabelStyle htmlFor="brandModel">
                Marca / Modelo:
                <InputStyle type="text" name="brandModel"/>
            </LabelStyle>

            <LabelStyle htmlFor="year">
                Ano:
                <InputStyle type="text" name="year"/>
            </LabelStyle>

            <LabelStyle htmlFor="plate">
                Placa:
                <InputStyle type="text" name="plate"/>
            </LabelStyle>

            <LabelStyle htmlFor="color">
                Cor:
                <InputStyle type="text" name="color"/>
            </LabelStyle>

            <ButtonStyle type="submit" data-js="addCar">Adicionar carro</ButtonStyle>

            {children}
        </FormStyle>            
    )
}

export default Form