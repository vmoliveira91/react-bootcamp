import Header from './header'
import Nav from './nav'
import Sidebar from './sidebar'
import Main from './main'
import Footer from './footer'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    #root {
        display: grid;
        grid-template-areas: 
            "header header header"
            "nav nav nav"
            "sidebar main main"
            "footer footer footer";
        border: 1px solid black;
    }
`

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Nav />
            <Sidebar />
            <Main />
            <Footer />
        </>
    )
}

export default App