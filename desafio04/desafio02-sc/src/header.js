import Heading from './heading'

import styled from 'styled-components'

const HeaderStyle = styled.header`
    grid-area: header;   
    border-bottom: 1px solid black;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
`

const Header = () => {
    return (
        <HeaderStyle className="header container">
            <Heading type="1">Header</Heading>
        </HeaderStyle>
    )
}

export default Header