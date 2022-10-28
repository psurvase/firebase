
import React, { useEffect, useState } from 'react'
import ProductDataService from "../../services/ProductServices"
const AddProduct = ({ getProductId, setGetProductId }) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [offerPrice, setOfferPrice] = useState('')
    const [image, setImage] = useState('')

    console.log("this is id", getProductId )
    useEffect(() => {
        if(getProductId!==undefined && getProductId !==''){
            fetchProductById()
        }
       
    }, [getProductId])
    const fetchProductById = async () => {
        const editProduct = await ProductDataService.getProduct(getProductId)
        setName(editProduct.data()?.name)
        setImage(editProduct.data()?.image)
        setOfferPrice(editProduct.data()?.offerPrice)
        setPrice(editProduct.data()?.price)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const product = {
            name,
            price,
            offerPrice,
            image
        }
        try {
            
            if (getProductId !==undefined && getProductId !=='') {
                await ProductDataService.updateProduct(getProductId, product)
                alert("upadte data succesfully")
                setGetProductId('')
            } else {
                await ProductDataService.addProducts(product)
                alert("add added succesfully")
            }

        } catch (error) {
            console.log(error)
        }
        setName('')
        setImage('')
        setOfferPrice('')
        setPrice('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" placeholder='Enter Product Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='Enter Product Price' value={price} onChange={(e) => setPrice(e.target.value)} />
                <input type="text" placeholder='Enter Product Offer Price' value={offerPrice} onChange={(e) => setOfferPrice(e.target.value)} />
                <input type="text" placeholder='Enter Product Image URL' value={image} onChange={(e) => setImage(e.target.value)} />
                <button type="submit" >add/update</button>

            </form>
            <br /> <br />
        </div>
    )
}

export default AddProduct