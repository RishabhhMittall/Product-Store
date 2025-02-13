import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";

dotenv.config(); // calling config method



const app = express();
const PORT = process.env.PORT || 3000;

// console.log(PORT);  //just to check the port


app.use(express.json());  //we can extract the JSON data

app.use(cors());  //resolve all the cors error

app.use(helmet()); // helmet is a security middleware that help you protect yout app by setting variuos http headers

app.use(morgan("dev")); //log the requests

app.use("/api/products" , productRoutes);

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})

