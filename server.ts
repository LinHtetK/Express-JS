import express from "express";
import { menuRouter } from "./routes/menuRouter";

const app = express();
const PORT = 5000;

app.use(express.static("public"));

app.use("/menu", menuRouter);

app.listen(PORT, () => {
  console.log("Server is listen", PORT);
});
