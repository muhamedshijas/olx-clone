
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../Componenets/Header/Header'
import Posts from '../Componenets/Posts/Posts'


import { authContext } from '../context/AuthContext'

function Search() {
    const [products, setProducts] = useState([])
    const { search, category } = useContext(authContext)

    useEffect(() => {
        (async function () {
            let { data } = await axios.get("/products?search="+search+"&category="+category.trim());
            setProducts(data.products)
        })()
    }, [search, category])
    return (
        <>
            <Header/>
            <br />
            <br />
            <br />
            <Posts products={products} />
        </>
    )
}

export default Search