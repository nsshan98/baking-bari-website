import { axiosClient } from "@/lib/axiosClient";
import { useMutation } from "@tanstack/react-query";

const useUserSignUp = () => {
    const userSignUp = useMutation({
        mutationFn: async (payload) => {
            const res = await axiosClient.post("/user-signup", payload);
            return res.data;
        },
    });
    return { userSignUp };
};

export { useUserSignUp };
