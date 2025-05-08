import React from 'react'
import UpdateCategory from '../_components/UpdateCategory'

const CategoryUpdate = async ({ params }: { params: Promise<{ id: string }> }) => {
    const category_id = (await (params)).id
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/category/${category_id}`)
    const data = await response.json()
    return (
        <div>
            <UpdateCategory data={data} />
        </div>
    )
}

export default CategoryUpdate
