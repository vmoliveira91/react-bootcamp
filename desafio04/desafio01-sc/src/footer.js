import Heading from './heading'

import styled from 'styled-components'

const FooterStyle = styled.footer`
    grid-area: footer;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
`

const Footer = () => {
    return (
        <FooterStyle>
            <Heading type="2">Footer</Heading>
        </FooterStyle>
    )
}

export default Footer