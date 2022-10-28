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
            <table>
                <tr>
                    <th>sr.no</th>
                    <th> Name</th>
                    <th>Price</th>
                    <th>Offer Price</th>

                </tr>

                {products.map((item, index) => {
                    return (
                        < >
                            <tr key={index}>
                                <td>{index + 1} .</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.offerPrice}</td>
                                <td><button onClick={(e) => getData(item.id)} >Edit</button></td>
                                <td><button onClick={(e) => deleteProductId(item.id)} >Delete</button></td>
                            </tr>


                        </>
                    )
                })}
            </table>
        </div>
    )
}

export default ProductList