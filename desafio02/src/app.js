import Header from './header'
import Nav from './nav'
import Sidebar from './sidebar'
import Main from './main'
import Footer from './footer'

const posts = [
    {
        id: 1,
        title: 'What is Lorem Ipsum?',
        content: ''
    },
    {
        id: 2,
        title: 'Why do we use it?',
        content: ''
    },
    {
        id: 3,
        title: 'Where does it come from?',
        content: ''
    },
    {
        id: 4,
        title: 'Where can I get some?',
        content: ''
    },
]

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <Sidebar posts={posts} />
            <Main />
            <Footer />
        </>
    )
}

export default App