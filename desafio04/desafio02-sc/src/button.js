import styled from 'styled-components'

const ButtonStyle = styled.button`
    padding: 10px;
    border: none;
    color: white;
    background-color: ${props => props.primary ? 'blue' : 'gray'};
`

const Button = ({ kind, children }) => {
    return (
        <>
            {
                kind === 'primary' ?
                <ButtonStyle primary>{children}</ButtonStyle> :
                <ButtonStyle secondary>{children}</ButtonStyle>
            }
        </>
    )
}

export default Button