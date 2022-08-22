import { app } from "./app";
import { dogWalkingRoute } from "./controllers/routes/DogWalkingRouter";
import { userRoute } from "./controllers/routes/UserRouter";

app.use("/walk", dogWalkingRoute)

app.use("/user", userRoute)