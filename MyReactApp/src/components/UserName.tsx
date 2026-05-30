import { useState } from "react";
import {user} from '../App';
export default function Age(){
    const [isNameVisible,setIsNameVisible] = useState(false)
    function Show() {
        setIsNameVisible(!isNameVisible)
    }
    return(<><button onClick = {Show}> Показать имя</button>
    {isNameVisible ? <p>Твое имя {user.name}</p>: null}
    </>)
}

// // import './App.css'
// import About from './components/About'
// import Header from './components/Header'
// import ListVegetables from'./components/ProductList'
// import Stack from './components/Stack'
// import Age from './components/UserName'
// import ButtonForClick from './components/addButton'
// import MyButton from './components/count'

// export const user = {
//   name: 'Disa',
//   age: 18,
//   imageURL: 'https://www.comboinfinito.com.br/principal/wp-content/uploads/2023/07/jujutsu-kaisen-toji-fushiguro.jpg',
//   imageSize: 90,
// }
// export default function MyApp(){
//   return(
//     <>
//     <h1>{user.name}</h1>
//     <Header/>
//     <About/>
//     <Stack/>
//     <div className="Profile">
//       <img className="Me"
//       src={user.imageURL}
//       alt={'Photo of' + user.name}
//       />
//         <p>{user.age}</p>
//       </div>
//       <ListVegetables />
//       <MyButton />
//       <ButtonForClick />
//       <Age/>
//     </>
//   )
// }
