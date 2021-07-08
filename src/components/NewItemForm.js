import React from 'react'

export default function NewItemForm() {
    return (
        <div>
            <h1>Upload New Item:</h1>
            <form>

                <div className="mb-3">
                <label for="name" className="form-label">Name</label>
                <input className="form-control" type="text" id="name" name="name" placeholder="Item Name"/>
                </div>
                
                <div className="mb-3">
                <label for="file" className="form-label">File</label>
                <input className="form-control" type="text" id="file" name="file" placeholder="STL/OBJ File"/>
                </div>
                
                <div className="mb-3">
                <label for="image" className="form-label">Image</label>
                <input className="form-control" type="text" id="image" name="image" placeholder="Image"/>
                </div>
                
                <div className="mb-3">
                <label for="price" className="form-label">Price ($)</label>
                <input className="form-control" type="text" id="price" name="price" placeholder="Price"/>
                </div>
                
                <input className="btn btn-primary" type="submit" value="Upload"/>
            </form>
        </div>
    )
}
