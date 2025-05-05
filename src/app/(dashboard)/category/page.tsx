import React from 'react'
import AddCategory from './_components/AddCategory'
import ShowCategory from './_components/ShowCategory'

const Category = () => {
    return (
        <div className='max-w-full mx-auto pr-2'>
            <div className='flex justify-between'>
                <AddCategory />
                <AddCategory />
            </div>
            <div>
                <ShowCategory />
            </div>
        </div>
    )
}

export default Category
