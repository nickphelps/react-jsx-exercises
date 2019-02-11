let TextInput = () => {
    return <span>
        <form>
            UserName: <input id="uname" type="text" name="uname"/><br></br>
            First Name: <input id="fname" type="text" name="fname"/><br></br>
            Last Name: <input id="lname" type="text" name="lname"/><br></br>
        </form>
    </span>
}

let YesNoRadio = () => {
    return <span>
            <input id="studentRadio" type="radio" name="studentOrTeacher" value="Student"/>Student
            <input id="teacherRadio" type="radio" name="studentOrTeacher" value="Teacher"/>Teacher
        </span>
}

let SubmitButton = () => {
    return <span>  
            <input id="submitButton" type="button" value="Submit"/>
        </span>
}

let Form = () => {
    return <span>Make this Component render a form tag with 3 text inputs, two yes/no radio buttons, and a submit button 
                <TextInput />
                <YesNoRadio /> <br></br>
                <SubmitButton />
            </span>
}


ReactDOM.render(<Form />, document.getElementById('root'))

const byID = (id) => document.getElementById(id)

const RadioButtonLogic = () => {
    if (byID('teacherRadio').checked === true) {
        return 'Teacher'
    } else if (byID('studentRadio').checked === true) {
        return 'Student'
    }
}
const UserInput = () => {
    const userName = byID('uname').value
    const firstName = byID('fname').value
    const lastName = byID('lname').value
    // const userStatus

    const myBody = (
        <span>
            <h4>Hello {firstName} {lastName}!</h4>
            <h4>Your UserName is: {userName}</h4>
            <h4>You are registered as a <RadioButtonLogic /></h4>
        </span>
    )
        return ReactDOM.render(myBody, byID('userStatusBody'))
}
const submitButton = byID('submitButton')
submitButton.addEventListener('click', UserInput)


