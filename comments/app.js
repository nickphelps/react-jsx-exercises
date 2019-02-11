const submitButton = document.getElementById('submitButton')
const UserInput = () => {
    const userComment = document.getElementById('commentInput').value
    const userName = document.getElementById('userNameInput').value
    
    const myBody = (

        <span>
                <div className="card" Style="width: 18rem;">
                    <img src="images/theRock.jpg" className="card-img-top"/>
                </div>
                <div className="card-body">
                <h5 className="card-title">{userName}</h5>
            </div>
            
        <div>
            <h4 Style="margin: 1%;">{userComment}</h4>
        </div>
        </span>
    )
    return ReactDOM.render(myBody, document.getElementById('commentBody'))
}

submitButton.addEventListener('click', UserInput)

let ProfilePic = () => {
    return <span><img src="images/theRock.jpg"></img></span>
}

let CommentHeader = () => {
    return <span>Hello... Welcome to The Rock's Page. Please enter your Rock Comment!</span>
}

let CommentBodyTop = () => {
    return 
}

let CommentBodyBottom = () => {
    return 
}

let Comments = () => {
    return <span>Make this component render a list of comments</span>
}

const myHeader = (
        <div>
            <ProfilePic />
            <h2><CommentHeader /></h2>
        </div>
    )

ReactDOM.render(myHeader, document.getElementById('commentHeader'))






