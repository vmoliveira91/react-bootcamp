const Form = () => {

    const handleSubmit = () => {

    }

    return (
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
        </form>
    )
}

export default Form