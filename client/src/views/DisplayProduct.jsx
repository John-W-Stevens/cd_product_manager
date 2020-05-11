import React, { useState, useEffect } from "react"
import axios from "axios"

const DisplayProduct = props => {
    const { id } = props

    const [product, setProduct] = useState({})
    const [price, setPrice] = useState("")

    useEffect( () => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(response => {
            setProduct(response.data.product[0])
            setPrice(`$${response.data.product[0].price}`)
        })
        .catch(error => console.log("There was an error", error))
    }, [])

    return(
        <div className="container">
            <div className="row" style={{marginTop: "200px"}}>
                <div className="col-6 offset-3 text-center">
                    <p style={{fontSize: "30px"}}>{product.title}</p>
                    <p style={{fontSize: "20px"}}>Price: {price}</p>
                    <p style={{fontSize: "20px"}}>Description: {product.description}</p>            
                </div>
            </div>
        </div>
    )
}

export default DisplayProduct