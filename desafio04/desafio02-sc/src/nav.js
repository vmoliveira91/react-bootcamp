import Button from './button'

import styled from 'styled-components'

const NavStyle = styled.nav`
    grid-area: nav;
    border-bottom: 1px solid black;
    justify-content: space-around;

    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
`

const Nav = () => {
    return (
        <NavStyle className="nav container">
            <Button kind="primary">Primary</Button>
            <Button kind="secondary">Secondary</Button>
        </NavStyle>
    )
}

export default Nav