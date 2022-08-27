import { useState } from 'react'

const AddProduct = () => {
    const [form, setForm] = useState({})

    const sendProduct = (event) => {
        event.preventDefault() // this stops form from refreshing page
        // const newProduct = {name: "Pasta", description: "Italian Noodles", price: 12.99, exp: 3022}
    
        fetch('http://localhost:4040', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
             },
            body: JSON.stringify(form)
        })

        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
    } 


const handleForm = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
}


  return (
    <div className="container">
        <h1>Add Product</h1>
      <form className="add-form">
        <label htmlFor=""> Product Name: </label>
        <input onChange={e => handleForm(e)} type="text" placeholder="ex. Rice" name="name" id="name" />

        <label htmlFor=""> Sku: </label>
        <input onChange={e => handleForm(e)} type="number" min={0} placeholder="sku" name="sku" id="sku" />

        <label htmlFor=""> Description: </label>
        <input onChange={e => handleForm(e)} type="text" placeholder="ex. Brown Rice" name="description" id="description" />

        <label htmlFor=""> Price: </label>
        <input onChange={e => handleForm(e)} type="text" placeholder="ex. 2.48" name="price" id="price" />

        <label htmlFor=""> Exp: </label>
        <input onChange={e => handleForm(e)} type="number" placeholder="ex. 2090" name="exp" id="exp" />
        <button onClick={event => sendProduct(event)}> Add Product </button>
      </form>
    </div>
  );
};



export default AddProduct