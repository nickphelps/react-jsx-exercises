const myProps = {
    picture: <img src="images/windowsLogo.jpg"/>
}

let FirstComponent = () => {
    return <span>{myProps.picture}</span>
}

ReactDOM.render(<FirstComponent />, document.getElementById('root'))

