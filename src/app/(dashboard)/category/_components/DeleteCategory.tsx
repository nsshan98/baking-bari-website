import DeleteModal from '@/components/ui/DeleteModal'
import { useDeleteCategory } from '@/hooks/custom/categoryQuery'
import React from 'react'

type DeleteCategoryProps = {
    category_id: string
    open: boolean
    onClose: () => void
}

const DeleteCategory = ({ category_id, open, onClose }: DeleteCategoryProps) => {
    const { deleteCategory } = useDeleteCategory()

    const handleDeleteCategory = () => {
        deleteCategory.mutate(category_id, {
            onSuccess: (response) => {
                console.log(response)
                console.log("Category deleted successfully")
            },
            onError: (error) => {
                console.error("Error deleting category:", error)
            }

        })
        console.log(category_id)
    }
    return (
        <div>
            <DeleteModal open={open} onClose={onClose} onConfirm={handleDeleteCategory} />
        </div>
    )
}

export default DeleteCategory
