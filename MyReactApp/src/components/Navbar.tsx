import {Link} from 'react-router-dom'

export default function Navbar(){
    return (
        <nav className='flex gap-8 px-8 py-4 bg-gray-900 text-white'>
            <Link to = '/' className ='hover: text-blue-400'>Главная</Link>
            <Link to = '/about' className ='hover: text-blue-400'>Обо мне</Link>
            <Link to = '/stack' className ='hover: text-blue-400'>Стэк</Link>
        </nav>
    )
}