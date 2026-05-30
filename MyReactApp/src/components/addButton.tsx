import { useState } from 'react'
import {user} from '../App'
export default function ButtonForClick(){
    const [isVisible, setIsVisible] = useState(false)
    function clickSlow(){
        setIsVisible(!isVisible)
    }
    return (
            <><div className='button'>
                <button onClick ={ButtonForClick}>
                Click me 
                </button>
        </div><div className="ButtonAlert">
                <button onClick={clickSlow}>
                    {isVisible ? <p> Мне {user.age} лет</p>: null}
                </button>
            </div></>
    )
}