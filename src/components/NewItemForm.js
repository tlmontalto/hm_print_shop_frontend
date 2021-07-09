import {useState, useEffect} from 'react';
import axios from 'axios'



const baseURL = 'http://localhost:5000/api/v1/'

export default function NewItemForm() {

    const [name, setName] = useState('')
    const [file, setFile] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    const [items, setItems] = useState([])

    const submitItem = async (ev) => {
        ev.preventDefault()
        try {
            await axios.post(baseURL + 'items/', {
                name: name,
                file_url: file,
                description: description,
                price: price 
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h1>Upload New Item:</h1>
            <form onSubmit={submitItem}>

                <div className="mb-3">
                <label for="name" className="form-label">Name: </label>
                <input onChange={(ev) => setName(ev.target.value) } className="form-control" type="text" id="name" name="name" placeholder="Item Name" value={name} />
                </div>
                
                <div className="mb-3">
                <label for="file" className="form-label">File: </label>
                <input onChange={(ev) => setFile(ev.target.value)} className="form-control" type="text" id="file" name="file" placeholder="STL/OBJ File" value={file}/>
                </div>
                
                <div className="mb-3">
                <label for="image" className="form-label">Description: </label>
                <input onChange={(ev) => setDescription(ev.target.value)} className="form-control" type="text" id="image" name="image" placeholder="Image" value={description} />
                </div>
                
                <div className="mb-3">
                <label for="price" className="form-label">Price ($): </label>
                <input onChange={(ev) => setPrice(ev.target.value)} className="form-control" type="text" id="price" name="price" placeholder="Price" value={price}/>
                </div>
                
                <input className="btn btn-primary" type="submit" value="Upload"/>
            </form>
        </div>
    )
}
