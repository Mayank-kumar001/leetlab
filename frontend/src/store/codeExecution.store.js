import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";


const codeExecutionStore = create((set) => ({
    isExecuting: false,
    executionData: null,
    execute : async (data) => {
        set({isExecuting: true})
        try {
            const res = await axiosInstance.post("/execute-code", data);
            console.log("hello",res.data.data)
            set({executionData: res.data.data})
            toast.success("executed")

        } catch (error) {
            console.log("error from code execution store", error);
            toast.error(`${error.response.data.message}`)
        } finally{
            set({isExecuting: false})
        }
    }
}))

export default codeExecutionStore;