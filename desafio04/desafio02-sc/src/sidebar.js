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

const Sidebar = ({ posts, title, content }) => {

    const setValues = (currentTitle, currentContent) => {
        title(currentTitle)
        content(currentContent)
    }

    return (
        <SidebarStyle className="sidebar container">
            <ul>
                {posts.map((post) => (
                    <li key={post.id}><a href="/#" onClick={() => setValues(post.title, post.content)}>{post.title}</a></li>
                ))}
            </ul>
        </SidebarStyle>
    )
}

export default Sidebar