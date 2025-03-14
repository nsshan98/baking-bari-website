import React from 'react'
import AddCategory from './_components/AddCategory'

const Category = () => {
    return (
        <div >
            <div className='flex justify-between'>
                <AddCategory />
                <AddCategory />
            </div>
            <div>
                {/* Content Here */}
            </div>
        </div>
    )
}

export default Category
