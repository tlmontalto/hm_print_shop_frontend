import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const baseURL = 'http://localhost:5000/api/v1/'

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
        <div>
            <h1>Home Page</h1>

            <div className="all-items">
                {items.map((item, i) => (
                    // fragment
                    <div className="single-item" key={item.id} >
                        <Link to={`/display/${item.id}`}>
                        <h3>{item.name}</h3>
                        <h4>${item.price}</h4>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
