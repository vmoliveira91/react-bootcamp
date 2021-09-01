const Button = ({ kind, children }) => {
    return (
        <button className={kind}>{children}</button>
    )
}

export default Button