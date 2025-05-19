import DeleteModal from '@/components/ui/DeleteModal'
import { useDeleteCategory } from '@/hooks/custom/categoryQuery'
import { isAxiosError } from 'axios'
import React from 'react'
import { toast } from 'react-toastify'

type DeleteCategoryProps = {
    category_id: string
    open: boolean
    onClose: () => void
}

const DeleteCategory = ({ category_id, open, onClose }: DeleteCategoryProps) => {
    const { deleteCategory } = useDeleteCategory()

    const handleDeleteCategory = () => {
        deleteCategory.mutate(category_id, {
            onSuccess: () => {
                toast.success("Category deleted successfully")
            },
            onError: (error) => {
                if (isAxiosError(error)) {
                    toast.error(error.response?.data.message)
                }
            }

        })
    }
    return (
        <div>
            <DeleteModal open={open} onClose={onClose} onConfirm={handleDeleteCategory} />
        </div>
    )
}

export default DeleteCategory
