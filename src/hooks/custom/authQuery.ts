import { axiosClient } from "@/lib/axiosClient";
import { UserSignUpSchemaTypes } from "@/schema-types/user-type";
import { useMutation } from "@tanstack/react-query";

const useUserSignUp = () => {
    const userSignUp = useMutation({
        mutationFn: async (payload: UserSignUpSchemaTypes) => {
            const res = await axiosClient.post("/user-signup", payload);
            return res.data;
        },
    });
    return { userSignUp };
};


export { useUserSignUp };
