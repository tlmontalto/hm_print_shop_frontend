import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

const baseURL = 'http://localhost:5000/api/v1/'


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
        <div>
            <h1>Display Page</h1>
            <div>
                <h2>{item.name}</h2>
                <img className="display-img" src={item.img_url}/>
                <h3>{item.description}</h3>
                <h3>{item.price}</h3>
            </div>
        </div>
    )
}
