import { app } from "./app";
import { dogWalkingRoute } from "./controllers/routes/DogWalkingRouter";
import { indexRoute } from "./controllers/routes/IndexRouter";
import { userRoute } from "./controllers/routes/UserRouter";

app.use("/walk", dogWalkingRoute)

app.use("/index", indexRoute)

app.use("/user", userRoute)