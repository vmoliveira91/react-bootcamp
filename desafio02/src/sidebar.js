const Sidebar = ({ posts }) => {
    return (
        <aside className="sidebar container">
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </aside>
    )
}

export default Sidebar