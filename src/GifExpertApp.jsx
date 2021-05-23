import { useState } from 'react'
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export default function GifExpertApp() {
    const [categories, setcategories] = useState([])
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory
                setCategories={setcategories}
            />
            <hr />
            {
                categories.map(k =>
                    <GifGrid
                        key={k}
                        category={k} />)
            }
        </div>
    )

}