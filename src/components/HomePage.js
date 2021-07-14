import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

let baseURL;

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:5000/api/v1/';
} else {
  baseURL = 'https://hm-print-shop-backend.herokuapp.com/';
}

export default function HomePage() {

    const [items, setItems] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(baseURL + 'items')
            setItems(res.data.data)
        }
        fetchData()
    }, [])

    return (
        <div className="homepage">
            {/* <h1 className="page-title">Home Page</h1> */}

            <div className="all-items">
                {items.map((item, i) => (
                    // fragment
                    <Link className="single-item" to={`/display/${item.id}`} key={item.id}>
                    <h3 className="home-name">{item.name}</h3>
                    <img className="home-images" src={item.img_url}/>
                    <h4 className="home-price">${item.price}</h4>
                    </Link>
                ))}
            </div>
        </div>
    )
}
