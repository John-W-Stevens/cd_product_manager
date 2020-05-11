import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "@reach/router"

const DisplayAllProducts = props => {

    const { counter } = props
    const [products, setProducts] = useState([])

    useEffect( () => {
        axios.get("http://localhost:8000/api/products")
            .then(response => setProducts(response.data.Products))
            .catch(err => console.log("There was an error", err))
    }, [counter.count])

    const getId = item => {
        return `/products/${item._id}`
    }

    return(
        <div className="container">
            <div className="row" style={{borderTop: "1px solid lightgrey"}}>
                <div className="col-6 offset-3 text-center" style={{marginTop: "10px"}}>
                    <h2> All Products</h2>
                </div>
                <div className="col-6 offset-3 text-center">
                    {
                        products.map( (item, i)=> 
                            <p key={i*20}><Link to={ getId(item) } key={ i }>{item.title}</Link></p>
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default DisplayAllProducts