import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

const submissionStore = create((set) => ({
    isloadingSubmission: false,
    submissionByUser:null,
    getSubmissionByProblemId : async (data) => {
        set({isloadingSubmission: true})
        try {
            const res = axiosInstance.get(`/submission/get-submission/${data}`);
            set({submissionByUser : (await res).data.data});
        } catch (error) {
            console.log("error for submission store" , error)
        }
    }
}))

export default submissionStore