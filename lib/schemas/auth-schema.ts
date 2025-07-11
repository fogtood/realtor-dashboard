import { z } from "zod"

export const authSchema = (type: "sign-in" | "sign-up") => z.object({
    name: type === "sign-in" ? z.string().optional() : z.string().min(2, {
        message: "Name must be at least 2 characters long"
    }),
    email: z.string().email(),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long"
    })
})