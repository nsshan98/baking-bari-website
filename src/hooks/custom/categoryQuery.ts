import { axiosClient } from "@/lib/axiosClient";
import { CategorySchemaType } from "@/schema-types/category-types";
import { useMutation, useQuery } from "@tanstack/react-query";
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

export { useCreateCategory, useShowCategories };
