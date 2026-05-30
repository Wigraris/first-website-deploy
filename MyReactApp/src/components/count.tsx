import { useState } from "react"
export default function MyButton(){
    const [count,setCount] = useState(0)

    function AddClick(){
    setCount(count + 1)
    }
    return (
        <button onClick={AddClick}> 
        Clicked {count} times
        </button>
    )
}
