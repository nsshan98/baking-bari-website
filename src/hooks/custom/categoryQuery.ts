import { axiosClient } from "@/lib/axiosClient";
import { CategorySchemaType } from "@/schema-types/category-types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

// Create a new category
const useCreateCategory = () => {
    const createCategory = useMutation<CategorySchemaType, AxiosError>({
        mutationFn: async () => {
            return await axiosClient.post("/create-category");
        },
    });
    return { createCategory };
};

// Show all categories
const useShowCategories = () => {
    const showCategories = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const { data } = await axiosClient.get("/category");
            return data;
        },
        retry: false,
    });
    return { showCategories };
};

// Delete a category
const useDeleteCategory = () => {
    const queryClient = useQueryClient()
    const deleteCategory = useMutation({
        mutationFn: async (categoryId: string) => {
            return await axiosClient.delete(`/category/${categoryId}`)
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: ['categories']
            })
        }
    })
    return { deleteCategory };
}

// Update a category
const useUpdateCategory = (categoryId: string) => {
    const queryClient = useQueryClient()
    const updateCategory = useMutation({
        mutationFn: async (data: { category_name: string }) => {
            return await axiosClient.patch(`/category-update/${categoryId}`, data)
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: ['categories']
            })
        }

    })
    return { updateCategory };
}

export { useCreateCategory, useShowCategories, useDeleteCategory, useUpdateCategory };
