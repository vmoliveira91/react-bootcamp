import { useState } from 'react'

import Heading from './heading'

const Main = ({ titleProps, contentProps }) => {
    const [title, setTitle] = useState(titleProps)
    const [content, setContent] = useState(contentProps)

    return (
        <main className="main container">
            <Heading type="2">{title}</Heading>
            {content}
        </main>
    )
}

export default Main