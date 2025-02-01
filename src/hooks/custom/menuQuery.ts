import { PopularProduct } from "@/schema-types/product-types"
import { useQuery } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"

const useShowMenuItem = () => {
    const showMenuItem = useQuery<PopularProduct[], AxiosError>({
        queryKey: ['menus'], queryFn: async () => {
            const { data } = await axios.get('http://localhost:5000/menus')
            return data
        }
    })
    return { showMenuItem }
}


export { useShowMenuItem }