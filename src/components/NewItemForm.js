import {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';


const baseURL = 'http://localhost:5000/api/v1/'

export default function NewItemForm() {

    const [name, setName] = useState('')
    const [file, setFile] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')


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

    // const redirectHome = () => {
    //     return <Redirect to='/'/>
    // }

    return (
        <div className="mx-3">
            <h1>Upload New Item:</h1>
            <form onSubmit={submitItem}>

                <div className="mb-3">
                <label for="name" className="form-label">Name: </label>
                <input onChange={(ev) => setName(ev.target.value) } className="form-control" type="text" id="name" name="name" value={name} />
                </div>
                
                <div className="mb-3">
                <label for="file" className="form-label">File Folder (.zip): </label>
                <input onChange={(ev) => setFile(ev.target.value)} className="form-control" type="file" id="file" name="file" value={file} />
                </div>
                
                <div className="mb-3">
                <label for="description" className="form-label">Description: </label>
                <input onChange={(ev) => setDescription(ev.target.value)} className="form-control" type="text" id="description" name="description" value={description} />
                </div>
                
                <div className="mb-3">
                <label for="price" className="form-label">Price ($): </label>
                <input onChange={(ev) => setPrice(ev.target.value)} className="form-control" type="text" id="price" name="price" value={price}/>
                </div>
                
                <button className="btn btn-primary" type="submit">Upload</button>

            </form>

            {/* Add redirect to HomePage on submit button */}
        </div>
    )
}
