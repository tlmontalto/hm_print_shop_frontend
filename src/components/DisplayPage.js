import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

let baseURL;

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:5000/api/v1/';
} else {
  baseURL = 'https://hm-print-shop-backend.herokuapp.com/';
}


export default function DisplayPage({ match }) {

    const [item, setItem] = useState([])

    useEffect(() => {
        async function fetchItemData() {
            const res = await axios.get(`${baseURL}/items/${match.params.id}`)

            setItem(res.data.data)
            // console.log(match.params.id)
        }
        fetchItemData()
    }, [])

    return (
        <div className="displaypage">
            <div className="display-item">
                <h2>{item.name}</h2>
                <img className="display-img" src={item.img_url}/>
                <h5>{item.description}</h5>
                <h3>${item.price}</h3>
            </div>
        </div>
    )
}
