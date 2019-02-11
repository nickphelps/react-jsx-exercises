const myProps = {
    picture: <img src="images/windowsLogo.jpg"/>
}

let FirstComponent = () => {
    // return <span>Make this component render like the Windows Logo: <a href="https://goo.gl/images/mY5Qdv" target="_blank">https://goo.gl/images/mY5Qdv</a></span>
    return <span>{myProps.picture}</span>
}

ReactDOM.render(<FirstComponent />, document.getElementById('root'))

