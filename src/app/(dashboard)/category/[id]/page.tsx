import React from 'react'
import UpdateCategory from '../_components/UpdateCategory'
import { auth } from '@/auth'

const CategoryUpdate = async ({ params }: { params: Promise<{ id: string }> }) => {
    const category_id = (await (params)).id
    const session = await auth()
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/category/single-category/${category_id}`, {
        headers: {
            Authorization: `Bearer ${session?.accessToken}`,
        }
    })
    const data = await response.json()
    return (
        <div>
            <UpdateCategory data={data} />
        </div>
    )
}

export default CategoryUpdate
