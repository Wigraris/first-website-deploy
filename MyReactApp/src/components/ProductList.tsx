const products = [
  {name: 'Tomato', isFruit: false, id: 1},
  {name: 'banana', isFruit: true, id: 2},
  {name: 'apple', isFruit: true, id: 3},
]
export default function ListVegetables(){
  const listFruits = products.map(product => <li key = {product.id}
  style = {{color: product.isFruit ? 'green': 'magenta'}}
  >
  {product.name}
  </li>
  )
  return <ul>{listFruits}</ul>
}