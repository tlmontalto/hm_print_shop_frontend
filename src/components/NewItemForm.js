import {useState, useEffect} from 'react';
import axios from 'axios'
import {Link, useHistory} from 'react-router-dom';


// let baseURL;

// if (process.env.NODE_ENV === 'development') {
//   baseURL = 'http://localhost:5000/api/v1/';
// } else {
//   baseURL = 'https://hm-print-shop-backend.herokuapp.com/';
// }

const baseURL = 'https://hm-print-shop-backend.herokuapp.com/api/v1/'

export default function NewItemForm() {

    const history = useHistory()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')


    const submitItem = async (ev) => {
        ev.preventDefault()
        try {
            await axios.post(baseURL + 'items/', {
                name: name,
                description: description,
                file_url: file,
                img_url: image,
                price: price
            })
            history.push('/')
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="upload-page">
            <h1 className="page-title">Upload New Item:</h1>
            <form onSubmit={submitItem}>

                <div className="mb-3">
                <label for="name" className="form-label fs-4">Name: </label>
                <input onChange={(ev) => setName(ev.target.value) } className="form-control" type="text" id="name" name="name" value={name} required/>
                </div>

                <div className="mb-3">
                <label for="description" className="form-label fs-4">Description: </label>
                <input onChange={(ev) => setDescription(ev.target.value)} className="form-control" type="text" id="description" name="description" value={description} />
                </div>
                
                <div className="mb-3">
                <label for="file" className="form-label fs-4">File Folder (.zip): </label>
                <input onChange={(ev) => setFile(ev.target.value)} className="form-control" type="file" id="file" name="file" value={file} required/>
                </div>

                <div className="mb-3">
                <label for="image" className="form-label fs-4">Image Link: </label>
                <input onChange={(ev) => setImage(ev.target.value)} className="form-control" type="text" id="image" name="image" value={image}/>
                </div>
                
                <div className="mb-3">
                <label for="price" className="form-label fs-4">Price ($): </label>
                <input onChange={(ev) => setPrice(ev.target.value)} className="form-control" type="text" id="price" name="price" value={price} required/>
                </div>
                
                <button className="btn btn-secondary fs-5" type="submit">Upload</button>

            </form>

            {/* Add redirect to HomePage on submit button */}
        </div>
    )
}
