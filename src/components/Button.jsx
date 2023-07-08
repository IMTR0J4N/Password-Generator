export default function Button({ onClick, children, ...props}) {
    return (
        <button className="bg--green--light--6 border--none text--black h--2 w--6-6" onClick={onClick} {...props}>{children}</button>
    )
}