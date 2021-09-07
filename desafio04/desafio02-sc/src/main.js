import Heading from './heading'

import styled from 'styled-components'

const MainStyle = styled.main`
    grid-area: main;
    border-bottom: 1px solid black;
    height: auto;
    display: flex;
    flex-direction: column;
    text-align: justify;

    justify-content: center;
    align-items: center;
    width: 100%;
`

const Main = ({ title, content }) => {
    return (
        <MainStyle className="main container">
            <Heading type="2">{title}</Heading>
            {content}
        </MainStyle>
    )
}

export default Main