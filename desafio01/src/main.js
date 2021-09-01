import Heading from './heading'

const Main = () => {
    return (
        <main className="main container">
            <Heading type="2">Conteúdo</Heading>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula nunc a porta condimentum. Cras placerat pretium ullamcorper. Quisque vestibulum placerat massa, nec aliquet dolor. Curabitur tellus nunc, ultricies eu lacinia et, tincidunt ac lectus. Suspendisse pulvinar rhoncus odio nec porta. Pellentesque augue justo, interdum et feugiat vitae, interdum vel elit. Cras suscipit mi et ex lacinia, quis consectetur mi mattis. Morbi nec ligula mi. Sed sit amet malesuada mauris, finibus euismod eros.</p>
            <ul>
                <li>Quisque fringilla</li>
                <li>Suspendisse potenti</li>
                <li>Vestibulum ante ipsum</li>
            </ul>
        </main>
    )
}

export default Main