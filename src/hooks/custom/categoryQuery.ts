import { axiosClient } from "@/lib/axiosClient"
import { CategorySchemaType } from "@/schema-types/category-types"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"

const useCreateCategory = () => {
    const createCategory = useMutation<CategorySchemaType, AxiosError>({
        mutationFn: async () => {
            return await axiosClient.post('/create-category')
        }
    })
    return { createCategory }
}


export { useCreateCategory }