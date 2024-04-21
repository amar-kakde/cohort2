export function CreateTodo(){
    return <div>
        <input style={{
            padding:10,
            margin:10,
        }} type="text" placeholder="title"></input>
        <br></br>
        <input type="text" placeholder="description"></input>
        <br></br>
        <button>Add a Todo</button>
    </div>
}

