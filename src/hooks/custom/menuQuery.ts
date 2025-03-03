import { axiosClient } from "@/lib/axiosClient";
import { MenuSchemaType } from "@/schema-types/menu-types";
import { PopularProduct } from "@/schema-types/product-types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

const useShowMenuItem = () => {
    const showMenuItem = useQuery<PopularProduct[], AxiosError>({
        queryKey: ["menus"],
        queryFn: async () => {
            const { data } = await axiosClient.get("/menus");
            return data;
        },
    });
    return { showMenuItem };
};

const useCreateMenuItem = () => {
    const createMenuItem = useMutation<MenuSchemaType, AxiosError>({
        mutationFn: async () => {
            return await axiosClient.post('/menus')
        }
    })
    return { createMenuItem }
}

export { useShowMenuItem, useCreateMenuItem };
