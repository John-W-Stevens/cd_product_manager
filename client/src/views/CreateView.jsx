import React from "react"
import CreateProductForm from "../components/CreateProductForm"
import DisplayAllProducts from "../components/DisplayAllProducts"

const CreateView = props => {
    const { counter, setCounter } = props

    return(
        <div>
            <CreateProductForm counter={counter} setCounter={setCounter}/>
            <DisplayAllProducts counter={counter}/>
        </div>
    )
}

export default CreateView