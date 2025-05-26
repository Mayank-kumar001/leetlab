import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast"

const problemStore = create((set) => ({
    problemData: null,
    loadingProblem: false,

    getProblemByID: async (id) => {
        try {
            set({ loadingProblem: true });
            const res = await axiosInstance.get(`/problem/get-problem/${id}`)
            console.log(res.data)
            set({problemData: res.data.data});
            // toast.success("Problem fetched successfully")
            return res.data.data;
        } catch (error) {
            console.log("error store se bol raha hu", error);
            toast.error(`${error.response.data.message}`)
        } finally {
            set({ loadingProblem: true });
        }
    }
}))

export default problemStore