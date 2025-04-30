import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import { AdminRoute, VendorRoute } from "./routes";
import { MONGO_URI } from "./config";
import path from "path";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use("/admin", AdminRoute);
app.use("/vendor", VendorRoute);

mongoose.connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

app.listen(8000, () => {
    console.clear();
    console.log("app is listing to the port: 8000");
})