import {useState, useEffect} from 'react'
import { ProductCard } from '../components/ProductCard'


const Home = () => {
const [products, setProducts] = useState([])

useEffect(() => {
    fetch('https://localhost:4040')
    .then(res => res.json())
    .then (data => setProducts(data))
    .catch (err => console.error(err))
}, [])

const allProducts = products.map(product => {
    console.log(product)
    return <ProductCard key={product._id} product={product} />
})

    return (
        <div className='container'>
        <h1>Home component</h1>
        <div className='products'>{allProducts}</div>
        </div>
    )
}

export default Home