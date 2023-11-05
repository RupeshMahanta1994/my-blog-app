import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

//Config
dotenv.config();
//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.get("/", (req, res) => {
  res.status(200).send({
    message: "Nove server running",
  });
});

//env variables
const PORT = process.env.PORT;
const DEV_MODE = process.env.DEV_MODE;
//listening
app.listen(8080, () => {
  console.log(`Server running on port ${PORT} in ${DEV_MODE}`);
});
