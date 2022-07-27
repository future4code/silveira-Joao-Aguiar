import { app } from "./app";
import { dogWalkingRoute } from "./controllers/routes/DogWalkingRouter";
import { indexRoute } from "./controllers/routes/IndexRouter";

app.use("/walk", dogWalkingRoute)

app.use("/index", indexRoute)

app.use("/user", indexRoute)