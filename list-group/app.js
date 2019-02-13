let ListGroupItem = () => {
    return <span><ul class="list-group">
    <li className="list-group-item active">Cras justo odio</li>
    <li className="list-group-item">Dapibus ac facilisis in</li>
    <li className="list-group-item">Morbi leo risus</li>
    <li className="list-group-item">Porta ac consectetur ac</li>
    <li className="list-group-item">Vestibulum at eros</li>
  </ul><br></br>
  </span>
}

let ListGroup = () => {
    return <span><ListGroupItem /><br></br>
                <ListGroupItem />
            </span>
}

const InputForm = () => {
    return <span>
        <form>
            Please Enter number of Bootstrap List Groups: <input id="userInput" type="text"></input>
            <input id="submitButton" type="button" value="Enter" />
        </form><br></br>
    </span>
}

const UserInput = () => {
        const userInputValue = document.getElementById('userInput').value
        let myRenderHTML = []
        for (let i = 0; i < userInputValue; i++) {
            myRenderHTML.push(<ListGroupItem />)
        }      
        myRenderHTML.unshift(<InputForm />)
        myRenderHTML.join('')
        ReactDOM.render(myRenderHTML, document.getElementById('user-input'))
}

//common way of rentering
// let fruits = ['cherry, orange, strawberry']

// {myFruits.map(funcion (name) {
//     return <MyFirstComponent name={name}/>
// })}

ReactDOM.render(<InputForm />, document.getElementById('user-input'))

const submitButton = document.getElementById('submitButton')
submitButton.addEventListener('click', UserInput)