import { useState, useEffect } from 'react';
import axios from 'axios';

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
            <div>
                {items.map((item, i) => (
                    // fragment
                    <div key={i} >
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
