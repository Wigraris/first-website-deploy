import { useNavigate } from "react-router-dom";
import { user } from "../App";

export default function Header(){
    const navigate = useNavigate()
    const clickHandler = () => navigate('/about')
    return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white items-center justify-center">
            <img className="w-32 h-32 rounded-full bg-gray-900 justify-center"
                src={user.imageURL}
                alt={'Photo of' + user.name} 
                />
            <p className="text-gray-400 font-bold mb-6">{user.age}</p>
            <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
            <button 
            onClick={clickHandler} 
            className="hover: text-blue-400 px-6 rounded-lg  font-bold"> Information about me</button>
        </div>)

} 