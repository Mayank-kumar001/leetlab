import { create } from "zustand"
import { axiosInstance } from "../lib/axios"
import { persist } from 'zustand/middleware'
import toast from "react-hot-toast"


const authStore = create(persist((set) => ({
    userData: null,
    isSigninUp: false,
    isverifying: false,
    isSending: false,
    isLoggingIn: false,
    isGettingUser: false,

    getUser: async () => {
        set({ isGettingUser: true })
        try {
            const res = await axiosInstance.get("/auth/me");
            console.log(res.data);
            set({ userData: res.data.data })
        } catch (error) {
            console.log("Error while fetching user", error);
            toast.error("An Error occured while fetching user");
            set({ userData: null })

        } finally {
            set({ isGettingUser: false })
        }
    },

    signup: async (data) => {
        set({ isSigninUp: true });
        try {
            const res = await axiosInstance.post("/auth/register", data);
            console.log(res.data);
            set({ userData: res.data.data });
            toast.success("Verification code sent on email")
        } catch (error) {
            console.log("error while signup", error);
            toast.error(`${error.response.data.message}`)
            throw new Error("error while signup")
            // set({userData: null});
        } finally {
            set({ isSigninUp: false })
        }
    },

    verify: async (data) => {
        set({ isverifying: true });
        try {
            const res = await axiosInstance.post("/auth/verify", data);
            console.log(res.data);
            set({ userData: res.data.data });
            toast.success("verification successfull")

        } catch (error) {
            console.log("Invalid verification code", error);
            toast.error(`${error.response.data.message}`)
            throw new Error("error in verification")
            // set({userData: null});

        } finally {
            set({ isverifying: false })
        }
    },

    resendCode: async (data) => {
        set({ isSending: true });
        try {
            const res = await axiosInstance.post("/auth/resend-verificationCode", data);
            toast.success("verifcation code sent successfully")
        } catch (error) {
            toast.error(`${error.response.data.message}`)
            throw new Error("error in resending verifcation code")
        } finally {

            set({ isSending: false });
        }
    },

    login: async (data) => {
        set({ isLoggingIn: true });
        try {
            const res = await axiosInstance.post("/auth/login", data);
            console.log(res.data);
            set({ userData: res.data.data });
            toast.success("login successfull")

        } catch (error) {
            // console.log("Error while login", error);
            toast.error(`${error.response.data.message}`);
            throw new Error("error in login the user")
        } finally {
            set({ isLoggingIn: false })
        }
    },

    logout: async () => {
        try {
            const res = await axiosInstance.post("/auth/logout");
            console.log(res.data);
            set({ userData: null });
            // location.reload();
            toast.success("logout successfull");

        } catch (error) {
            toast.error("Error while logout")
            throw new Error("Error while logout", error);
            // set({userData: null});
        }
    },

    forgotPassword: async (data) => {
        set({isSending: true})
        try {
            const res = await axiosInstance.post("/auth/forget-password", data)
            console.log(res.data);
            toast.success("Verification code sent successfully")
        } catch (error) {
            toast.error(`${error.response.data.message}`);
            throw new Error("error in sending verification code ")
        }finally {
            set({isSending: false});
        }
    },

    resetPassword: async (data) => {
        set({ isSending: true});
        
        try {
            const res = await axiosInstance.post("/auth/reset-password",  data);
            console.log(res.data);
            toast.success("Password Changed successfully")
        } catch (error) {
            toast.error(`${error.response.data.message}`);
            throw new Error("error in while resetting password");
        }finally {
            set({ isSending: false});
        }
    }


}),
    {
        name: "auth-storage",
        partialize: (state) => ({ userData: state.userData }),
    }

)

)

export default authStore;

