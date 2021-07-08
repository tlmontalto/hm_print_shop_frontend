import React from 'react'

export default function Item() {
    return (
        <div>
            <h3>Item Name</h3>
            <p>$ price</p>
            <input type="checkbox" id="like" name="like"/>
            <label for="like">Like</label>
        </div>
    )
}
