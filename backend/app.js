import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import jobRouter from "./routes/jobRoutes.js";
import userRouter from "./routes/userRoutes.js";
import applicationRouter from "./routes/applicationRoutes.js";
import { config } from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

config({ path: ".env" });

const app = express();

// app.use(cors({
//   origin: '*',
//   credentials: true,
//   withCredentials: true
// }));

app.use(
  cors({
    origin: ['http://localhost:5173'],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
    
  })
);

// app.use(cors());

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicationRouter);
app.get('/',(req,res)=>{
  console.log("Server is running");
})
dbConnection();

app.use(errorMiddleware);
export default app;
