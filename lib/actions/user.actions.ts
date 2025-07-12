"use server";

import API from "@/config/axios";
import { AuthRequest, AuthResponse } from "../types";
import { AxiosError } from "axios";

export const signIn = async ({ email, password }: AuthRequest): Promise<AuthResponse> => {
    try {
        const response = await API.post("/auth/sign-in", { email, password });
        return response.data;
    } catch (error) {
        const err = error as AxiosError<{ error: string }>;
        const message = err.response?.data?.error || "Sign-in failed";
        throw new Error(message);
    }
};

export const signUp = async ({ name, email, password }: AuthRequest): Promise<AuthResponse> => {
    try {
        const response = await API.post("/auth/sign-up", { name, email, password })
        return response.data
    } catch (error) {
        const err = error as AxiosError<{ error: string }>
        const message = err.response?.data?.error || "Sign-in failed";
        throw new Error(message);
    }
}