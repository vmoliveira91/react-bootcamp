const Form = ({ setNewCar, url, children }) => {

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
        
        setNewCar(response)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="image">
                    Imagem (URL):
                    <input type="text" name="image"/>
                </label>
                
                <label htmlFor="brandModel">
                    Marca / Modelo:
                    <input type="text" name="brandModel"/>
                </label>

                <label htmlFor="year">
                    Ano:
                    <input type="text" name="year"/>
                </label>

                <label htmlFor="plate">
                    Placa:
                    <input type="text" name="plate"/>
                </label>

                <label htmlFor="color">
                    Cor:
                    <input type="text" name="color"/>
                </label>

                <button type="submit" data-js="addCar">Adicionar carro</button>

                {children}
            </form>            
        </>
    )
}

export default Form