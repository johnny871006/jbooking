import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import hotels from "./routes/hotels.js";
import rooms from "./routes/rooms.js";
import users from "./routes/users.js";
import auth from "./routes/auth.js";

const app = express();
dotenv.config();

mongoose
  .connect("mongodb://localhost:27017/J_Booking")
  .then(() => {
    console.log("成功連線到J_Booking");
  })
  .catch((e) => {
    console.log(e);
  });

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

app.listen(8080, () => {
  console.log("成功連到8080!!");
});

//middlewares
app.use(express.json()); //讓上傳的req.body可以為json
app.use("/api/v1/hotels", hotels);
app.use("/api/v1/rooms", rooms);
app.use("/api/v1/users", users);
app.use("/api/v1/auth", auth);

app.use((error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "APIRouter出錯";
  return res
    .status(errorStatus)
    .send({ status: errorStatus, Message: errorMessage });
});
