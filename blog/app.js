
const myHeaderProps = (props) => {
    return (
        <div>
            {Header}
        </div>
    )
}


let Header = () => {
    return <span>Design a header for your blog</span>
}
let Article = () => {
    return <span>Write and design your blog article</span>
}
let Footer = () => {
    return <span>Design a footer for your blog</span>
}

let Blog = () => {
    // return <span>Make this Component render the header, article, and footer</span>
    return <span><h1><Header/></h1>
            <h3><Article/></h3>
            <h3><Footer/></h3></span>
}


ReactDOM.render(<Blog />, document.getElementById('root'))

