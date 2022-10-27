import React, { useEffect, useState } from 'react'
import { collection, doc, setDoc,addDoc, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'
import List from './List'

const Create = () => {
    const [ productList, setProductList] = useState([])
    const [product, setProduct] = useState({
        name:"",
        price:"",
        offerPrice:"",
        image:""
    })

    useEffect(()=>{
      // Fetchdata()
    },[])
  
    const Fetchdata = ()=>{
        db.collection("products").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                setInfo(arr => [...arr , data]);
                  
            });
        })
        
    }
 console.log("this is productList", productList)
    const handleChange=(e)=>{
        product[e.target.id] = e.target.value
        setProduct({...product, product})
    }
    const handleSubmitdata = async()=>{
      setProductList([...productList, product])
        await addDoc(collection(db, "products"), {
            productName: product.name,
            productPrice: product.price,
            productOfferPrice: product.offerPrice,
            productImage: product.image
          }).then(function(res){
            alert("data added succesfully")
        }).catch(function(error){
            // alert("data is not added")
        })
     
    }
  return (
    <div>
    <label>Product Name : </label>
        <input id="name" value={product.name} placeholder='Product Name' type="text" onChange={handleChange} />
        <br/> <br/>
        <label>Product Price   : </label>
        <input id="price" value={product.price} placeholder='Product Price' type="text" onChange={handleChange} />
        <br/><br/>
        <label>Product OfferPrice : </label>
        <input id="offerPrice" value={product.offerPrice} placeholder='Product offerPrice' type="text" onChange={handleChange} />
        <br/><br/>
        <label>Product Image : </label>
        <input id="image" value={product.image} type="text" placeholder='Plz Enter Url or path' onChange={handleChange} />
        <br/><br/>
        <div>
        <button onClick={handleSubmitdata} > Add product </button>
        </div>
         
         {productList && 
            productList.map((item, index)=>{
            return <List key={index} item={item} />
       })
      }
    </div>
  )
}

export default Create

