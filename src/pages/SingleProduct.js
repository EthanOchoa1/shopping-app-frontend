import {useLocation} from 'react-router-dom'


const SingleProduct = () => {
    const location =useLocation()
const {name, description, sku, price, exp, index} = location.state

const handleDelete = (event) => {
    event.preventDefault()
    console.log('Sending to API for delete')

    fetch(`http://localhost:4040?name=${name}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
             },
        })

        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))

        console.log('product sent to API')
}


const handleUpdate = (event) => {
    event.preventDefault()
    console.log('Sending to API for update')
    const addSpecial = { special: true }

    fetch(`http://localhost:4040?name=${name}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
             },
             body: JSON.stringify(addSpecial)
        })

        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))

        console.log('product sent to API')
}
    return (
        <div className="container">
            <div className="single-product">
            <img src={`https://source.unsplash.com/random?sig=${index}`} alt="" />
                <h1> {name} </h1>
                <h3> {price} </h3>
                <h4> {sku} </h4>
                <p> {description} </p>
                <p><b>Price:  </b> ${price}</p> 
                <p><b>Exp: </b> ${exp} </p>
                <button onClick={handleDelete()}>Delete Product</button>
                <button onClick={handleUpdate()}>Delete Product</button>
            </div>
        </div>
    )
}

export default SingleProduct