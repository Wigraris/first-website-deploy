import './App.css'
import {Routes,Route} from 'react-router-dom'
import About from './components/About'
import Header from './components/Header'
import Stack from './components/Stack'
import Navbar from './components/Navbar'

// eslint-disable-next-line react-refresh/only-export-components
export const user = {
  name: 'Disa',
  age: 18,
  imageURL: 'https://www.comboinfinito.com.br/principal/wp-content/uploads/2023/07/jujutsu-kaisen-toji-fushiguro.jpg',
  imageSize: 90,
}
export default function MyApp(){
  return(
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/stack' element={<Stack/>}/>
      </Routes>
    </>
  )
}

