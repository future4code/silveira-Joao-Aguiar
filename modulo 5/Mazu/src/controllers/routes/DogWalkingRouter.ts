import express from "express"

export const dogWalkingRoute = express.Router()

dogWalkingRoute.post("/create")

dogWalkingRoute.put("/startWalk")

dogWalkingRoute.put("/endWalk")
