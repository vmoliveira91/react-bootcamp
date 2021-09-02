import Heading from './heading'

const Main = ({ title, content }) => {
    return (
        <main className="main container">
            <Heading type="2">{title}</Heading>
            {content}
        </main>
    )
}

export default Main