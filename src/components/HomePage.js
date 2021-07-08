import React from 'react'

export default function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <h3>Item Name</h3>
                <p>$ price</p>
                <input type="checkbox" id="like" name="like"/>
                <label for="like">Like</label>
            </div>
        </div>
    )
}
