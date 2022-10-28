import React, { useEffect, useState } from 'react'
import ProductDataService from "../../services/ProductServices"
const ProductList = ({ getData }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        AllProduct()
    }, [])
    const AllProduct = async () => {
        const data = await ProductDataService.getAllProducts()
        setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    const deleteProductId = async (id) => {
        await ProductDataService.deleteProduct(id)
        AllProduct()
    }
    return (
        <div>
            <div>
                <button type="submit" onClick={AllProduct} >Refresh data</button>
            </div>
            {products.map((item, index) => {
                return (
                    <div key={index}>
                        <h3> <span>{index + 1} . </span> <span>{item.name}</span> <span>{item.price}</span> <span>{item.offerPrice}</span>
                            <button onClick={(e) => getData(item.id)} >Edit</button>
                            <button onClick={(e) => deleteProductId(item.id)} >Delete</button></h3>

                    </div>
                )
            })}
        </div>
    )
}

export default ProductList