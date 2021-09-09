import express from "express";
import cors from "cors";
import winston from "winston";
import clientsRouter from "./routes/client.route.js";
import productsRouter from "./routes/client.route.js";
import suppliersRouter from "./routes/client.route.js";
import salesRouter from "./routes/client.route.js";

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level} ${message}`;
});
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "store-api.log" }),
  ],
  format: combine(label({ label: "store-api" }), timestamp(), myFormat),
});

const app = express();  

app.use(express.json());
app.use(cors());
app.use("/client", clientsRouter);
app.use("/product", productsRouter);
app.use("/supplier", suppliersRouter);
app.use("/sale", salesRouter);
app.listen(3000, () => console.log("API Iniciada."));
