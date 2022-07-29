import express from "express"
import { DogWalkingBusiness } from "../../business/DogWalkingBusiness"
import { Authenticator } from "../../business/services/Authenticator"
import { DogWalkingDataBase } from "../../data/DogWalkingDataBase"
import { DogWalkingController } from "../DogWalkingController"

export const dogWalkingRoute = express.Router()

const dogWalkingBusiness = new DogWalkingBusiness(
    new DogWalkingDataBase(),
    new Authenticator()
    )
const dogWalkingController = new DogWalkingController(dogWalkingBusiness)

dogWalkingRoute.post("/create", dogWalkingController.createWalk)

dogWalkingRoute.put("/startWalk")

dogWalkingRoute.put("/endWalk")
