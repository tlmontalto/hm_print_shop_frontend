import React from 'react'

export default function NewItemForm() {
    return (
        <div>
            <form>
                <input type="text" id="name" name="name" placeholder="Item Name"/>
                
                <input type="text" id="file" name="file" placeholder="STL/OBJ File"/>

                <input type="text" id="image" name="image" placeholder="Image"/>

                <input type="text" id="price" name="price" placeholder="Price"/>

                <input type="submit" value="Add Puppy"/>
            </form>
        </div>
    )
}
