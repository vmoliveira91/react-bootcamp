const Sidebar = ({ posts }) => {
    return (
        <sidebar className="sidebar container">
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </sidebar>
    )
}

export default Sidebar