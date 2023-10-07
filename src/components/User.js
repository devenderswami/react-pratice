import {useState} from "react"
const User = ({name}) =>{
    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState( )
    return <div className="user-card">
        <h1>Count:{count}</h1>
        <h2>Name:{name}</h2>
        <h3>Location:Haryana</h3>
        <h4>Contact:@Coder007</h4>
    </div>
}

export default User; 