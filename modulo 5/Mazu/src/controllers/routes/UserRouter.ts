import express from "express"

export const userRoute = express.Router()

userRoute.post("/signup")

userRoute.post("/login")