import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Componenets/Header/Header';
import View from '../Componenets/View/View';



function ViewPost(props) {
    const {id}=useParams();
    return (
        <div>
            <Header />
            <View id={id} />
        </div>
    )
}

export default ViewPost