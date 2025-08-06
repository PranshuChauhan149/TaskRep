import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/DB.js";
import UserRouter from "./routes/user.routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import currentUserRoute from "./routes/Auth.routes.js";
import ContactRouter from "./routes/Contact.routes.js";
import TaskRouter from "./routes/Tasks.routes.js";

const app = express();
dotenv.config();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("this is backend !!");
});

app.use("/api/user", UserRouter);
app.use("/api/auth", currentUserRoute);
app.use("/api/auth", ContactRouter);
app.use("/api/task", TaskRouter);

const PORT = 3000;

app.listen(PORT, () => {
  connectDb();
  console.log(`server is running on this PORT ${PORT}`);
});
