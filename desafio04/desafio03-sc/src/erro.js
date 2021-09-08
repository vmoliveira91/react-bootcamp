import styled from "styled-components"

const ErroStyle = styled.p`
    font-weight: bold;
    color: red;
`

const Erro = ({ message }) => {
    return (
        <ErroStyle className="erro">{message}</ErroStyle>
    )
}

export default Erro