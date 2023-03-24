
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import Banner from '../Componenets/Banner/Banner';
import Header from '../Componenets/Header/Header';
import Posts from '../Componenets/Posts/Posts';

function Home(props) {
 
    const [products, setProducts]=useState([])
    useEffect(()=>{
      (async function(){
          let {data}= await axios.get("/products");
          setProducts(data.products)
          console.log("hai")
      })()
    },[])

  return (
    <div className="homeParentDiv">
        <Header/>
        <Banner/>
        <Posts products={products} />
    
  
    </div>
  );
}

export default Home;