const Sidebar = ({ posts, title, content }) => {

    const setValues = (currentTitle, currentContent) => {
        title(currentTitle)
        content(currentContent)
    }

    return (
        <aside className="sidebar container">
            <ul>
                {posts.map((post) => (
                    <li key={post.id}><a href="/#" onClick={() => setValues(post.title, post.content)}>{post.title}</a></li>
                ))}
            </ul>
        </aside>
    )
}

export default Sidebar