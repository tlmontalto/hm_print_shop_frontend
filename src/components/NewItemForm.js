import React from 'react'

export default function NewItemForm() {
    return (
        <div>
            <form>
                <input type="text" id="name" name="name" placeholder="Puppy Name"/>
                
                <input type="number" id="age" name="age" placeholder="Puppy Age"/>

                <input type="text" id="breed" name="breed" placeholder="Puppy Breed"/>

                <input type="submit" value="Add Puppy"/>
            </form>
        </div>
    )
}
