
import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react'
import { db } from '../../firebase';

const List = ({item}) => {
 
  const deleteById=async(id)=>{
    await deleteDoc(doc(db, "products", id));
  }

  return (
    <div style={{textAlign:"center"}} >
      <h6>{item.productName}</h6>
      <h6>{item.productPrice}</h6>
      <h6>{item.productOfferPrice}</h6>
      <img src={item.productImage} alt={item.productImage} />
      <h6>{item.productOfferPrice}</h6>
      <button onClick={()=>deleteById(item.id)} >Delete</button>
    </div>
  )
}

export default List