import { axiosClient } from "@/lib/axiosClient"
import { PopularProduct } from "@/schema-types/product-types"
import { useQuery } from "@tanstack/react-query"
import { AxiosError } from "axios"

const useShowMenuItem = () => {
    const showMenuItem = useQuery<PopularProduct[], AxiosError>({
        queryKey: ['menus'], queryFn: async () => {
            const { data } = await axiosClient.get('/menus')
            return data
        }
    })
    return { showMenuItem }
}


export { useShowMenuItem }