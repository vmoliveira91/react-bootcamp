import Heading from './heading'

import styled from 'styled-components'

const SidebarStyle = styled.aside`
    grid-area: sidebar;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const Sidebar = () => {
    return (
        <SidebarStyle>
            <Heading type="2">Sidebar</Heading>
        </SidebarStyle>
    )
}

export default Sidebar