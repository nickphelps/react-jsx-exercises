const byID = (id) => document.getElementById(id)

const myProps = {
    name: 'Nick',
    children: 'child'
}

const MyFirstComponent = (props) => {
    return (
        <div>
        <h2 className='myClass'>
            This is a {props.name} that I made. 
        </h2>
        <div className="blog-body">
            {props.children}
        </div>
        </div>
    )
}
//{} -> brackets lets you run javascript
const myElement = (<div>
                    Hello World! {Math.floor(Math.random() * 11)} 
                    <h1 Style="color: red;">My Name is Nick</h1>
                    <MyFirstComponent name='Nick'>
                        <span>Monkeys</span>
                    </MyFirstComponent>

                    <MyFirstComponent name='Phelps'/>
                    <MyFirstComponent name='Pizza'/>
        </div>)

ReactDOM.render(myElement, byID('root'))