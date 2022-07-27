import express from "express"

export const indexRoute = express.Router()

indexRoute.get("/show/:filter")